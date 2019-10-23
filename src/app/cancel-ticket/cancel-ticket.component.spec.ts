import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTicketComponent } from './cancel-ticket.component';

describe('CancelTicketComponent', () => {
  let component: CancelTicketComponent;
  let fixture: ComponentFixture<CancelTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
