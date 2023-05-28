import { Component, OnInit } from '@angular/core';
// import {myFunction} from '../../../../assets/utils/canvas.js'
import particleAnimation from './particleAnimation.js';
import  {Cursor}  from 'src/assets/utils/cursor.js';
import { slideInOut } from 'src/assets/animations/animation.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [slideInOut]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //CanvasMain();
    // console.log(myFunction())
    // setTimeout(() => {
      particleAnimation();
      Cursor();
    // }, 1000);
  }

  

}
