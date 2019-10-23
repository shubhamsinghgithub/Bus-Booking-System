import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  avail: any = null;
  backendUrl = 'http://localhost:8080/ParallelProjectByusing_SpringRest/user';
  ownerUrl = 'http://localhost:8080/ParallelProjectByusing_SpringRest/owner';
  userUrl = 'http://localhost:8080/ParallelProjectByusing_SpringRest/enjoyer';

  constructor(private http: HttpClient) { }
  register(data) {
    console.log(data);
    return this.http.post<any>(`${this.backendUrl}/add`, data);
  }
  removeOwner(data) {
    return this.http.delete(`${this.backendUrl}/deleteOwner/${data}`);
  }
  removeCustomer(data) {
    return this.http.delete(`${this.backendUrl}/deleteUser/${data}`);
  }
  getAllOwner() {
    return this.http.get<any>(`${this.backendUrl}/getAllOwner`);
  }
  getAllCustomer() {
    return this.http.get<any>(`${this.backendUrl}/getAllCustomer`);
  }
  addBus(data) {
    return this.http.post(`${this.ownerUrl}/addBus`, data);
  }
  updateBus(data) {
    return this.http.put(`${this.ownerUrl}/updateBus`, data);
  }
  deleteBus(data) {
    return this.http.delete(`${this.ownerUrl}/deleteBus/${data}`);
  }
  getAllTickets() {
    return this.http.get<any>(`${this.ownerUrl}/getAllTicket`);
  }
  setAvaliability(data) {
    console.log(data);
    return this.http.post(`${this.ownerUrl}/setAvaliability`, data);
  }
  getAllFeedbacks() {
    return this.http.get<any>(`${this.ownerUrl}/getFeedback`);
  }
  showAllBus() {
    return this.http.get<any>(`${this.ownerUrl}/getAllBus`);
  }
  chechAvail(data) {
    return this.http.get<any>(`${this.userUrl}/checkAvailability/${data.startingPoint}/${data.endingPoint}/${data.availableDate}`);
  }
  bookTicket(data) {
    return this.http.post<any>(`${this.userUrl}/bookTicket`, data);
  }
  availa() {
    return this.avail = true;
  }
  viewTicket(data) {
    return this.http.get<any>(`${this.userUrl}/getTicket/${data.bookingId}`);
  }
  updateUser(data) {
    return this.http.put<any>(`${this.userUrl}/update`, data);
  }
  cancelTicket(data) {
    return this.http.delete<any>(`${this.userUrl}/deleteTicket/${data.bookingId}`);
  }
  giveFeedback(data) {
    return this.http.post<any>(`${this.userUrl}/giveFeedback`, data);
  }
}
