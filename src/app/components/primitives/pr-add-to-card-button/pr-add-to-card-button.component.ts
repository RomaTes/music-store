import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pr-add-to-card-button',
  templateUrl: './pr-add-to-card-button.component.html',
  styleUrls: ['./pr-add-to-card-button.component.scss']
})
export class PrAddToCardButtonComponent implements OnInit {

  @Input() state!: boolean;

  @Output() stateChanger: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeState(){
    this.stateChanger.emit(!this.state);
  }

}
