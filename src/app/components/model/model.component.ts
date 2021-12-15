import {Component, Input, OnInit} from '@angular/core';
import {Model, process_model_expiry} from '../../interfaces/model';
import {TaskStatusEnum} from '../../interfaces/task-status-enum';
import {Observable, Subject, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {retry, switchMap, takeUntil} from 'rxjs/operators';
import {StorageService} from '../../services/storage.service';
import {MessagesService} from '../../services/messages.service';
import {TaskTypeEnum} from '../../interfaces/task-type-enum';
import {BackService} from '../../services/back.service';
import {ResponseTaskGrowthDependent} from '../../interfaces/response-task-growth-dependent';
import {ResponseStatus} from '../../interfaces/response-status';
import {Constants} from '../../constants';
import {process_task_expiry} from '../../interfaces/task';
import {FormGrowthDependent} from '../../interfaces/forms/form-growth-dependent';
import {FormControl, FormGroup} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import {FormReactions} from '../../interfaces/forms/form-reactions';
import {MediumEnumView, MediumView} from '../../interfaces/forms/medium-enum';
import {OptimizationEnumView, OptimizationView} from '../../interfaces/forms/optimization-enum';
import {WebsocketsService} from '../../services/websockets.service';
import {ResponseTaskCriticalReactions} from '../../interfaces/response-task-critical-reactions';
import {NgxLogMessage} from '../../interfaces/ngx-log-message';
import {NotificationsService} from '../../services/notifications.service';


@Component({
  selector: '[app-model]',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  @Input() model: Model;

  public taskStatusEnum = TaskStatusEnum;
  private taskStatusInfo$: Observable<any>;
  private taskObserver$: Observable<any>;
  private stopPolling = new Subject();

  optimizationEnumView: OptimizationView[] = OptimizationEnumView.optimization;
  mediumEnumView: MediumView[]       = MediumEnumView.medium;

  formGrowthDependentGroup: FormGroup;
  formReactionsSetsGroup: FormGroup;
  formCGrowthDependentInitialValues: FormGrowthDependent = {
    uuid: undefined,
    objective: undefined,
  };

  formReactionsInitialValues: FormReactions = {
    uuid: undefined,
    objective: undefined,
    fraction_of_optimum: 1.0,
  };

  restoredLogs: NgxLogMessage[] = [];

  private logStream = new Subject<NgxLogMessage>();
  logStream$ = this.logStream.asObservable();

  constructor(private http: HttpClient, private storageService: StorageService, private messagesService: MessagesService,
              private backService: BackService, private validationService: ValidationService,
              private websocketsService: WebsocketsService, private notificationsService: NotificationsService) { }

  ngOnInit(): void {

    /********************************************************************************************/
    /* FORM VALIDATION */
    this.formGrowthDependentGroup = new FormGroup({
      uuid: new FormControl(this.formCGrowthDependentInitialValues.uuid),
      objective: new FormControl(this.formCGrowthDependentInitialValues.objective, []),
    }, { validators: this.validationService.formGrowthDependentValidator });

    this.formReactionsSetsGroup = new FormGroup({
      uuid: new FormControl(this.formReactionsInitialValues.uuid),
      fraction_of_optimum: new FormControl(this.formReactionsInitialValues.fraction_of_optimum, [
        this.validationService.minMaxValidator(Constants.MIN_FRACTION_OPTIMUM, Constants.MAX_FRACTION_OPTIMUM),
      ]),
      objective: new FormControl(this.formReactionsInitialValues.objective, []),
    }, { validators: this.validationService.formReactionsValidator });

    /********************************************************************************************/
    // INPUT EXCHANGE INIT
    // this class will be notified when a model has been deleted
    this.messagesService.modelsDeleted$.subscribe(
      (modelUUID) => {
        console.log(modelUUID);
        if (this.model.uuid === modelUUID) {
          this.deleteModel(this.model);
        }
      }
    );

    /********************************************************************************************/
    /* STATUS RECOVERY */
    // celery wont give expiry info
    // have to save and calculate manually
    process_model_expiry(this.model, Constants.EXPIRY_MODELS, new Date());

    // check individual task have not expired
    for (let i = 0; i < this.model.tasks.length; i++) {
      process_task_expiry(this.model.tasks[i], Constants.EXPIRY_TASKS, new Date());
    }

    // restart the process of checking running tasks
    for (let i = 0; i < this.model.tasks.length; i++) {

      // model was deleted but could not finish deleting it -> retry again
      if (this.model.tasks[i].status === TaskStatusEnum.DELETING) {
        this.stopTaskAndDeleteModel( this.model, this.model.tasks[i].uuid);

      } else if (this.model.tasks[i].status == TaskStatusEnum.IN_QUEUE
        || this.model.tasks[i].status == TaskStatusEnum.RUNNING) {

        switch (this.model.tasks[i].type) {
          case TaskTypeEnum.COMPUTE_GROWTH_DEPENDENT:
            this.periodicallyCheckGrowthDependent(this.model.tasks[i].uuid);
            break;
          case TaskTypeEnum.COMPUTE_CRITICAL_REACTIONS:
            this.periodicallyCheckReactionsSets(this.model.tasks[i].uuid);
            break;
          default:
            // unknown task
            break;
        }

        // if task is already running, subscribe again to socket-io channel
        // channel is given by the model id
        if (this.model.tasks[i].status == TaskStatusEnum.RUNNING) {
          this.websocketsService.joinRoom(this.model.uuid);
          this.websocketsService.getMessage(this.model.uuid).subscribe(
            (data) => {
              this.manageWebsocketMessage(data.data);
            }
          );
        }

      }
    }

  }

  periodicallyCheckGrowthDependent(task_uuid: string): void {
    this.taskStatusInfo$ = this.checkTasksGrowthDependent(task_uuid);
    this.taskStatusInfo$.subscribe(
      (result) => {

        console.log('recibido');
        console.log(result);

        const response = result.body as ResponseTaskGrowthDependent;
        const pending_length = response.pending_length;

        if (response.finished == false) {
          if (response.status == ResponseStatus.FAILURE) {
            this.stopCheckTasks();
            this.setStatusForTask(task_uuid, TaskStatusEnum.FAILURE, this.model);
            // notify the error
            this.notificationsService.error(`Error computing task on model: ${this.model.file}`);
          } else if (response.status == ResponseStatus.PENDING) {
            // model is already in status IN QUEUE
            this.model.pending_length = pending_length;
            this.storageService.updateModel(this.model);
          } else {
            this.setStatusForTask(task_uuid, TaskStatusEnum.RUNNING, this.model);
            this.storageService.updateModel(this.model);
          }

        } else {

          // task has ended succesfully!
          this.stopCheckTasks();
          this.model.file_html = Constants.baseApiUrlStatic + response.file_html;
          this.model.file_spreadsheet = Constants.baseApiUrlStatic + response.file_spreadsheet;
          this.setStatusForTask(task_uuid, TaskStatusEnum.DONE, this.model);
          this.storageService.updateModel(this.model);

          // notify that the task has ended
          this.notificationsService.success(`Growth dependent computation finished successfully on model: ${this.model.file}`);

        }

      },
      (error) => {
        if (error.status === 404) {
          this.stopCheckTasks();
          this.setStatusForTask(task_uuid, TaskStatusEnum.EXPIRED, this.model);
        }
        else {
          this.stopCheckTasks();
          this.setStatusForTask(task_uuid, TaskStatusEnum.FAILURE, this.model);
        }
      }
    );
  }

  get form_cp_objective()           { return this.formGrowthDependentGroup.get('objective'); }

  get form_reacs_fraction_of_optimum() { return this.formReactionsSetsGroup.get('fraction_of_optimum'); }
  get form_reacs_objective()           { return this.formReactionsSetsGroup.get('objective'); }


  periodicallyCheckReactionsSets(task_uuid: string): void {
    this.taskStatusInfo$ = this.checkTasksReactionsSets(task_uuid);
    console.log('Suscribing...');
    this.taskStatusInfo$.subscribe(
      (result) => {
        console.log('Result:');
        console.log(result);

        const response = result.body as ResponseTaskCriticalReactions;
        const pending_length = response.pending_length;

        if (response.finished == false) {

          if (response.status == ResponseStatus.FAILURE) {
            this.stopCheckTasks();
            this.setStatusForTask(task_uuid, TaskStatusEnum.FAILURE, this.model);
            // notify the error
            this.notificationsService.error(`Error computing task on model: ${this.model.file}`);
          } else if (response.status == ResponseStatus.PENDING) {
            // model is already in status IN QUEUE
            this.model.pending_length = pending_length;
            this.storageService.updateModel(this.model);
          } else {
            this.setStatusForTask(task_uuid, TaskStatusEnum.RUNNING, this.model);
            this.storageService.updateModel(this.model);
          }

        } else {

          // task has finished successfully !
          this.stopCheckTasks();
          this.model.file_html = Constants.baseApiUrlStatic + response.file_html;
          this.model.file_spreadsheet = Constants.baseApiUrlStatic + response.file_spreadsheet;
          this.setStatusForTask(task_uuid, TaskStatusEnum.DONE, this.model);
          this.storageService.updateModel(this.model);

          // notify that the task has ended
          this.notificationsService.success(`Critical reactions computation finished successfully on model: ${this.model.file}`);

        }

      },
      (error) => {
        console.log('Error!');
        if (error.status === 404) {
          this.stopCheckTasks();
          this.setStatusForTask(task_uuid, TaskStatusEnum.EXPIRED, this.model);
        }
        else {
          this.stopCheckTasks();
          this.setStatusForTask(task_uuid, TaskStatusEnum.FAILURE, this.model);
        }
      },
      () => {
        console.log('Complete?');
      }
    );
  }


  operationComputeGrowthDependent(model: Model): void {

    // The field 'restoredLogs', which is used for the component 'log-monitor'
    // as history is emptied, as it might have logs from previous operations.
    this.restoredLogs = [];

    // subscribe to websocket
    try {
      this.websocketsService.joinRoom(model.uuid);
      this.websocketsService.getMessage(model.uuid).subscribe(
        (data) => {
          this.manageWebsocketMessage(data.data);
        }
      );
    } catch (error) {
      console.error(error);
    }

    // notify that the process has been queued
    this.notificationsService.info(`Task on model: ${model.file} has been queued`);

    // update list of models tasks and store in cookies
    // in order to track model status
    model.tasks[0].status = TaskStatusEnum.IN_QUEUE;
    this.storageService.updateModel(model);

    // build form values to be used on the endpoint request
    const formValues: FormGrowthDependent = this.formGrowthDependentGroup.getRawValue();
    formValues.uuid = model.uuid;

    this.backService.computeGrowthDependent(formValues).subscribe(
      (response) => {

        const task_uuid      = response.body.task_id;
        const pending_length = response.body.pending_length;
        model.tasks[0].uuid = task_uuid;
        model.pending_length = pending_length;
        this.setStatusForTask(task_uuid, TaskStatusEnum.IN_QUEUE, this.model);
        this.initTypeForTask(task_uuid, TaskTypeEnum.COMPUTE_GROWTH_DEPENDENT, this.model);
        this.storageService.updateModel(model);
        console.log('task uuid: ' + task_uuid);

        this.periodicallyCheckGrowthDependent(task_uuid);

      },
      (error) => {
        if (error.status === 404) {
          this.model.tasks[0].status = TaskStatusEnum.EXPIRED;
        }
        else {
          this.model.tasks[0].status = TaskStatusEnum.FAILURE;
          // TODO: manage unexpected error
        }
      }
    );
    // suscribe

  }

  operationComputeReactionsSets(model: Model) {

    // The field 'restoredLogs', which is used for the component 'log-monitor'
    // as history is emptied, as it might have logs from previous operations.
    this.restoredLogs = [];

    // subscribe to websocket
    this.websocketsService.joinRoom(model.uuid);
    this.websocketsService.getMessage(model.uuid).subscribe(
      (data) => {
        this.manageWebsocketMessage(data.data);
      }
    );

    // notify that the process has been queued
    this.notificationsService.info(`Task on model: ${model.file} has been queued`);

    // update list of models tasks and store in cookies
    // in order to track model status
    model.tasks[0].status = TaskStatusEnum.IN_QUEUE;
    this.storageService.updateModel(model);

    // build form values to be used on the endpoint request
    const formValues: FormReactions = this.formReactionsSetsGroup.getRawValue();
    formValues.uuid = model.uuid;

    this.backService.computeReactionsSet(formValues).subscribe(
      (response) => {

        const task_uuid      = response.body.task_id;
        const pending_length = response.body.pending_length;
        model.tasks[0].uuid = task_uuid;
        model.pending_length = pending_length;
        this.setStatusForTask(task_uuid, TaskStatusEnum.IN_QUEUE, model);
        this.initTypeForTask(task_uuid, TaskTypeEnum.COMPUTE_CRITICAL_REACTIONS, model);
        this.storageService.updateModel(model);
        console.log('task uuid: ' + task_uuid);

        this.periodicallyCheckReactionsSets(task_uuid);

      },
      (error) => {
        if (error.status === 404) {
          this.model.tasks[0].status = TaskStatusEnum.EXPIRED;
        }
        else {
          this.model.tasks[0].status = TaskStatusEnum.FAILURE;
          // TODO: manage unexpected error
        }
      }
    );
    // suscribe

  }

  checkTasksGrowthDependent(task_uuid: string): Observable<any> {

    const url = `/results/${task_uuid}/growth_dependent_reactions`;

    console.log('Init timer...');

    this.taskObserver$ = timer(5000, 5000).pipe(
      switchMap(() => this.backService.getGrowthDependentTasks(task_uuid)),
      retry(5), // retry 5 times if error
      takeUntil(this.stopPolling)
    );

    return this.taskObserver$;
  }

  checkTasksReactionsSets(task_uuid: string): Observable<any> {

    this.taskObserver$ = timer(5000, 5000).pipe(
      switchMap(
        () => this.backService.getCriticalReactionTasks(task_uuid)
      ),
    retry(5), // retry 5 times if error
      takeUntil(this.stopPolling)
    );

    return this.taskObserver$;
  }

  stopCheckTasks() {
    this.stopPolling.next();
  }


  deleteModelPermanently(model: Model) {
    this.storageService.popModel(model);
    this.messagesService.notifyModelChange(model);
  }

  stopTaskAndDeleteModel(model: Model, task_uuid: string) {
    this.backService.stopExecution(task_uuid).subscribe(
      (respose) => {
        // success removing task from back -> delete model locally
        this.deleteModelPermanently(model);
      },
      (error) => {
        // error after retry: delete the model anyway
        this.deleteModelPermanently(model);
      }
    );
  }

  deleteModel(model: Model) {
    console.log("Deleting model...");
    let still_running = false;
    let task_still_running;
    for (let i = 0; i < model.tasks.length; i++) {
      if (model.tasks[i].status === TaskStatusEnum.IN_QUEUE || model.tasks[i].status === TaskStatusEnum.RUNNING) {
        still_running = true;
        task_still_running = i;
      }
    }
    console.log(model.tasks[task_still_running].uuid);
    if (still_running) {
      this.setStatusForTask(model.tasks[task_still_running].uuid, TaskStatusEnum.DELETING, model);
      this.stopCheckTasks();
      this.stopTaskAndDeleteModel(model, model.tasks[task_still_running].uuid);
    } else {
      this.deleteModelPermanently(model);
    }
  }

  initTypeForTask(task_uuid: string, task_type: TaskTypeEnum, model: Model) {
    for (let i = 0; i < model.tasks.length; i++) {
      if (model.tasks[i].uuid == task_uuid) {
        model.tasks[i].type = task_type;
        model.tasks[i].init_date = new Date();
        break;
      }
    }
  }

  setStatusForTask(task_uuid: string, task_status: TaskStatusEnum, model: Model) {
    for (let i = 0; i < model.tasks.length; i++) {
      if (model.tasks[i].uuid == task_uuid) {
        model.tasks[i].status = task_status;
        break;
      }
    }
  }

  private manageWebsocketMessage(data: any): void {
    const newLog: NgxLogMessage = {message: data, type: 'INFO'};
    // If the model task is still in the tasks queue
    // but we have already received log messages, meaning that the task has already started
    // but the webpage is not yet aware.
    // We save the log in the 'restoredLogs' which will be shown in the 'log-monitor' component
    // once the model task status is updated to RUNNING
    if (this.model.tasks[0].status === TaskStatusEnum.IN_QUEUE) {
      this.restoredLogs.push(newLog);
    }
    // the log message is either way passed to the 'logStream' subject,
    // which is consumed by the 'log-monitor' component.
    this.logStream.next(newLog);
  }
}
