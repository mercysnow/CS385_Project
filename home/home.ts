import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplorePage } from '../../pages/explore/explore';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  goToExplore(){

  	this.navCtrl.push(ExplorePage);
  }

}
