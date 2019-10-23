import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-owner',
  templateUrl: './remove-owner.component.html',
  styleUrls: ['./remove-owner.component.css']
})
export class RemoveOwnerComponent implements OnInit {

  constructor(private userService: UserServiceService) { this.getAllOwners(); }
  owners: any[] = [];
  ngOnInit() {
  }
  remove(id: NgForm) {
    this.userService.removeOwner(id.value.userId).subscribe(data => {
      if (data != null) {
        console.log(data);
        alert('User Deleted Succesfully');
        id.reset();
        this.getAllOwners();
      } else {
        console.log(data);
        alert('Failed TO Delete Owner');
        id.reset();
      }
    });
  }
  getAllOwners() {
    this.userService.getAllOwner().subscribe(data => {
      console.log(data);
      this.owners = data.userList;
    }
    );
  }

}
