import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { Options } from 'ng5-slider';
// import * as NS from 'nouislider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  minValue = 2000000;
  maxValue = 75000000;
  options: Options = {
    floor: 2000000,
    ceil: 75000000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  // selectSlider = document.getElementById('slider');
  cambioColor() {
    document.getElementById('slider').style.color = 'orange';

}

  Coptions = { fullScreen: true,
              indicators: true};
  option = { hoverEnabled: false };
  Doptions = { hover: false, belowOrigin: true, coverTrigger: false };
  Soptions = {};

  constructor() {
  }


  ngOnInit() {
    this.carousel();
    this.fab();
    this.dropD();
    this.cambioColor();
    // this.sliderPrecio();
  }

  select() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, this.Soptions);
  }

  carousel() {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, this.Coptions);
  }

  fab() {
    const elems = document.querySelectorAll('.fixed-action-btn');
    const instances = M.FloatingActionButton.init(elems, this.option);
  }

  dropD() {
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, this.Doptions);
  }
  /* sliderPrecio() {
    const sp = document.getElementById('sliderPrecio');
    console.log(sp);
    NS.create(sp, {
        start: [2000000, 75000000],
        connect: true,
        step: 500000,
        orientation: 'horizontal',
        range: {
            min: 2000000,
            max: 75000000
        }
    });
  } */
}
