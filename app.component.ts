import { Component } from '@angular/core';

import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { NgIfComponent } from "./components/ng-if/ng-if.component";
import { CommonModule } from '@angular/common';
import { NgForComponent } from "./components/ng-for/ng-for.component";
import { NgclassComponent } from "./components/ngclass/ngclass.component";
import { NgstyleComponent } from "./components/ngstyle/ngstyle.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home';
}
