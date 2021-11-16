import {ResponseStatus} from "./response-status";

export interface ResponseTaskGrowthDependent {
  file_html: string,
  file_spreadsheet: string,
  finished: boolean,
  result: string,
  status: ResponseStatus,
  pending_length: number
}
