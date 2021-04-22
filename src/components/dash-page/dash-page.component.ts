import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements OnInit {

  constructor() { }
  dispData(){
    let rec1 = localStorage.getItem("rec", )
  }
  ngOnInit(): void {

  }

 c1=0;
 inc = 0;
 dec= 0;
  Count(){
    this.c1 = this.c1+1;
    console.log(this.c1)
  }


  Inc() {
     this.inc = this.c1+1;
  }

  Dec(){
    this.dec = this.c1 -1;
  }
}

