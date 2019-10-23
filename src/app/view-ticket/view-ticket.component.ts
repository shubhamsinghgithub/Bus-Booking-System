import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  tickets: any= null;
  show: any = false;
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  viewTicketFormMethod(viewTicketForm: NgForm) {
    this.userService.viewTicket(viewTicketForm).subscribe(tickets1 => {
      this.tickets = tickets1;
      if (tickets1.message === 'Success') {
        console.log(tickets1);
        alert('Ticket Fetched Successfully');
        this.show = true;
      } else {
        console.log(tickets1);
        console.log(tickets1);
        alert('Failed To Fetch Ticket not exist');
      }
    });
  }

}
