import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsPage } from '../../pages/questions/questions';
import {SavedPage} from '../../pages/saved/saved';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public goToQuestions(){
  	this.navCtrl.push(QuestionsPage);  	
  }
  public goToSaved(){
  	this.navCtrl.push(SavedPage); 
  }
}
