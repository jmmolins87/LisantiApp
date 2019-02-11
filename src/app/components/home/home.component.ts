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

    // Map

    lat: number;
    lng: number;
    zoom: number;

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

    // Map
    this.lat = 40.46592709999999;
    this.lng = -3.6921363000000156;
    this.zoom = 16;
  }
  
  ngOnInit() {
  }

}

