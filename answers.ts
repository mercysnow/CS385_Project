import { Injectable } from '@angular/core';

@Injectable()
export class answers {
	
	answersArray: any[] = new Array();

	constructor(){

	var q1 = {"name": "Hungry"},"option1:" : "bake a cake at home! ", "option2: " :"become a Freegan}";
	var q2 = {"name": "Active"}, "option1" : "go for a walk! ", "option2: " :"do some jumping jacks!", "option3: ":"clean your room!}";
	var q3 = {"name": "Musical"}, "option1" : "turn on the radio! ", "option2: " :"learn a dance routine on Youtube", "option3: ":"sing a song!}";
	var q4 = {"name": "Thirsty"}, "option1" : "get a glass of tap water.. its free!", "option2: " :"Is it raining?stand outside & stick your tongue out}";
	var q5 = {"name": "Curious"}, "option1" : "Read a book!", "option2: " :"look up a famous philosophers Wikipedia page", "option3: ":"Go to a musuem or gallery!}";

	this.answersArray.push(q1);
	this.answersArray.push(q2);
	this.answersArray.push(q3);
	this.answersArray.push(q4);
	this.answersArray.push(q5);

	}
}