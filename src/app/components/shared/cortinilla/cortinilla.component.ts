import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cortinilla',
  templateUrl: './cortinilla.component.html',
  styleUrls: ['./cortinilla.component.scss']
})
export class CortinillaComponent implements OnInit {
    // Loader
    loading: any;

    constructor (  ) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
     }

  ngOnInit() {
  }

}
