import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car, iCarList } from '../../components/Model/car';
import { catchError, finalize, of, retry } from 'rxjs';
import { ProgressBarComponent } from "../../Reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../Reusable/tabs/tabs.component";

@Component({
  selector: 'app-post',
  imports: [CommonModule, FormsModule,TabsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  carList: iCarList[]=[]
  carObj:Car =new Car()
  loading: boolean = false; // To show/hide loading indicator
  errorMessage: string = ''; 
  
  constructor(private http:HttpClient){

  }
currentTab:string=''
  onTabChange(tabName:string){
this.currentTab=tabName

  }
  getAllCars() {
    this.loading = true; // Show loading indicator
    this.errorMessage = ''; // Reset any previous error messages

    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").pipe(
      retry(2), // Retry the request up to 2 times in case of failure
      catchError(error => {
        this.errorMessage = 'Failed to load car data. Please try again later.'; // Set a user-friendly error message
        console.error('Error fetching car data:', error); // Log the error for debugging
        return of([]); // Return an empty array to avoid breaking the app
      }),
      finalize(() => {
        this.loading = false; // Hide loading indicator once the request completes
      })
    ).subscribe((res: any) => {
      this.carList = res.data; // Assign the fetched car data
    });
  }

  onSaveCar(){
    debugger
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((res:any)=>{
  if(res.result){
    alert("Car Created successfully")
    this.getAllCars()
  }
  else{
    alert(res.message)
  }
    })
  }
  upDatecar(){
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.carObj).subscribe((res:any)=>{
      if(res.result){
        alert("Car Updated successfully")
        this.getAllCars()
      }
      else{
        alert(res.message)
      }
    })
  }
  onDeleteCar(Id: number){
    const isDelete= confirm("are you sure you want to delete")
    debugger
    if(isDelete==true){
    this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" +Id).subscribe((res:any)=>{
      if (res.result) {
        alert("Car deleted successfully");
        this.getAllCars();
      } else {
        alert(res.message);
      }
    })
  }

  }
  onEdit(data:any){
    this.carObj=data;


  }



}
