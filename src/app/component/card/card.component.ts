import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../shared/models/cards";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Data!: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
