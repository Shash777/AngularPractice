import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup,  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }


  name = "text"
  myForm : any;


  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('Sammy'),
      email: new FormControl(''),
      message: new FormControl(''),
      password : new FormControl('')
    });
  }

  @Output() newItemEvent = new EventEmitter();

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);


    localStorage.setItem('form-data', JSON.stringify(this.myForm.value));
  }
  formDisp(){
    let formd = this.myForm.value
    console.log(formd)
    this.newItemEvent.emit(formd)

  }

}
