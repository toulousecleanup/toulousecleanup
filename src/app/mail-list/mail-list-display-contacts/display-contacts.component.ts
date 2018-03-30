import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'; //Edit

import { DisplayContactsService } from "./display-contacts.service";


@Component({
	selector: 'display-contacts	',
  	templateUrl: './display-contacts.component.html',
	providers: [DisplayContactsService],
})
export class DisplayContactsComponent implements OnInit{
	contacts: any;

	constructor (private _dataService: DisplayContactsService) { }

	refreshContacts(){
		this.getContacts();
	}

	getContacts(){
			this._dataService.getContacts().subscribe(
			data => this.contacts = data['json_list'],
			error => alert(error),
			() => console.log("Finished !")
		);
	}

	ngOnInit():any {
		this.getContacts();
	}
};
