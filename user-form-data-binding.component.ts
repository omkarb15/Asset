import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form-data-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-form-data-binding.component.html',
  styleUrl: './user-form-data-binding.component.css'
})
export class UserFormDataBindingComponent {
  userName: string=""
  userEmail: string=""
  userPassword: string=""
  searchQuery: string=""
  items:string[]=['Apple', 'Grapes','Bannana','Mango']
  isFeaturedenable:boolean=false
  get filterItems(){
    return this.items.filter(item=> item.toLowerCase().includes(this.searchQuery.toLowerCase()))
  }

  submittedUser:{userName:string,  userEmail: string, userPassword:string}[]=[]
  submitForm(){
    debugger
    console.log("Form Submitted")
    console.log(`Name: ${this.userName}, Email:${this.userEmail}, Password:${this.userPassword}`)
    console.log("Name:" , this.userName)
    
    this.submittedUser.push({
      userName:this.userName,
      userEmail:this.userEmail,
      userPassword:this.userPassword

    })
  }


}
