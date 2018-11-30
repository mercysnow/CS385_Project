import { Injectable } from '@angular/core';

@Injectable()
export class questions {
	
	questionsArray: any[] = new Array();

	constructor(){

	var q1 = {"name": "Age range?"},"option1:" : "Under 18", "option2: " :"Over 18}";
	var q2 = {"name": "Price range?"}, "option1:" : "Free", "option2: " :"10 or less", "option3: " :"20 or less", "option4: " :"30 or less", "option5: " :"50 or less}";
	var q3 = {"name": "Time to spare?"}, "option1:" : "1 hour", "option2: " : "2+ hours", "option3: " : "4+ hours", "option4: " : "All day!}";
	var q4 = {"name": "How many people?"}, "option1:" : "going solo", "option2: " :"2 or more", "option3: " :"5 or more}";
	var q5 = {"name": "What kinda mood are you in?"}, "option1:" : "Hungry", "option2:" : "Active", "option3:" : "Musical", "option4: " : "Thirsty", "option5: " : "Curious}";





	this.questionsArray.push(q1);


	}
}