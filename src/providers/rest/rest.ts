import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

	OUR_REST_API_URL = 'https://www.eventbriteapi.com/v3/users/me/?token=FNYEQOAJNRX7EL636PCT';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

getDataFromAPIViaPromise(){
  	return new Promise(resolve => {
  		this.http.get(this.OUR_REST_API_URL).subscribe(data => {
  			resolve(data);
  			console.log("Subscribed to the Data Promise");
  		}, err => {
  			console.log(err);
  		});
  	});
}
}
