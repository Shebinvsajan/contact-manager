import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/contact/admin', pathMatch: 'full'
  },
  {
    path: 'contact/admin', component: ContactmanagerComponent
  },
  // addContact
  {
    path: 'contact/add', component: AddContactComponent
  },
  // update contact
  {
    path: 'contact/edit/:contactId', component: UpdateContactComponent
  },
  // view
  {
    path: 'contact/view/:contactId', component: ViewContactComponent

  },
  // page not found
  {

    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
