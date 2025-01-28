import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-from',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-from.component.html',
  styleUrl: './template-from.component.css'
})
export class TemplateFromComponent {
  userObj: any = {
    FirstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: 'Goa',
    zipCode: '',
    isTermsAgree: false
  };
  onSave(){
    debugger
    const formvalue =this.userObj
  }

}







