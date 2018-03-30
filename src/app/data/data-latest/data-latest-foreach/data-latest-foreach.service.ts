import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {backendServerUrl} from '../../../app.component';

@Injectable()
export class DataLatestForEachService {
	server_url = backendServerUrl;

	constructor (private _http: Http) {	}

	getLatestForEach() {
		return this._http.get(this.server_url + '/api/get_sigfox_messages/latest').
		map(res => res.json());
	}
}

