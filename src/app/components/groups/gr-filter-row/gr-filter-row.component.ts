import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-gr-filter-row',
  templateUrl: './gr-filter-row.component.html',
  styleUrls: ['./gr-filter-row.component.scss']
})
export class GrFilterRowComponent implements OnInit {

  //private productService: ProductService

  selectedItemSubscriber: Subscription = new Subscription();
  filter: string = 'none';

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
        //this.filteredGames = cloneDeep(this.gamesList).filter((v: { genre: string }) => v.genre.toLowerCase() === config.name.toLowerCase());
        this.filter = config.name;
      } else if(config === null) {
        //this.filteredGames = cloneDeep(this.gamesList);
        this.filter = "none";
      }
     // console.log("games",this.filteredGames);
    });
    
  }
  clearGenre() {
    this.productService.subject.next(null);
  }



}
