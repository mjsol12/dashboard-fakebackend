import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {table} from "../../shared/models/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,AfterViewInit {
  @Input() Headers: table[] = [];
  @Input() Rows: any[] = [];
  @Output() OnSelectedItem: EventEmitter<any> = new EventEmitter();
  showCheckbox: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const found = this.Headers.find(val => val.name === 'checkbox' || val.type === 'checkbox')
    if(found) {
      this.showCheckbox = true;
    }
  }

  ngAfterViewInit(): void {

  }

  SelectedItem(data: table) {
    this.OnSelectedItem.emit(data);
  }
}
