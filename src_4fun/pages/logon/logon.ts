import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import {RegisterPage} from '../../pages/register/register';

/**
 * Generated class for the LogonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logon',
  templateUrl: 'logon.html',
})
export class LogonPage {
 user = {} as User; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }
  async goLogin(user: User){

  try {
 		const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
       if (result) {
       	this.navCtrl.setRoot(HomePage);  
       }
   }

  catch (e) {
 	console.error(e);

}
}
  goRegister(){

  	this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogonPage');
  }

}
