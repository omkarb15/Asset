import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get',
  imports: [CommonModule],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {
  userList: any[] = [];
  productList: any[]=[];

  constructor( private http: HttpClient){

  }
  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userList=result


    })
  }

  getproducts(){
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((res: any)=>{

      this.productList=res
    })
  }

}
