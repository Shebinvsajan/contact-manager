import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mycontact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl:string="http://localhost:3000/contacts"

  constructor(private http:HttpClient) { }
  // function for get allcontacts
  getAllContacts():Observable<Mycontact>{
    return this.http.get(this.baseurl)

  }
  // function for view a particular contact

viewContact(contactId:string){
  return this.http.get(`${this.baseurl}/${contactId}`)
  
 }
 // function for view a particular group
  getGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }
  // function for fetch all group from http://localhost:3000/groups/
  getAllGroups(){
 return   this.http.get('http://localhost:3000/groups')
  }
  // function is for adding new contact to server
  addContact(contactBody:any){
   return this.http.post(this.baseurl,contactBody)

  }
  // function is for deleting a contact
  deleteContact(contactId:any){
   return this.http.delete(`${this.baseurl}/${contactId}`)


  }
  
}
  