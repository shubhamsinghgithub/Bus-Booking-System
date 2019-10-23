import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {
  buss: any = [];
  constructor(private usrService: UserServiceService) { }

  ngOnInit() {
  }
  updateBusInfo(updateBus: NgForm) {
    this.usrService.updateBus(updateBus.value).subscribe(bus => {
      this.buss = bus;
      if (this.buss.message === 'success') {
        console.log(bus);
        alert('Bus Updated Successfully');
        updateBus.reset();
      } else {
        console.log(bus);
        alert('Failed To UpdateBus');
        updateBus.reset();
      }
    }
    );
  }

}
