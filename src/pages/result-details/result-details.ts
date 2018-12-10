import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Result } from '../../app/Result';
import { UserResultsProvider } from '../../providers/user-results/user-results';

/**
 * Generated class for the ResultDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-details',
  templateUrl: 'result-details.html',
})
export class ResultDetailsPage {

@Input() resultToDisplay:Result;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userResultsProvider:UserResultsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultDetailsPage');
  }
  addToSaved(resultObj:Result){
  	this.userResultsProvider.addUserSavedResult(resultObj);
  }

}
