import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { appRouting } from './app.routing';
 

import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";

import { DataComponent } from "./data/data.component";
import { DataLatestForEachComponent } from "./data/data-latest/data-latest-foreach/data-latest-foreach.component";

import { MailListComponent } from "./mail-list/mail-list.component"
import { DisplayContactsComponent } from "./mail-list/mail-list-display-contacts/display-contacts.component"
import { AddContactComponent } from "./mail-list/mail-list-display-contacts/mail-list-add-contacts/add-contact.component"
import { DeleteContactComponent } from "./mail-list/mail-list-display-contacts/mail-list-delete-contact/delete-contact.component"

import { ContactComponent } from "./contact/contact.component";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    DataLatestForEachComponent,
    MailListComponent,
    DisplayContactsComponent,
    AddContactComponent,
    DeleteContactComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
