import { Injectable } from '@angular/core';
import {Model} from '../interfaces/model';
import {Constants} from '../constants';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  pushModel(model: Model): void {
    let models = this.getModels();
    models.push(model);
    localStorage.setItem(Constants.localStorageItemModels, JSON.stringify(models));
  }

  popModel(modelInput: Model): void {
    let models = this.getModels();
    let index = -1;
    for (let i = 0; i < models.length; i++) {
      if (models[i].uuid === modelInput.uuid) {
        index = i;
        break;
      }
    }
    models.splice(index, 1);
    localStorage.setItem(Constants.localStorageItemModels, JSON.stringify(models));
  }

  updateModel(modelInput: Model): void {
    let models = this.getModels();
    const index = -1;
    for (let i = 0; i < models.length; i++) {
      if (models[i].uuid === modelInput.uuid) {
        models[i] = modelInput;
        break;
      }
    }
    localStorage.setItem(Constants.localStorageItemModels, JSON.stringify(models));
  }

  getModels(): Model[] {
    let models = localStorage.getItem(Constants.localStorageItemModels);
    if (models === undefined || models == null) {
      return [];
    } else {
      return JSON.parse(models);
    }
  }

}
