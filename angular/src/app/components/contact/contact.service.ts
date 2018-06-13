import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ContactService {

  user: object;

  constructor(private http: Http) { }

  sendingForm(user) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/contact-form/contact', user, {headers: headers}) // doit correspondre au numéro de port du backend (app.js) ; for deployment : 'take out http://localhost:4000/'
  		.map(res => res.json());
  }

}
