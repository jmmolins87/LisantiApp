import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  title = "my-app";

  // Loader
  loading: any;

  constructor (  ) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
   }


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
