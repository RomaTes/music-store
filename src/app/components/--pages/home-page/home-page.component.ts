import { Component, OnInit } from '@angular/core';
// import {myFunction} from '../../../../assets/utils/canvas.js'
import particleAnimation from './particleAnimation.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //CanvasMain();
    // console.log(myFunction())
    setTimeout(() => {
      particleAnimation();
    }, 1000);
  }

  

}
