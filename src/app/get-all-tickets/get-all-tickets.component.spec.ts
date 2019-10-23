import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTicketsComponent } from './get-all-tickets.component';

describe('GetAllTicketsComponent', () => {
  let component: GetAllTicketsComponent;
  let fixture: ComponentFixture<GetAllTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
