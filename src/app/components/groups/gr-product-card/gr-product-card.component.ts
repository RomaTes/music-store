import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gr-product-card',
  templateUrl: './gr-product-card.component.html',
  styleUrls: ['./gr-product-card.component.scss']
})
export class GrProductCardComponent implements OnInit {

  @Input() game!: any;

  addedToCart: boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.game);
  }

  addedToCardHandler(state: boolean) {
    this.addedToCart = state;
  }

}
