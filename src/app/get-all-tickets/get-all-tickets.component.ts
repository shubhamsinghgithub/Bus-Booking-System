import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-get-all-tickets',
  templateUrl: './get-all-tickets.component.html',
  styleUrls: ['./get-all-tickets.component.css']
})
export class GetAllTicketsComponent implements OnInit {
  tickets: any[] = [];
  constructor(private userService: UserServiceService) { this.getTickets(); }

  ngOnInit() {
  }
  getTickets() {
    this.userService.getAllTickets().subscribe(data => {
      console.log(data);
      this.tickets = data.ticketList;
    });
  }

}
