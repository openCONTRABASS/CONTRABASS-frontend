import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Constants} from '../constants';

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
      return invalid ? {invalidMinMax : {value: 'Fraction of optimum must be between 0.0 and 1.0'}} : null;
    };
  }

  formGrowthDependentValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return null;
  }

  formReactionsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const fraction_of_optimum = control.get('fraction_of_optimum');

    return fraction_of_optimum.invalid ? { invalidForm: true } : null;
  }

}
