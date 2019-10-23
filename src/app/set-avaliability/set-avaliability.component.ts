import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-avaliability',
  templateUrl: './set-avaliability.component.html',
  styleUrls: ['./set-avaliability.component.css']
})
export class SetAvaliabilityComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  setAvail(setAvailForm: NgForm) {
    this.userService.setAvaliability(setAvailForm.value).subscribe(data => {
      if (data != null) {
        console.log(data);
        alert('Availability Set Successfully');
        setAvailForm.reset();
      } else {
        console.log(data);
        // console.log("NO Output");
        alert('Failed To SetAvailability');
        setAvailForm.reset();
      }

    });
  }

}
