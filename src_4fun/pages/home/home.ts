import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplorePage } from '../../pages/explore/explore';
import { AlertController } from 'ionic-angular';
import { LogonPage } from '../../pages/logon/logon';

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
 goLogin(){

  	this.navCtrl.push(LogonPage);
  }
}
