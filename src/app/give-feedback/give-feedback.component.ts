import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.css']
})
export class GiveFeedbackComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  giveFeedbackFormMethod(giveFeedbackForm: NgForm) {
    this.userService.giveFeedback(giveFeedbackForm).subscribe(feedback => {
      if (feedback.message === 'Success') {
        console.log(feedback);
        alert('feedback added Successfully');
      } else {
        console.log(feedback);
        console.log(feedback);
        alert('Failed To add feedback');
      }
    });
  }

}
