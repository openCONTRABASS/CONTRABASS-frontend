import {TaskTypeEnum} from "./task-type-enum";
import {TaskStatusEnum} from "./task-status-enum";

export interface Task {
  uuid: string;
  type: TaskTypeEnum;
  status: TaskStatusEnum;
  init_date: Date;

}

export function process_task_expiry (task: Task, expiry_hours: number, current_date: Date) {
  let hours_difference = Math.abs(current_date.getTime() - new Date(task.init_date).getTime()) / 36e5;
  if (hours_difference > expiry_hours) {
    task.status = TaskStatusEnum.EXPIRED;
  }
}



