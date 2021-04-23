import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup,  FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field'


@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent implements OnInit {

  usn1 = " "
  pass1 = " "
  details = JSON.parse(localStorage.getItem("form-data")!)



  constructor() {
  console.log(this.details)

    }

    LoginForm() {

      console.log(this.details)
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
