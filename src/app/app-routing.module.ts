import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { RemoveOwnerComponent } from './remove-owner/remove-owner.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { GetAllTicketsComponent } from './get-all-tickets/get-all-tickets.component';
import { SetAvaliabilityComponent } from './set-avaliability/set-avaliability.component';
import { GetAllFeedbacksComponent } from './get-all-feedbacks/get-all-feedbacks.component';
import { ShowAllBusesComponent } from './show-all-buses/show-all-buses.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { CheckAvaliabilityComponent } from './check-avaliability/check-avaliability.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addOwner', component: AddOwnerComponent},
  {path: 'removeOwner', component: RemoveOwnerComponent},
  {path: 'removeUser', component: RemoveUserComponent},
  {path: 'addBus', component: AddBusComponent},
  {path: 'updateBus', component: UpdateBusComponent},
  {path: 'deleteBus', component: DeleteBusComponent},
  {path: 'getAllTickets', component: GetAllTicketsComponent},
  {path: 'setAvaliability', component: SetAvaliabilityComponent},
  {path: 'getAllFeedbacks', component: GetAllFeedbacksComponent},
  {path: 'showAllBuses', component: ShowAllBusesComponent},
  {path: 'bookTicket', component: BookTicketComponent},
  {path: 'viewTicket', component: ViewTicketComponent},
  {path: 'checkAvaliability', component: CheckAvaliabilityComponent},
  {path: 'updateUser', component: UpdateUserComponent},
  {path: 'cancelTicket', component: CancelTicketComponent},
  {path: 'giveFeedback', component: GiveFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
