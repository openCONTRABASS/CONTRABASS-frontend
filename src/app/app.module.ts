import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { ListElementComponent } from './components/list-element/list-element.component';
import { ModelComponent } from './components/model/model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LogMonitorModule } from 'ngx-log-monitor';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Constants } from './constants';
import {A11yModule} from '@angular/cdk/a11y';

import { ToastrModule } from 'ngx-toastr';

const config: SocketIoConfig = { url: Constants.websocketEndpoint, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    ListElementComponent,
    ModelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    SocketIoModule.forRoot(config),
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    A11yModule,
    LogMonitorModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
