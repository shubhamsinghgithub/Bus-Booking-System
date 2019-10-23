import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userr: any = [];
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(updateUser: NgForm) {
    this.userService.updateUser(updateUser.value).subscribe(bus => {
      this.userr = bus;
      if (bus.message === 'Success') {
        console.log(bus);
        alert('User Updated Successfully');
        updateUser.reset();
      } else {
        console.log(bus);
        alert('Failed To Update User');
        updateUser.reset();
      }
    }
    );

  }
}
