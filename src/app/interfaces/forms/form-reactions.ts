import {OptimizationEnum} from './optimization-enum';
import {MediumEnum} from './medium-enum';

export interface FormReactions {
  uuid: string;
  objective?: string;
  fraction_of_optimum?: number;
}
