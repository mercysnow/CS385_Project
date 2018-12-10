import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {QuestionsPage} from '../../pages/questions/questions';
import {ResultsListProvider} from '../results-list/results-list';
import {Result} from '../../app/Result';


@Injectable()
export class UserResultsProvider {

  constructor(public http: HttpClient, private ResultsProvider: ResultsListProvider) {
    
  }
//This objects holds the options the user selected on the questions page
 userResult = {	  
	location : '',
	ageRange : '',
	priceRange: 0,		  
	mood :'',  
} ;
	
	userSavedResults:any[] = [];

		 
	matchedResults:Result[] = new Array();
	check:Boolean; 

	matchResults(){		
		
		for(let i of this.ResultsProvider.getResultsList()){
			
			var  count =0; //This is a count of how many user selection options the result matches
			var index = this.ResultsProvider.getResultsList().indexOf(i,0); //Get index of the result in the results list
			this.check = false;
			
			//First check the location, this must match or be any location
			if(this.userResult.location === i.location || i.location=== "any"){ 

				if(this.userResult.mood===i.mood){ /*Checks to see if the moods match*/
					count++;
				}	
				if(i.priceRange<=this.userResult.priceRange){ /*If the price range is less than the user 
																								selected price range that is ok */
					count++;
				} 
				if(this.userResult.ageRange==="under18"){//If under 18, only return results for under 18s
					if(i.ageRange==="under18"){ 
						this.check=true; //If not for under18s, the result will not be included
					}

				}else{//Return results that are both under and over 18, 
					this.check=true; 
				}
				
			} else{
				console.log(index + " does not match");
			}
			//If it matches all the criteria, put the result in the list of results to show user
			if(count>=2 && this.check==true){
				this.matchedResults.push(i);

			}
			
		}
	}	
			// let indexes: number[];
			// let indices2: number[];
			// let count =0;
			// this.check = false;
			// //This returns the indexes in the array of all results where the location matches the location the user selected
			// indexes = this.ResultsProvider.checkLocation(this.userResult.location);
			
			// //Loop through these indexes to see it they match the other criteria
			// for(let i of indexes){
			// 	if(this.userResult.mood===this.ResultsProvider.getMoodByIndex(i)){
			// 		count++;
			// 	}	
			// 	if(this.ResultsProvider.getPriceRangeByIndex(i)<=this.userResult.priceRange){
			// 		count++;
			// 	} 
			// 	if(this.userResult.ageRange==="under18"){//If under 18, only return results for under 18s
			// 		if(this.ResultsProvider.getAgeRangeByIndex(i)==="under18"){
			// 			this.check=true;
			// 		}

			// 	}else{//Return results that are both under and over 18
			// 		this.check=true;
			// 	}
			// 	//If it matches all the criteria, put the result in the list of results to show user
			// 	if(count>=2 && check==true){
			// 		this.matchedResults.push(this.ResultsProvider.getResultInList(i));

			// 	}

			// }	
	


	getResults(){
		return this.matchedResults;
	}
	deleteResults(){
		this.matchedResults = new Array();
	}
	addUserSavedResult(resultObj:Result){
		this.userSavedResults.push(resultObj);
	}
	getUserSavedResults(){
		return this.userSavedResults;
	}
	deleteUserSavedItem(resultObj:Result){
		let index = this.userSavedResults.indexOf(resultObj, 0);
    
	    if (index > -1) {
	       this.userSavedResults.splice(index, 1);
	  
	    }
	}

}
