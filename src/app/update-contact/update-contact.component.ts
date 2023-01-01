import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mycontact } from 'src/models/myContact';
import { Mygroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contact:Mycontact={} as Mycontact
  contactId:string=''
  groups:Mygroup[]= {} as Mygroup[]
constructor(private activateRoute:ActivatedRoute,private api:ApiService,private router:Router){ }
ngOnInit(): void {
  // get contact id from url parameter using ActivateRoute class
  this.activateRoute.params.subscribe((data)=>{
    console.log(data['contactId']);
    this.contactId=data[`contactId`]
  }
 
  )
  // call api for getting from services class
  this.api.getAllGroups().subscribe(
    (data:any)=>{
      this.groups=data
      console.log(this.groups);
      
    }
  )
  // call api for particular contact deatils
  this.api.viewContact(this.contactId).subscribe(
    (data:any)=>{
this.contact=data
console.log(this.contact);

    }
  )
}
updateContact(){
  this.api.updateContact(this.contactId,this.contact).subscribe(
    (data:any)=>{
      this.router.navigateByUrl('')

    }
  )
}
}
