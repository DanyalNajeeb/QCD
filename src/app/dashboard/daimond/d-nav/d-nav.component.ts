import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-nav',
  templateUrl: './d-nav.component.html',
  styleUrls: ['./d-nav.component.css']
})
export class DNavComponent implements OnInit {

  constructor() { }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
  }

}
