/*import { HttpClient } from '@angular/common/http';*/
import { Injectable } from '@angular/core';

/*
  Generated class for the DestinationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DestinationProvider {
	 /* These are our options for our interface */
	optionsLocation: any[] = new Array();
  citySpecificEvents: any[] =  new Array();
/* These are our user choices */
  locationType: any[] = new Array();

  constructor() {
  	var location1 = {"lockID": "Dublin", "title": "Dublin Zoo", "event": "Wild Lights"};
  	var location2 = {"lockID": "Dublin", "title":"Blanchardstown", "event":"Ice Skating"};
   	var location3 = {"lockID": "Dublin", "title":"Dundrum", "event": "Beauty and The Beast"};
   	var location4 = {"lockID": "Dublin", "title":"Liffey Valley", "event":"Santa's Groto"};
   	var location5 = {"lockID": "Dublin", "title":"River Liffey", "event":" The Laugther Lounge"};
   	var location6 = {"lockID": "Dublin", "title":"Restaurant","event":"Boojum"};
    var locations7 = {"lockID": "Dublin", "title":"Jervis Centre", "event":"Santa's Groto"};
    var locations8 = {"lockID": "Cork", "title":"Liffey Valley", "event":"Santa's Groto"};
    var locations9 = {"lockID": "Galway", "title":"Liffey Valley", "event":"Santa's Groto"};

  	this.optionsLocation.push(location1);
  	this.optionsLocation.push(location2);
  	this.optionsLocation.push(location3);
  	this.optionsLocation.push(location4);
  	this.optionsLocation.push(location5);
  	this.optionsLocation.push(location6);
  }

  	public getLocationTypeOptions()
  {
    return this.optionsLocation;
  }
/* for your ngFor in the html page .. for indiviual cities */
/* So we supply a lockIDToSearchFor of the city we want to display the events for */

/* so in your HTML it would be .... 
let lOption of myDestination.getCitySpecificEvents('Dublin')
or further down the page
let lOption of myDestination.getCitySpecificEvents('Galway')
etc
I think it will be necessary to use single quotes 


*/

public getCitySpecificEvents(lockIDToSearchFor)
{
	/* ensure that citySpecificEvents is empty */
	this.citySpecificEvents = new Array();

	/* loop thro' the optionsLocation array - we only want to find those 
	matching lockID */
	let currentLockID = 'Unknown';
	/* loop over the entire optionsLocation array */

	for (let tLocObj of this.optionsLocation)
	{
		currentLockID = tLocObj["lockID"];

		if (currentLockID == lockIDToSearchFor)
		{
			/* now we have a match*/
			/* this is one we add to the array - the whole tLoc object */
			this.citySpecificEvents.push(tLoc);
			/* push the entire event for this city */
			/* remember this will only match the city as specified by the 
			 lockIDToSearchFor parameter */
		}
	}
	/* finally return this array of citySpecificEvents */
	/* This will return an empty array if there are no events in the city specified
	This will be the behaviour we are looking for */
  return this.citySpecificEvents;
}
    /* get method to return users chosen location*/

     public getUserSelectedLocation()
  {
    return this.locationType;
  }


   public getLocation()
  {
    return this.locationType[0];
  }
  /* We must only allow ONE base to be selected 
     Therefore this method must always ensure that the 
     only element in the array pizzaBase is the 
     theBaseObj which has been selected 
  */
  public setLocation(thelocationObj)
  {
    this.locationType[0] = thelocationObj;
  }

  /* We know that there is only one base choice allowed */
  /* So we simply delete the first element in the array */

  public deleteLocationChoice()
  {
     this.locationType = new Array();
  }



 public clearAllChoices()
  {
  	this.locationType = new Array();
  	
}
  /*constructor(public http: HttpClient) {
    console.log('Hello DestinationProvider Provider');
  }
  */
} 

  		








