import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllBusesComponent } from './show-all-buses.component';

describe('ShowAllBusesComponent', () => {
  let component: ShowAllBusesComponent;
  let fixture: ComponentFixture<ShowAllBusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllBusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
