import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {

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
