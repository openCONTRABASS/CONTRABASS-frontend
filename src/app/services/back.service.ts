import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, Subject, timer} from 'rxjs';
import {retry, share, switchMap, takeUntil, tap} from 'rxjs/operators';
import {Model} from '../interfaces/model';
import {TaskStatusEnum} from '../interfaces/task-status-enum';
import {FormGrowthDependent} from '../interfaces/forms/form-growth-dependent';
import {FormReactions} from '../interfaces/forms/form-reactions';
import {Constants} from '../constants';


@Injectable({
  providedIn: 'root'
})

export class BackService {

  // API url
  sumbitEndpoint = '/submit';
  sumbitURLEndpoint = '/submit_url';

  private taskObserver$: Observable<any>;
  private stopPolling = new Subject();

  constructor(private http: HttpClient) { }

  // Returns an observable
  upload(file): Observable<HttpResponse<any>> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(
      Constants.baseApiUrl + this.sumbitEndpoint, formData, {observe: 'response'});
  }

  // Returns an observable
  upload_with_url(url: string): Observable<HttpResponse<any>> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('model_url', url);

    // Make http post request over api
    // with formData as req
    return this.http.post(
      Constants.baseApiUrl + this.sumbitURLEndpoint, formData, {observe: 'response'});
  }

  computeGrowthDependent(formGrowthDependentValues: FormGrowthDependent): Observable<any> {

    console.log('Calling POST /growth_dependent_reactions');

    const url = `/models/${formGrowthDependentValues.uuid}/growth_dependent_reactions`;

    const formData = new FormData();
    formData.append('uuid', formGrowthDependentValues.uuid);
    if (formGrowthDependentValues.objective) {
      formData.append('objective', formGrowthDependentValues.objective);
    }

    return this.http.post(
      Constants.baseApiUrl + url, formData, {observe: 'response'});
  }


  computeReactionsSet(formReactions: FormReactions): Observable<any> {

    console.log('Calling POST /critical_reactions');

    const url = `/models/${formReactions.uuid}/critical_reactions`;

    const formData = new FormData();
    formData.append('uuid', formReactions.uuid);
    if (formReactions.fraction_of_optimum) {
      formData.append('fraction_of_optimum', formReactions.fraction_of_optimum.toString());
    }
    if (formReactions.objective) {
      formData.append('objective', formReactions.objective);
    }

    return this.http.post(
      Constants.baseApiUrl + url, formData, {observe: 'response'});
  }

  stopExecution(taskUUUID: string): Observable<any> {

    console.log('Calling POST /terminate');

    const url = `/results/${taskUUUID}/terminate`;

    return this.http.post(
      Constants.baseApiUrl + url, {observe: 'response'});
  }

  getGrowthDependentTasks(taskUUUID: string): Observable<any> {

    const url = `/results/${taskUUUID}/growth_dependent_reactions`;

    return this.http.get(Constants.baseApiUrl + url, {observe: 'response'});
  }

  getCriticalReactionTasks(task_uuid: string): Observable<any> {

    const url = `/results/${task_uuid}/critical_reactions`;

    return this.http.get(Constants.baseApiUrl + url, {observe: 'response'});
  }

  getTaskStatusObserver(): Observable<any> {
    return this.taskObserver$;
  }

  stopCheckTasks() {
    this.stopPolling.next();
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }

}
