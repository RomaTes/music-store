import { Component, OnInit } from '@angular/core';
import { slideInOut } from 'src/assets/animations/animation.js';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
  animations: [slideInOut]
})
export class StorePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
