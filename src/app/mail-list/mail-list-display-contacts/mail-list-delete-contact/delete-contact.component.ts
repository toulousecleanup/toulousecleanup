import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { DeleteContactService } from "./delete-contact.service";

@Component({
	selector: 'delete-contacts',
  	templateUrl: './delete-contact.component.html',
	providers: [DeleteContactService],
})
export class DeleteContactComponent {
    @Input() mail:string;

    @Output() refresh = new EventEmitter();
	refreshMailListNeeded() {
		this.refresh.emit();
		console.log("emitted")
	}

	constructor (private deleteContactService: DeleteContactService) { }

	deleteContact(mail: string){
		if (confirm("Are you sure?")) {
			this.deleteContactService.deleteContact(mail).subscribe(
				data => console.log(data),
				error => alert(error),
				() => setTimeout(this.refreshMailListNeeded(), 500)
			);
		}
	}
};
