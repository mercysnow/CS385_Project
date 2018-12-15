import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user'
import { AngularFireAuth } from "angularfire2/auth";
import {LogonPage} from '../../pages/logon/logon';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 user = {} as User; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }
   async register(user: User) {
	  	try {
	  		const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
	      console.log(result);
	  } 

	   catch(e) {
	   		console.error(e);
  	 }

  }

  
  goRegister(){

  	if(this.user.email.length==0 || this.user.password.length==0 || this.user.RepeatPassword.length==0)
  		alert("Please fill all fields");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogonPage');
  }

}
