import { Component , Input, input , output, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
@Input() tabList: string[]=[]
@Output() onClicked= new EventEmitter<string>()

onTabChange(tabName: string){
  this.onClicked.emit(tabName)
}
}
