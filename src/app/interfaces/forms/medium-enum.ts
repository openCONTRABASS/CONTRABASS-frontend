export enum MediumEnum {
  DEFAULT = "DEFAULT",
  COMPLETE = "COMPLETE"
}

export interface MediumView {
  value: MediumEnum;
  viewValue: string;
}

export class MediumEnumView {
  static medium: MediumView[] = [
    {value: MediumEnum.DEFAULT,  viewValue: 'Default'},
    {value: MediumEnum.COMPLETE, viewValue: 'Complete'}
  ];
}
