import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-gr-genres-menu',
  templateUrl: './gr-genres-menu.component.html',
  styleUrls: ['./gr-genres-menu.component.scss']
})
export class GrGenresMenuComponent implements OnInit {


  genresList = [
    { name: "Rock", icon: "assets/image/action.svg" },
    { name: "Jazz", icon: "assets/image/adventure.svg" },
    { name: "Rap", icon: "assets/image/adventure.svg" },
    { name: "Electronic", icon: "assets/image/racing.svg" },
    { name: "Funk", icon: "assets/image/RPG.svg" },
    { name: "Bluse", icon: "assets/image/RPG.svg" },
    { name: "Classical", icon: "assets/image/RPG.svg" }
];

  constructor(
    private productService: ProductService
  ) {
    this.productService = productService;
  }

  ngOnInit(): void {
  }

  selectGenre(item: any) {
    this.productService.subject.next(item);
  }

}
