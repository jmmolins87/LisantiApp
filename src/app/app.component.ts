import { Component, HostListener, AfterViewInit } from "@angular/core";
import { Event, Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  constructor ( private _router: Router ) {
    this._router.events.subscribe(( routerEvent: Event ) => {
      if( routerEvent instanceof NavigationStart ) {
        this.loading = true;
      }

      if( routerEvent instanceof NavigationEnd ) {
        this.loading = false;
      }
    });
    this.loading = true;
  }
  title = "my-app";

  // Loader
  
  loading = true;

  // Resize NavBar

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 0) {
      let navBar = document.getElementById("navBar");
      let logo = document.getElementById("logo");
      let social = document.getElementById("social");
      let menuPrincipal = document.getElementById("menuPrincipal");
      let menuOffering = document.getElementById("menuOffering");
      navBar.classList.add("sticky");
      logo.classList.add("sticky");
      social.classList.add("sticky");
      menuPrincipal.classList.add("sticky");
      menuOffering.classList.add("sticky");
    } else {
      let navBar = document.getElementById("navBar");
      let logo = document.getElementById("logo");
      let social = document.getElementById("social");
      let menuPrincipal = document.getElementById("menuPrincipal");
      let menuOffering = document.getElementById("menuOffering");
      navBar.classList.remove("sticky");
      logo.classList.remove("sticky");
      social.classList.remove("sticky");
      menuPrincipal.classList.remove("sticky");
      menuOffering.classList.remove("sticky");
    }
  }

}
