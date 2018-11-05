import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';
import { Subject } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username : string
  token : string
  constructor(private userService: UserService,private router: Router) {
    
   }

   ngOnInit() {
    this.token = localStorage.getItem('token')
    this.userService.currentUsername.subscribe(username => {
      this.username = username
    })
    // this.userService.currentToken.subscribe(token => {
    //   this.token = token
    // })
  }

  logout(){
    localStorage.clear();
    this.userService.setUsername(null);
    this.userService.setCurrentToken(null);
    this.router.navigate(['/signin']);
  }
  

}
