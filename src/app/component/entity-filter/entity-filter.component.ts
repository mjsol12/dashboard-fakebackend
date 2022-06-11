import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-entity-filter',
  templateUrl: './entity-filter.component.html',
  styleUrls: ['./entity-filter.component.scss']
})
export class EntityFilterComponent {
  inputSelected: boolean = false;
  @Input() class: string = '';
  @Input() data: any = null;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Output() deselect: EventEmitter<any> = new EventEmitter();

  toggle() {
    if(this.class !== 'primary'){
      this.inputSelected = !this.inputSelected;
      if (this.inputSelected) {
        this.selected.emit({value: this.data,selected: true});
      } else {
        this.deselect.emit({value: this.data,selected: false});
      }
    }
  }
  constructor() { }
}
