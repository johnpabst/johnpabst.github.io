import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {clone, difference, concat, indexOf, remove} from 'lodash';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.css']
})
export class GenerateOrderComponent{

  constructor() {
    
  }

  @Output() finalDraftOrder = new EventEmitter<Array<string>>();
  
  weighted_random(items: any[], weights: any[]) {
    var i;

    for (i = 0; i < weights.length; i++)
        weights[i] += weights[i - 1] || 0;
    
    var random = Math.random() * weights[weights.length - 1];
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    
    return items[i];
  }
  
  distribute_odds(playerChosen:string, teams: any, draftOrder:any, weights:any[]){ 
    let excessVal = 0;
    let removeIndex = 0;
    let cloneWeights = clone(weights);
    var x;
    for (x = 0; x < draftOrder.length; x++){
      removeIndex = indexOf(teams, draftOrder[x]);
      excessVal += cloneWeights[removeIndex];
      weights.splice(removeIndex, 1); 
    }
      
    
    excessVal = excessVal/weights.length;
    var j;
    for (j = 0; j < weights.length; j++){
      weights[j] += excessVal;
    }
    return weights;
  }


  generateOrder() {
    var suh: HTMLCollectionOf<HTMLTableDataCellElement> = document.getElementsByTagName("td");
    var p;
    for(p = 0; p < suh.length; p++){
      let tdBox = suh[p];
      tdBox.style.backgroundColor = "#FFF";
    }

    
    var cuh = Array.from(document.getElementsByClassName("draftCard-inner") as HTMLCollectionOf<HTMLElement>);
    var q;
    for(q = 0; q < cuh.length; q++){
      let card = cuh[q];
      card.style.transform = "rotateY(0deg)";
      
    }
      
    let teams = ['Brian', 'Rich', 'Liam', 'Bobby','Johnny','Kevin', 'Matt', 'DJ', 'Carp', 'Jason'];
    let oddSets = [[25, 18, 14, 12.5, 10.5, 7, 5, 4, 3, 1],
              [20, 17, 15.5, 13.5, 11, 8, 5.5, 4.5, 3.5, 1.5],
              [17, 15, 14.5, 13.5, 12.5, 9.5, 7, 5, 4, 2],
              [14, 12, 13.5, 11.5, 11.5, 11.5, 8, 6, 7, 5]];

    let draftOrder:any[] = [];

    let firstPick = this.weighted_random(teams, oddSets[0]);
    draftOrder.push(firstPick);
    let secondPickTeams = difference(clone(teams),draftOrder);
    this.distribute_odds(firstPick, teams,draftOrder, oddSets[1]);

    let secondPick = this.weighted_random(secondPickTeams, oddSets[1]);
    draftOrder.push(secondPick);
    let thirdPickTeams = difference(clone(teams),draftOrder);
    this.distribute_odds(firstPick, teams,draftOrder, oddSets[2]);

    let thirdPick = this.weighted_random(thirdPickTeams, oddSets[2]);
    draftOrder.push(thirdPick);
    let fourthPickTeams = difference(clone(teams),draftOrder);
    this.distribute_odds(firstPick, teams,draftOrder, oddSets[3]);

    let fourthPick = this.weighted_random(fourthPickTeams, oddSets[3]);
    draftOrder.push(fourthPick);

    let finalTeamsRemaining = difference(clone(teams),draftOrder);

    this.finalDraftOrder.emit(concat(draftOrder, finalTeamsRemaining));
  }

}
