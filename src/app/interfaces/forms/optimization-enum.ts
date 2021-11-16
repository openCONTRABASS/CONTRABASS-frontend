export enum OptimizationEnum {
  FBA = "FBA",
  pFBA = "pFBA"
}

export interface OptimizationView {
  value: OptimizationEnum;
  viewValue: string;
}

export class OptimizationEnumView {
  static optimization: OptimizationView[] = [
    {value: OptimizationEnum.FBA,  viewValue: 'FBA'},
    {value: OptimizationEnum.pFBA, viewValue: 'pFBA'}
  ];
}
