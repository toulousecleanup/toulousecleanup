import { Component, EventEmitter, Output } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AddContactService } from './add-contact.service'

@Component({
	selector: 'add-contact',
  	templateUrl: './add-contact.component.html',
  	providers: [AddContactService]
  })
export class AddContactComponent {
	@Output() refresh = new EventEmitter();
	refreshMailListNeeded() {
		this.refresh.emit();
	}

	first_name: string;
	last_name: string;
	mail_address: string;

	constructor (
		private http: Http,
		private addContactService: AddContactService) {	}

	onAddContact() {
		this.addContactService.addContact(this.first_name, this.last_name, this.mail_address)
		.subscribe(
			data => console.log(data),
			error => alert(error),
			() => setTimeout(this.refreshMailListNeeded(), 500)
		);
	}
};
