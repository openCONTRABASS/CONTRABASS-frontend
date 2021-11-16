import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Model} from '../../interfaces/model';
import {TaskStatusEnum} from '../../interfaces/task-status-enum';
import {BackService} from '../../services/back.service';
import {Observable} from 'rxjs';
import {StorageService} from '../../services/storage.service';
import {MessagesService} from '../../services/messages.service';
import {MatTable} from '@angular/material/table';


@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input() models: Model[];
  @ViewChild(MatTable) myTable!: MatTable<any>;


  displayedColumns: string[] = ['file', 'date', 'metabolites', 'reactions', 'genes', 'model', 'delete'];

  constructor(private storageService: StorageService, private messagesService: MessagesService,
              private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refresh();
  }

  deleteModel(model: Model): void {
    this.storageService.popModel(model);
    this.messagesService.notifyModelChange(model);
  }

  refresh() {
      this.messagesService.newModel$.subscribe((data: string) => {
        this.myTable.renderRows();
    });
  }

}




