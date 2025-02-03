import { CommonModule } from '@angular/common';
import { JitEvaluator } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structuraldirective',
  imports: [CommonModule, FormsModule],
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css'
})
export class StructuraldirectiveComponent {
isVisible:boolean=false


students:string[]=['Omkar','Saurabh','Akash','Yogesh']
employee=[
  {Name: 'Omkar', position:['.net','angular']},
  {Name: 'akash', position:['java','python']},
  {Name: 'Mauli', position:['BiDeveloper','java']},
  {Name: 'Aditya', position:['.netDeveloper']},
]

departments=[
{name:'Database' ,employees:['bob','Mark']  },
{name:'developer', employees:['valence','joe']}
]
tasks:string[]=[]
newtasks:string=""

addtask(){
  if(this.newtasks.trim()){
    this.tasks.push(this.newtasks)
    this.newtasks=''
  }
}

removetask(index:number){
  this.tasks.splice(index, 1)
}

color='grey '
userRole: string='user'

AdminAction(){
  alert('admin Action performed')
}
userAction(){
  alert('User action performed')
}

changeColor(newColor: string) {
  this.color = newColor;
}
toggleVisbility(){
  this.isVisible=!this.isVisible
}

}
