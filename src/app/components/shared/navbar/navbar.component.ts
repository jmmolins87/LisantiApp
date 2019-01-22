import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class NavbarComponent implements OnInit {

  abrirMenu: boolean = false;
  abrirSubmenu: boolean = false;


  // =========================
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  onScroll(evt) {
    // window object can be wrapper in a service but for now we directly use it
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }


  }
}
