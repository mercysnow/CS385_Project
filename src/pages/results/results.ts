import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Result } from '../../app/Result';
import {HomePage} from '../../pages/home/home';
import {QuestionsPage} from '../../pages/questions/questions';
import { UserResultsProvider } from '../../providers/user-results/user-results';
import {ResultsListProvider} from '../../providers/results-list/results-list';


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {


  /*selectedResult:Result; /*This is a variable of type result we pass to the Result Details component, 
                          in order to display further details of this result */
  results = this.userResultsProvider.getResults();//This stores the results matching the user's choices

  constructor(public navCtrl: NavController, public navParams: NavParams, public userResultsProvider: UserResultsProvider, public resultsProvider:ResultsListProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');

  }
 

  public goToQuestions(){
    this.navCtrl.push(QuestionsPage); 
    this.userResultsProvider.matchedResults = new Array();
  }
  public goToHome(){
    this.navCtrl.push(HomePage);    
      this.userResultsProvider.matchedResults = new Array();
  }
   backButtonClick(){
  // this.userResultsProvider.matchedResults = new Array();
  // this.results = this.userResultsProvider.getResults();
    
  }
   


}
