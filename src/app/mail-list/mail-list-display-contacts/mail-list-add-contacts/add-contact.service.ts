import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable'

import {backendServerUrl} from '../../../app.component';


@Injectable()
export class AddContactService {

	server_url = backendServerUrl;

	constructor (private http: Http) { }

	addContact(first_name: string, last_name: string, mail_address: string) : Observable <any>{
		var headers = new Headers()
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');
		return this.http.post(this.server_url + '/api/add_contact', 	 
							   {
									first_name: first_name,
									last_name: last_name,
									mail_address: mail_address
							   }, {headers: headers});
	}
}

