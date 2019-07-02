import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  Soptions = {};

  constructor() { }

  ngOnInit() {
    this.select();
  }

  select() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, this.Soptions);
  }

}
