export interface NgxLogMessage {
  type?: 'LOG' | 'INFO' | 'WARN' | 'ERR' | 'SUCCESS';
  timestamp?: string;
  message: string;
}
