import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Model} from './interfaces/model';
import {TaskStatusEnum} from './interfaces/task-status-enum';
import {BackService} from './services/back.service';
import {StorageService} from './services/storage.service';
import {MessagesService} from './services/messages.service';
import {Task} from './interfaces/task';
import {WebsocketsService} from './services/websockets.service';
import {NotificationsService} from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('fileDropRef', { static: false }) fileDropEl: ElementRef;
  files: any[] = [];
  models: Model[] = [];

  error_reading_file: boolean;
  error_text = '';
  loading_file: boolean;


  ngOnInit(): void {

    this.models = this.storageService.getModels();

    this.messagesService.modelsChanged$.subscribe(
      model_uuid => this.models = this.storageService.getModels()
    );

    this.loading_file = false;

    // Initializa toast notificaitons
    // As this component is the parent component, it will hold and show
    // all received toast notifications that child component have published
    this.notificationsService.initComponent();

  }

  constructor(private backService: BackService,
              private storageService: StorageService,
              private messagesService: MessagesService,
              private notificationsService: NotificationsService) { }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.processFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.processFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log('Upload in progress.');
      return;
    }
    this.storageService.popModel(this.models[index]);
    this.files.splice(index, 1);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  processFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);

      this.loading_file = true;
      // restore error flag (i.e. 'error_reading_file') and error message prompted (i.e. 'error_text')
      // when a new file is submitted
      this.error_reading_file = false;
      this.error_text = '';

      this.backService.upload(item).subscribe(
        (response) => {

          if (response.status == 200) {

            // File and model read succesfully !
            this.error_reading_file = false;
            const new_model: Model = {
              file: item.name,
              submitted: new Date(),
              uuid: response.body.model_uuid,
              file_html: '',
              file_spreadsheet: '',
              metabolites: response.body.metabolites,
              reactions: response.body.reactions,
              genes: response.body.genes,
              tasks: [{
                type: undefined,
                uuid: undefined,
                status: TaskStatusEnum.WAITING_OPERATION,
                init_date: undefined
              }],
              pending_length: 0
            };
            this.storageService.pushModel(new_model);
            this.models.push(new_model);
            this.messagesService.notifyNewModel();
            // Notify that the model has been read succesfully to show a toast notification
            this.notificationsService.info(`File ${item.name} read successfully`);
            console.log(this.models);

          }

          // Or any other header:
          console.log(response.headers.get('X-Custom-Header'));
          this.loading_file = false;
        },
        (err) => {
          console.log('HTTP Error', err);
          this.error_reading_file = true;
          this.error_text = err.error.message;
          this.loading_file = false;
          // Notify that there was an error reading the file in a toast notification
          this.notificationsService.error(`Error reading file ${item.name}`);
        },
      );
    }

    this.fileDropEl.nativeElement.value = '';
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  popModel(index: number) {
    this.storageService.popModel(this.models[index]);
    this.models.splice(index, 1);
  }

  pushModel(model: Model) {
    this.storageService.pushModel(model);
    this.models.push(model);
  }

}
