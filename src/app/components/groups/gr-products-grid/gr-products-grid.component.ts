import { Component, OnInit } from '@angular/core';
import games from 'src/data/records';

@Component({
  selector: 'app-gr-products-grid',
  templateUrl: './gr-products-grid.component.html',
  styleUrls: ['./gr-products-grid.component.scss']
})
export class GrProductsGridComponent implements OnInit {

  games: any = games;

  constructor() { }

  ngOnInit(): void {
    console.log("games",games);
  }

}
