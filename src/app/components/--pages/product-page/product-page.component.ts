import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: any;
  productID: any;

  constructor(
    private route:  ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //const productId = +this.route.snapshot.paramMap.get('id');
    //this.product = this.productService.getProduct(productId);
    // if(this.route.snapshot.paramMap.get('id') !== null){
      const productId = this.route.snapshot.paramMap.get('id');
    //}
    console.log("productId",productId);
  }

}
