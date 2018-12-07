import { RestProvider } from '../../providers/rest/rest';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  stockData: any;


  constructor(public navCtrl: NavController,public restProvider: RestProvider) {
  this.getDataObjectsFromPromise();
  }

getDataObjectsFromPromise() {
	this.restProvider.getDataFromAPIViaPromise().then(data => {
		console.log("Trying to access results from the Promise return");
		console.log(data);
		this.stockData = data;

		console.log("Got results from the Promise");
	});
}


}
