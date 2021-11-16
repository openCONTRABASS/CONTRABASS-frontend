import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string): void {
    this.socket.emit('message', msg);
  }

  joinRoom(roomName: string): void {
    this.socket.emit('join', roomName);
  }

  getMessage(fromEvent: string): Observable<any>{
    return this.socket
      .fromEvent(fromEvent)
      .pipe(map((data) => {
          console.log(data);
          return data;
        }
      ));
  }

}
