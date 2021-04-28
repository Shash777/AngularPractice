import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup,  FormsModule } from '@angular/forms';



@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent  {

  usn1 = " "
  pass1 = " "
  details : any;
  det1 : any
  detfrst : any;  red : any;


login(det1: any)
{
  var fres= det1

this.details=det1
  console.log(det1)
  console.log(fres)
}

  constructor() {


    }

    LoginForm() {

      this.detfrst = JSON.parse(localStorage.getItem("form-data")  || '{}' )
      console.log(this.detfrst)
      let det55 = this.detfrst;
      console.log(det55)
        let usn = det55.email
        console.log(usn)
      if ( this.usn1 == usn ) {
        let ar = 115;
        console.log(ar)
      }

    }


  ngOnInit() {

  }


  // // fname : any;
  // // education: any;
  // // mobile: any;
  // // password: any;

  //   userForm = new FormGroup({
  //     fname : new FormControl(),
  //     nameFather : new FormControl(),
  //     email : new FormControl(),
  //     password : new FormControl(),
  //     mstat : new FormControl()
  //   });

  //   onFormSubmit() {
  //     console.log(this.userForm);
  // }

  // // getData(): void {





  // //   console.log("First Name", this.fname);
  // //   console.log("Education", this.education);
  // //   console.log("Mobile", this.mobile);
  // //   console.log("Password", this.password);
  // // }


  // onSubmit(contactForm: { value: any; }) {
  //   console.log(contactForm.value);
  // }


}
