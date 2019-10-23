import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-get-all-feedbacks',
  templateUrl: './get-all-feedbacks.component.html',
  styleUrls: ['./get-all-feedbacks.component.css']
})
export class GetAllFeedbacksComponent implements OnInit {
  feedbacks: any[] = [];
  constructor(private userService: UserServiceService) {this.getFeedbcks(); }

  ngOnInit() {
  }
  getFeedbcks() {
    this.userService.getAllFeedbacks().subscribe(data => {
      console.log(data);
      this.feedbacks = data.feedList;
    });
  }


}
