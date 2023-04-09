import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import browseSvg from '../pr-cta-button/browse.svg';

@Component({
  selector: 'app-pr-cta-button',
  templateUrl: './pr-cta-button.component.html',
  styleUrls: ['./pr-cta-button.component.scss']
})
export class PrCtaButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() svgName!: string;

  @Output() closed: EventEmitter<string[]> = new EventEmitter();

  constructor() { }
  linkSVg: string = '';

  ngOnInit(): void {

  }

  clickButon(){

  }

}
