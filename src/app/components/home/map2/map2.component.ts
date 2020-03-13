import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.scss']
})
export class Map2Component implements OnInit {

  // Map
  lat: number;
  lng: number;
  zoom: number;

  constructor() {
    // Map
    this.lat = 40.464908;
    this.lng = -3.693335;
    this.zoom = 16;
  }


  ngOnInit() {
  }

}
