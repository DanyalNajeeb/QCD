import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    $('[data-toggle=offcanvas]').click(function() {
      $('.row-offcanvas').toggleClass('active');
      //$('#sidebar').toggleClass('col-xs-1');
      $('.collapse').toggleClass('in');
  });


  }

}
