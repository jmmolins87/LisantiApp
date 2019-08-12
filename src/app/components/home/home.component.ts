import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Offering

  deslizarTextoDesayuno: boolean;
  deslizarTextoMenu: boolean;
  deslizarTextoVino: boolean;
  deslizarTextoCopa: boolean;
  constructor() {



    // Offering
    this.deslizarTextoDesayuno = false;
    this.deslizarTextoMenu = false;
    this.deslizarTextoVino = false;
    this.deslizarTextoCopa = false;
  }

  ngOnInit() {
  }

}

