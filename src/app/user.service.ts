import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { User } from './shared/signinDataType';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080"
  currentUsername = new Subject<string>()
  currentToken = new Subject<string>()
  constructor(private http: HttpClient) { }

  loginUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(this.url+"/seller/login",user)
  }

  setUsername(username: string) {
    this.currentUsername.next(username)
  }

  setCurrentToken(token: string) {
    this.currentToken.next(token)
  }

  registerUser(user:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    const newUser = {
      passowrd : user.password,
      seller : {
        companyName : user.companyName,
        ownerName : user.name,
        email : user.email,
        phone:user.phone,
        gstNumber : user.gst,
        address : user.address    
      }  
    }
    return this.http.post(this.url+"/seller/register",newUser)
  }
  
}
