import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
      $(".img-check").click(function(){
      $(this).toggleClass("check");
    });

  }

}
