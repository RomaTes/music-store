import { Component, OnInit } from '@angular/core';
// import browseSvg from '../pr-cta-button/browse.svg';

@Component({
  selector: 'app-pr-cta-button',
  templateUrl: './pr-cta-button.component.html',
  styleUrls: ['./pr-cta-button.component.scss']
})
export class PrCtaButtonComponent implements OnInit {

  constructor() { }
  linkSVg: string = '';

  ngOnInit(): void {
     //this.linkSVg = require(`./browse.svg`);
  }

}
