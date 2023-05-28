import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-gr-product-card',
  templateUrl: './gr-product-card.component.html',
  styleUrls: ['./gr-product-card.component.scss']
})
export class GrProductCardComponent implements OnInit {

  @Input() game!: any;
  

  addedToCart: boolean = true;

  constructor(
    // private selectedItemSubscriber: Subscription,
    // private productService: ProductService
  ) { }

  ngOnInit(): void {
    console.log(this.game);
    // this.selectedItemSubscriber = this.productService.subject.subscribe(config => {
    //   console.log(config);
    // });
  }

  addedToCardHandler(state: boolean) {
    this.addedToCart = state;
  }

}
