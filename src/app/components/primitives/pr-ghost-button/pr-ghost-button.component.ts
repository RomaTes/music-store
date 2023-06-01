import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pr-ghost-button',
  templateUrl: './pr-ghost-button.component.html',
  styleUrls: ['./pr-ghost-button.component.scss']
})
export class PrGhostButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() svgName!: string;



  constructor() { }

  ngOnInit(): void {
  }



}
