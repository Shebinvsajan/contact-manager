import { Component, OnInit } from '@angular/core';
import { Mycontact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contactmanager',
  templateUrl: './contactmanager.component.html',
  styleUrls: ['./contactmanager.component.css']
})
export class ContactmanagerComponent implements OnInit {
  allContact: Mycontact[] = []
  searchKey: string = ''
  constructor(private api: ApiService) { }
  ngOnInit(): void {

    this.getAllContact()
  }
  // get all contact 
  getAllContact() {

    this.api.getAllContacts().subscribe((data: any) => {
      console.log(data);
      this.allContact = data

    })

  }
  search(event: any) {
    this.searchKey = event.target.value

  }
  deleteContact(contactId: any) {
    this.api.deleteContact(contactId)
      .subscribe(
        (data: any) => {
          this.getAllContact()
        }
      )
  }

}
