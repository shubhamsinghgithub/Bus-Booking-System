import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = 'enjoyer';
  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(registerUser: NgForm) {

    this.userService.register(registerUser.value).subscribe(data => {
      if (data.user != null) {
        console.log(data);
        // window.confirm('Registration Successfull');
        alert('Registration Successfull');
        registerUser.reset();
        this.router.navigateByUrl('login');
      } else {
        console.log(data);
        // console.log("NO Output");
        alert('ENTER CORRECT CREDENTAILS');
        registerUser.reset();
      }
    });
  }

}
