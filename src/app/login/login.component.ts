import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [];
  constructor(private router: Router, private http: HttpClient, private loginService: LoginServiceService) { }

  ngOnInit() {
  }
  login(loginForm: NgForm) {
    this.http.post<any>(`http://localhost:8080/ParallelProjectByusing_SpringRest/login`, loginForm.value).subscribe(data => {
      console.log(data.user.type);
      this.users = data.user;
      if (data.user.type === 'owner') {
        window.confirm('login successfull');
        this.loginService.isOwnerLoggedIn = true;
        this.router.navigateByUrl('/');
      } else if (data.user.type === 'enjoyer') {
        window.confirm('Login Successful');
        this.loginService.isCustomerLoggedIn = true;
        this.router.navigateByUrl('/');
      } else if (data.user.type === 'admin') {
        window.confirm('login successfull');
        this.loginService.isAdminLoggedIn = true;
        this.router.navigateByUrl('/');
      } else {
        window.confirm('ENTER CORRECT CREDENTAILS');
        loginForm.reset();
      }
    });
  }
}

