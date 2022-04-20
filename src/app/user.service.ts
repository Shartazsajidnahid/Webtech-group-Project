import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {phone: "017171", name: 'Debi', userid: "db1", email: "debi@gmai.com", password: "123"},
    
  ];
  
  baseurl: string="http://localhost:3000/customer/";

  bookToBeUpdated: User = new User();
  bookToBeUpdatedIndex: number = 0;
  constructor(private http: HttpClient) { }

  // getBooks(): Book[] {
  //   return this.books;
  // }

 
  public userlogin(newuser: User) {
    console.log("hey");
    console.log(newuser);



    this.setToken(newuser.userid);
  }

  public userregistration(newuser: User) {
    console.log("hey");
    console.log(newuser);
    this.http.post(this.baseurl,newuser);
  }

  logout(){
    this.deleteToken();
  }
  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

}
