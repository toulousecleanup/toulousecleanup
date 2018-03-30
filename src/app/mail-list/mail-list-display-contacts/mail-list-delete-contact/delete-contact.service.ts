import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable'

import {backendServerUrl} from '../../../app.component';


@Injectable()
export class DeleteContactService {

	server_url = backendServerUrl;

	constructor (private http: Http) { }

	deleteContact(mail: string): Observable<any> {
		var headers = new Headers()
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');
		const url = this.server_url + '/api/delete_contact/' + mail;
		return this.http.delete(url, {headers: headers});
	}
}

