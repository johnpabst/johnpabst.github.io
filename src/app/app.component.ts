import { Component } from '@angular/core';
import { GenerateOrderComponent } from './generate-order/generate-order.component';
import {indexOf} from 'lodash';
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

  flip(cardID:string, indexOfElement:number){
    let originalOrder = ['Brian', 'Rich', 'Liam', 'Bobby','Johnny','Kevin', 'Matt', 'DJ', 'Carp', 'Jason'];
    let originalIndex = indexOf(originalOrder, cardID);
    var element:HTMLElement = document.getElementById(cardID);
    if (element.className === "draftCard-inner") {
      if(element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }

    if (indexOfElement < originalIndex){ debugger;
      var bruh:HTMLElement = document.getElementById(cardID+'-col'); debugger;
      bruh.style.backgroundColor = "#90EE90";
    }
    if (indexOfElement > originalIndex){ 
      var bruh:HTMLElement = document.getElementById(cardID+'-col'); debugger;
      bruh.style.backgroundColor = "#ffcccb";
    }
    
    
  };
}


