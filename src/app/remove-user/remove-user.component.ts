import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserServiceService) { this.getAllUsers(); }

  ngOnInit() {
  }
  remove(id: NgForm) {
    this.userService.removeCustomer(id.value.userId).subscribe(data => {
      if (data != null) {
        console.log(data);
        alert('User Deleted Succesfully');
        id.reset();
        this.getAllUsers();
      } else {
        console.log(data);
        alert('Failed TO Delete User');
        id.reset();
      }
    });
  }
  getAllUsers() {
    this.userService.getAllCustomer().subscribe(data => {
      console.log(data);
      this.users = data.userList;
    }
    );
  }
}
