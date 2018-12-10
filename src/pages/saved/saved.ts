import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserResultsProvider } from '../../providers/user-results/user-results';
import { Result } from '../../app/Result';


@IonicPage()
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userResults: UserResultsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedPage');
  }
  
  deleteThisSavedItem(item){
  	this.userResults.deleteUserSavedItem(item);
  }

}
