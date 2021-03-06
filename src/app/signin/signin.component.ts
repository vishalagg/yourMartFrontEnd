import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Subject } from '../../../node_modules/rxjs';
import { HttpHeaders } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup
  currentUsername = new Subject<string>()
  isToken = new Subject<string>()
  loginError : string
  constructor(private formBuilder: FormBuilder,  private userService: UserService,
      private router: Router) {
    this.signinForm = this.formBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  loginUser() {
    if(this.signinForm.valid) {
      
      this.userService.loginUser(this.signinForm.value).subscribe((response : any) => {
        localStorage.setItem("token",response.token);
        localStorage.setItem("id",response.id)
        this.userService.setUsername(response.ownerName);
        this.userService.setCurrentToken(response.token);
        this.router.navigate(['/'])
      },(error) => {
        this.loginError = error
      })
    }
  }

  setUsername(username: string) {
    this.currentUsername.next(username)
  }

  // getCurrentUser(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'authorization': 'Token '+ localStorage.getItem('token')
  //     })
  //   };
  //   return this.http.get(this.currentUserUrl,httpOptions);
  // }
}
