import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { isReactive } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  users=[
    {name:'Bob',isActive:true},
    {name:'Mark', isActive:false},
    {name:'joe', isActive:true}
  ]
name:string=""
  temperature: number=25
}
