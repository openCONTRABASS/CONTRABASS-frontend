import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Model} from '../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  private modelsChanged = new Subject<string>();
  private newModel = new Subject<string>();
  modelsChanged$ = this.modelsChanged.asObservable();
  newModel$ = this.newModel.asObservable();

  notifyModelChange(model: Model) {
    this.modelsChanged.next(model.uuid);
  }

  notifyNewModel() {
    this.newModel.next('');
  }

}
