import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ResultsPage } from '../../pages/results/results';
import { Result } from '../../app/Result';

import { NgForm } from '@angular/forms';
import { ResultsListProvider } from '../../providers/results-list/results-list';
import { UserResultsProvider } from '../../providers/user-results/user-results';



@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserResult:UserResultsProvider){

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  @ViewChild(Slides) slides: Slides;
 //Method that takes you to the slide after the current slide
  goToSlide(i) {
    this.slides.slideTo(i+1, 500);
  }
  public goToResults(){
  	this.navCtrl.push(ResultsPage);
  }

  userServiceData = this.UserResult.userResult;

  @ViewChild('f') questionsForm: NgForm;
   userResult = {	  
		   location : '',
      ageRange : '',
      priceRange: 0,   
      
      mood :''
		} ;
submitted = false;
  


   onSubmit() {
    
     this.submitted = true;
    
    this.UserResult.matchResults();

     this.questionsForm.reset();

  }
  

}



