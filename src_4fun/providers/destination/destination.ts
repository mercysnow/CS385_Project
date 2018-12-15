import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DestinationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DestinationProvider {
	 /* These are our options for our interface */	
  
  optionsDublin: any[] = new Array();	
  optionsCork: any[] = new Array();
  

  /* These are our user choices */
  locationDublin: any[] = new Array();
  locationCork: any[] = new Array();
  	


  constructor() {
  	var dublin1 = {"dublinName": "Dublin Zoo", "event":"Wild Lights"};
  	var dublin2 = {"dublinName": "Blanchardstown", "event":"Ice Skating"};
   	var dublin3 = {"dublinName": "Dundrum","event":"Beauty and The Beast"};
   	var dublin4 = {"dublinName": "Liffey Valley","event":"Santa's Groto"};
   	var dublin5 = {"dublinName": "River Liffey", "event":" The Laugther Lounge"};
   	var dublin6 = {"dublinName": "Dublin","event":"Boojum"};
  	this.optionsDublin.push(dublin1);
  	this.optionsDublin.push(dublin2);
  	this.optionsDublin.push(dublin3);
  	this.optionsDublin.push(dublin4);
  	this.optionsDublin.push(dublin5);
  	this.optionsDublin.push(dublin6);
  	
  	var top1 = {"corkName": "Jameson Exeperience", "event":"Tour" };
  	var top2 = {"corkName": "The Old Fiddle Bar", "event":"Drinking" };
  	var top3 = {"corkName": "Cork Sea Safari", "event":"Sightseeing" };
  	var top4 = {"corkName": "Gourmet Burger Bistro", "event":"Restaurant"};
  	var top5 = {"corkName": "National Art Gallery", "event":"Tour"};
  	
  	this.optionsCork.push(top1);
  	this.optionsCork.push(top2);
  	this.optionsCork.push(top3);	
  	this.optionsCork.push(top4);
  	this.optionsCork.push(top5);	
  }


  	public getLocationDublinOptions()
  {
    return this.optionsDublin;
  }

  public getLocationCorkOptions()
  {
    return this.optionsCork;
  }

    /* get method to return users chosen location*/

     public getUserSelectedDublin()
  {
    return this.locationDublin;
  }

  public getUserSelectedCork()
  {
    return this. locationCork;
  }

   public getDublin()
  {
    return this.locationDublin[0];
  }
  /* We must only allow ONE base to be selected 
     Therefore this method must always ensure that the 
     only element in the array pizzaBase is the 
     theBaseObj which has been selected 
  */
  public setDublin(thelocationObj)
  {
    this.locationDublin[0] = thelocationObj;
  }

  /* We know that there is only one base choice allowed */
  /* So we simply delete the first element in the array */

  public deleteDublinChoice()
  {
     this.locationDublin = new Array();
  }
//next line

public getCork()
  {
    return this. locationCork[0];
  }
  /* We must only allow ONE base to be selected 
     Therefore this method must always ensure that the 
     only element in the array pizzaBase is the 
     theBaseObj which has been selected 
  */
  public setCork(thelocationObj)
  {
    this. locationCork[0] = thelocationObj;
  }

  /* We know that there is only one base choice allowed */
  /* So we simply delete the first element in the array */

  public deleteCorkChoice()
  {
     this. locationCork = new Array();
  }


 public clearAllChoices()
  {
  	this.locationDublin = new Array();
  	this. locationCork = new Array();
 } 
  		
}

