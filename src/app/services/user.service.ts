import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

     baseUrl : string='https://jsonplaceholder.cypress.io/'

  constructor(private http : HttpClient) { }

  listUser(){
    return  this.http.get(this.baseUrl +'users')
  }

  viewUser(id: string){
    return  this.http.get(this.baseUrl +'users/'+ id)
  }

  addUser(userobj : any){
    return this.http.post(this.baseUrl + 'users', userobj)
  }

  deleteUser(id: any){
    return this.http.delete(this.baseUrl +'users/'+ id)
  }
}
