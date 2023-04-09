import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
