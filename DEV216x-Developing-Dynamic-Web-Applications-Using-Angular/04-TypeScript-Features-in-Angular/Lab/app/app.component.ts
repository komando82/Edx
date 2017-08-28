import {Component} from '@angular/core';
import {ListComponent} from './list.component'; 

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  [ListComponent]
})
export class AppComponent { }