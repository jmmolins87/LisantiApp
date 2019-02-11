import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {

  // Offering

  deslizarTextoDesayuno: boolean;
  deslizarTextoMenu: boolean;
  deslizarTextoVino: boolean;
  deslizarTextoCopa: boolean;

  // Carrousel

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);



  constructor( config: NgbCarouselConfig ) {

    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

    // Offering
    this.deslizarTextoDesayuno = false;
    this.deslizarTextoMenu = false;
    this.deslizarTextoVino = false;
    this.deslizarTextoCopa = false;


  }
  
  ngOnInit() {
  }

}

