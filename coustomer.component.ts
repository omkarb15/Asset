import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../Services/customer.service';
import { ProgressBarComponent } from "../../Reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../Reusable/tabs/tabs.component";

@Component({
  selector: 'app-coustomer',
  imports: [FormsModule,  TabsComponent],
  templateUrl: './coustomer.component.html',
  styleUrl: './coustomer.component.css'
})
export class CoustomerComponent {

  customerTabs: string[]=["basic Info", "plan Info", "pay info"]
  costomerObj:any={
    "customerId":0,
    "customerName":"",
    "customerCity":"",
    "mobileNo":"",
    "email":""


  }

  customerArray:any []=[]

  constructor(private custSrv: CustomerService){
    this.getCustomers();
  }
  
//getCustomers(){
//  this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe((res:any)=>{

//this.customerArray=res.data
  //}) 
 
  getCustomers(){
    this.custSrv.loadCustomer().subscribe((res:any)=>{
      debugger
      this.customerArray=res.data
    })
  }
  onSaveCustomer(){
    this.custSrv.createNewCustomer(this.costomerObj).subscribe((res: any)=>{
      debugger
      if(res.result){
        alert('Customer Created successfully')
        this.getCustomers()
      }
      else{
        alert(res.message)
      }
    })
  }

}


