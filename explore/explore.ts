import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinationProvider} from '../../providers/destination/destination';
import {HomePage} from '../../pages/home/home';


/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public myDestination: DestinationProvider) {
  }

public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }
  
  public chooseYourLocation(urChosenLocationObj)
  {
  	this.myDestination.setLocation(urChosenLocationObj);
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }

}
