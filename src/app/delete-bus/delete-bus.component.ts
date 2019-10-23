import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-bus',
  templateUrl: './delete-bus.component.html',
  styleUrls: ['./delete-bus.component.css']
})
export class DeleteBusComponent implements OnInit {
  buss: any = [];
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  deleteBusMethod(deleteBus: NgForm) {
    this.userService.deleteBus(deleteBus.value.busId).subscribe(bus => {
      this.buss = bus;
      if (this.buss.message === 'Success') {
        console.log(bus);
        alert('Bus Deleted Successfully');
        deleteBus.reset();
      } else {
        console.log(bus);
        alert('Failed To deleteBus');
        deleteBus.reset();
      }
    }
    );
  }
}
