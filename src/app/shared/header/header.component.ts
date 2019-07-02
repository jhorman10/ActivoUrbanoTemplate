import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options = {};
  Soptions = {};
  Doptions = { hover: false,
                belowOrigin: true,
                coverTrigger: false };
  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);
    this.select();
  }

  select() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, this.Soptions);
  }

  dropD() {
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, this.Doptions);
  }

}
