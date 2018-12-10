import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Result} from '../../app/Result';


@Injectable()
export class ResultsListProvider {

//This is a list of all possible results
ResultsList:Result[]=new Array();


  constructor(public http: HttpClient ) {
  	//These are some fun options for zero budget, based on mood, if there's not many real options available
  		var funOption1 = { name: "Bake a cake at home! ", description: "", image: "baking.jpg", location: "any", priceRange: 0, mood: "hungry", ageRange: "under18" };
   		var funOption2 = { name: "Go for a walk! ", description: "", image: "none", location: "any", priceRange: 0, mood: "active", ageRange: "under18" };
   		var funOption3 = { name: "Become a Freegan", description: "", image: "none", location: "any", priceRange: 0,  mood: "hungry", ageRange: "under18" };
    	var funOption4 = { name: "Do some jumping jacks!", description: "", image: "none",location: "any", priceRange: 0,  mood: "active", ageRange: "under18" };
    	var funOption5 ={ name: "Clean your room!", description: "", image: "none", location: "any", priceRange: 0,  mood: "active", ageRange: "under18" };
    	var funOption6 ={ name: "See what dish you can create with the ingredients in your fridge/cupboard!", description: "", image: "none",location: "any", priceRange: 0, mood: "hungry", ageRange: "under18" };

    	var funOption8 ={ name: "Go for a walk around your area!", description: "", image: "none",location: "any", priceRange: 0,  mood: "active", ageRange: "under18" };
    	var funOption11 ={ name: "Listen to the first album you bought!", description: "", image: "none",location: "any", priceRange: 0,  mood: "musical", ageRange: "under18" };
    	var funOption12 ={ name: "Turn on the radio!", description: "", image: "none", location: "any", priceRange: 0, mood: "musical", ageRange: "under18" };
    	var funOption13 ={ name: "Learn a dance routine on Youtube!", description: "", image: "none", location: "any", priceRange: 0,  mood: "musical", ageRange: "under18" };
    	var funOption14 ={ name: "Get a glass of tap water.. its free, duh!", description: "", image: "none", location: "any", priceRange: 0,  mood: "thirsty", ageRange: "under18" };
    	var funOption15 ={ name: "Is it raining? stand outside & stick your tongue out!", description: "(We're in Ireland so it probably is) ", image: "none",location: "any", priceRange: 0, mood: "thirsty", ageRange: "under18" };
    	var funOption16 ={ name: "Invite yourself to a friends for a cuppa!", description: "", image: "none", location: "any",priceRange: 0,mood: "thirsty", ageRange: "under18" };
    	var funOption17 ={ name: "Read a book", description: "", image: "none", people: 1, location: "any", priceRange: 0, mood: "curious", ageRange: "under18" };
    	var funOption18 ={ name: "Look up a famous philosopher's Wikipedia page", description: "Prepare for a bit of head scratching though", image: "none",location: "any", priceRange: 0, mood: "curious", ageRange: "under18" };
    	var funOption19 ={ name: "Draw a picture", description: "Be the artist you always wanted to be", image: "none", location: "any", priceRange: 0,  mood: "curious", ageRange: "under18" };

    	this.ResultsList.push(funOption1);
    	this.ResultsList.push(funOption2);
    	this.ResultsList.push(funOption3);
    	this.ResultsList.push(funOption4);
    	this.ResultsList.push(funOption5);
    	this.ResultsList.push(funOption6);
    
    	this.ResultsList.push(funOption8);

   
    	this.ResultsList.push(funOption11);
    	this.ResultsList.push(funOption12);
    	this.ResultsList.push(funOption13);
    	this.ResultsList.push(funOption14);
    	this.ResultsList.push(funOption15);
    	this.ResultsList.push(funOption16);
    	this.ResultsList.push(funOption17);
    	this.ResultsList.push(funOption18);
    	this.ResultsList.push(funOption19);
    
    	//Options in Dublin
    	var DubOption1 = { name: "Umi Falafel", description: "", image: "", people: 1, priceRange: 20,  mood: "hungry", ageRange: "under18" };
    	var DubOption2 = { name: "Rotana Café", description: "", image: "", people: 1, priceRange: 20,  mood: "hungry", ageRange: "under18" };
    	var DubOption3 = { name: "Metro Café", description: "", image: "", people: 1, priceRange: 20,  mood: "hungry", ageRange: "under18" };





    // {name: , image:"none", people: , priceRange:, timeRange: , mood:  , ageRange: }, 
  }



  



 public getResultsList(){
 	return this.ResultsList;
 }
 public getResultInList(i){
 	return this.ResultsList[i];
 }
 
 public getLocationByIndex(i){
		return this.ResultsList[i].location;
	}
	
	public getPriceRangeByIndex(i){
		return this.ResultsList[i].priceRange;
	}

	public getAgeRangeByIndex(i){
		return this.ResultsList[i].ageRange;
	}
	
	public getMoodByIndex(i){
		return this.ResultsList[i].mood;

	}
	
	
	//  public checkLocation(list:Result[], value:String){
	// 	let indexArray: number[];
	// 	for(let i in list){
	// 	location =  i.location;
	// 		if(location===value){
	// 			indexArray.push(this.ResultsList.indexOf(result,0));
	// 		}
	// 	}
	// }
	// 	return indexArray;	
	// }
	//  public checkMood(list:Result[], value:String){
	// 	let indexArray: number[];
	// 	for(let result in list){
	// 		let mood = this.getMoodByIndex(list.indexOf(result));
	// 		if(mood===value){
	// 			indexArray.push(list.indexOf(result,0));
	// 		}
	// 	}
	// 	return indexArray;	
	// }
	

}
