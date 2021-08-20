import { Component, OnInit } from '@angular/core';
import {clone, difference, concat, indexOf, remove} from 'lodash';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.css']
})
export class GenerateOrderComponent{

  constructor() {
  }
  teams = ['Brian', 'Rich', 'Liam', 'Bobby','Johnny','Kevin', 'Matt', 'DJ', 'Carp', 'Jason'];
  oddSets = [[25, 18, 14, 12.5, 10.5, 7, 5, 4, 3, 1],
            [20, 17, 15.5, 13.5, 11, 8, 5.5, 4.5, 3.5, 1.5],
            [17, 15, 145, 13.5, 12.5, 9.5, 7, 5, 4, 2],
            [14, 12, 13.5, 11.5, 11.5, 11.5, 8, 6, 7, 5]];
  
  weighted_random(items: any[], weights: any[]) {
    var i;

    for (i = 0; i < weights.length; i++)
        weights[i] += weights[i - 1] || 0;
    
    var random = Math.random() * weights[weights.length - 1];
    console.log(random);
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    
    return items[i];
  }
  
  distribute_odds(playerChosen:string, weights:any[]){ 
    let excessVal = 0;
    let removeIndex = indexOf(this.teams, playerChosen);
    excessVal += weights[removeIndex];
    console.log(excessVal);
    weights.splice(removeIndex, 1); 
    excessVal = excessVal/weights.length;
    var j;
    for (j = 0; j < weights.length; j++)
        weights[j] += excessVal;
    return weights;
  }


  generateOrder() {
    console.log('generating...');
    let draftOrder:any[] = [];

    let firstPick = this.weighted_random(this.teams, this.oddSets[0]);
    draftOrder.push(firstPick);
    console.log(firstPick);
    let secondPickTeams = difference(clone(this.teams),draftOrder);
    console.log(secondPickTeams);
    this.distribute_odds(firstPick, this.oddSets[1])
    this.distribute_odds(firstPick, this.oddSets[2])
    this.distribute_odds(firstPick, this.oddSets[3])

    let secondPick = this.weighted_random(secondPickTeams, this.oddSets[1]);
    console.log(secondPick);
    draftOrder.push(secondPick);
    let thirdPickTeams = difference(clone(this.teams),draftOrder);
    console.log(thirdPickTeams);
    this.distribute_odds(secondPick, this.oddSets[2])
    this.distribute_odds(secondPick, this.oddSets[3])

    let thirdPick = this.weighted_random(thirdPickTeams, this.oddSets[2]);
    console.log(thirdPick);
    draftOrder.push(thirdPick);
    let fourthPickTeams = difference(clone(this.teams),draftOrder);
    console.log(fourthPickTeams);
    this.distribute_odds(thirdPick, this.oddSets[3])
    console.log(this.oddSets);

    let fourthPick = this.weighted_random(fourthPickTeams, this.oddSets[3]);
    console.log(fourthPick);
    draftOrder.push(fourthPick);

    let finalTeamsRemaining = difference(clone(this.teams),draftOrder);
    console.log(concat(draftOrder, finalTeamsRemaining));

    return concat(draftOrder, finalTeamsRemaining);
  }

}
