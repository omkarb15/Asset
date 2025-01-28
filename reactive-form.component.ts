import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userform: FormGroup =new FormGroup({
    fname: new FormControl("", [Validators.required]),
    lName: new FormControl("" , [Validators.required, Validators.minLength(4)]),
    userName: new FormControl("",[Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
    city: new FormControl(""),
    state: new FormControl("Goa"),
    zip: new FormControl(),
    isAgree:new FormControl(false)



  })
  onuserSave(){
    const formValue= this.userform.value
    debugger
  }

}
