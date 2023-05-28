import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import games from 'src/data/records';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-gr-products-grid',
  templateUrl: './gr-products-grid.component.html',
  styleUrls: ['./gr-products-grid.component.scss']
})
export class GrProductsGridComponent implements OnInit {

  gamesList: any = [...games];
  filteredGames: any = [...this.gamesList];

  //private productService: ProductService;
  selectedItemSubscriber: Subscription = new Subscription();

  constructor(
    private productService: ProductService
    //productService: ProductService
  ) {
    this.productService = productService 
    
  }

  ngOnInit(): void {
    this.selectedItemSubscriber = this.productService.subject.subscribe(config => {
      console.log(config);
      if(config){
        this.filteredGames = cloneDeep(this.gamesList).filter((v: { genre: string }) => v.genre.toLowerCase() === config.name.toLowerCase());
      } else if(config === null) {
        this.filteredGames = cloneDeep(this.gamesList);
      }
      console.log("games",this.filteredGames);
    });
    
  }

}
