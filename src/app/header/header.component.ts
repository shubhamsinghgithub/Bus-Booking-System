import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService, private userService: UserServiceService) { }

  ngOnInit() {
  }
  get isAdminLogin() {
    return this.loginService.isAdminLogin();
  }
  get isOwnerLogin() {
    return this.loginService.isOwnerLogin();
  }
  get isCustomerLogin() {
    return this.loginService.isCustomerLogin();
  }
  get getavalia() {
   return this.userService.avail;
  }
  logout() {
    this.loginService.isAdminLoggedIn = false;
    this.loginService.isOwnerLoggedIn = false;
    this.loginService.isCustomerLoggedIn = false;
    this.router.navigateByUrl('/');
  }

}
