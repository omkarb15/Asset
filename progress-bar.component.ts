import { NgStyle } from '@angular/common';
import { Component , Input} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-progress-bar',
  imports: [NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

 @Input() progressvalue: number=0


}
