import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Constants} from '../constants';
import {invalid} from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  minMaxValidator(minimum: number, maximum: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let invalid = false;
      if (control.value < minimum || control.value > maximum) {
        invalid = true;
      }
      return invalid ? {invalidMinMax : {value: Constants.ERROR_FVA_RANGE}} : null;
    };
  }

  validateEmptyObjective(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let invalid = false;
      if (control.value === null) {
        invalid = true;
      }
      return invalid ? {invalidMinMax : {value: Constants.ERROR_NO_REACTION_OBJECTIVE}} : null;
    };
  }

  formGrowthDependentValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const objective = control.get('objective');

    return objective.invalid ? { invalidForm: true } : null;
  }

  formReactionsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const fraction_of_optimum = control.get('fraction_of_optimum');

    return fraction_of_optimum.invalid ? { invalidForm: true } : null;
  }

}
