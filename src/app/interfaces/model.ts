import {TaskStatusEnum} from "./task-status-enum";
import {Task} from "./task";

export interface Model {
  file: string;
  submitted: Date;
  uuid: string;
  file_html: string,
  file_spreadsheet: string,
  metabolites: number;
  reactions: number;
  genes: number;
  tasks: Task[];
  pending_length: number;

}

export function process_model_expiry(model: Model, expiry_hours: number, current_date: Date) {
  let hours_difference = Math.abs(current_date.getTime() - new Date(model.submitted).getTime()) / 36e5;
  if (hours_difference > expiry_hours) {
      for (let i = 0; i < model.tasks.length; i++) {
        model.tasks[i].status = TaskStatusEnum.EXPIRED;
      }
  }
}



