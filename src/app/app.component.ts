import { Component } from '@angular/core';
import { GenerateOrderComponent } from './generate-order/generate-order.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fantasyDraft';

  order:Array<string> = [];


  createOrder(teams: Array<string>){
    this.order = teams;
  }
}


