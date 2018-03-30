import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {backendServerUrl} from '../../app.component';


@Injectable()
export class DisplayContactsService {

	server_url = backendServerUrl;

	constructor (private _http: Http) {	}

	getContacts() {
		return this._http.get(this.server_url + '/api/get_alarms_mail_list').
		map(res => res.json());
	}
}

