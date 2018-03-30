import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { DataLatestForEachService } from "./data-latest-foreach.service";


@Component({
	selector: 'data-latest-foreach',
  	templateUrl: './data-latest-foreach.component.html',
	providers: [DataLatestForEachService],
})
export class DataLatestForEachComponent implements OnInit{
	latestDataForEach: any;

	constructor (private _dataService: DataLatestForEachService) {
	}

	getLatestForEach() {
		this._dataService.getLatestForEach().subscribe(
				data => this.latestDataForEach = data['json_list'],
				error => alert(error),
				() => console.log("Finished !")
			);
	}

	ngOnInit():any {
		this.getLatestForEach();
	}
};
