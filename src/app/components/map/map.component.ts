import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  // Map
  lat: number;
  lng: number;
  zoom: number;

  constructor() {
    // Map
    this.lat = 40.46592709999999;
    this.lng = -3.6921363000000156;
    this.zoom = 16;
  }

  ngOnInit() {}
}
