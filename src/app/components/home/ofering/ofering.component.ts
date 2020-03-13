import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofering',
  templateUrl: './ofering.component.html',
  styleUrls: ['./ofering.component.scss']
})
export class OferingComponent implements OnInit {

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
