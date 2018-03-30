import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from "./home/home.component";

import { DataComponent } from "./data/data.component";
import { DataLatestForEachComponent } from "./data/data-latest/data-latest-foreach/data-latest-foreach.component";

import { MailListComponent } from "./mail-list/mail-list.component"
import { AddContactComponent } from "./mail-list/mail-list-display-contacts/mail-list-add-contacts/add-contact.component"

import { ContactComponent } from "./contact/contact.component";


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'mail_list', component: MailListComponent},
  { path: 'data', component: DataComponent,
	children: [
			    {
	              path: '',
	              component: DataLatestForEachComponent
	            },
	            {
	              path: 'latest/foreach',
	              component: DataLatestForEachComponent
	            }
	          ]  
  }];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);