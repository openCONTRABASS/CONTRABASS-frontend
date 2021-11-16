import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private sInfo = new Subject<string>();
  private sSuccess = new Subject<string>();
  private sError = new Subject<string>();
  info$ = this.sInfo.asObservable();
  success$ = this.sSuccess.asObservable();
  error$ = this.sError.asObservable();

  constructor(private toastr: ToastrService) { }

  initComponent(): void {
    // This method should be called by the parent component that will
    // display all notifications
    // It should be called by child components as the notifications
    // will appear at the child component position

    this.info$.subscribe((msg: string) => this.toastr.info(msg, '', {positionClass: 'toast-bottom-right' }));
    this.success$.subscribe((msg: string) => this.toastr.success(msg, '', {positionClass: 'toast-bottom-right' }));
    this.error$.subscribe((msg: string) => this.toastr.error(msg, '', {positionClass: 'toast-bottom-right' }));
  }

  info(message: string): void {
    this.sInfo.next(message);
  }

  success(message: string): void {
    this.sSuccess.next(message);
  }

  error(message: string): void {
    this.sError.next(message);
  }

}
