import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAvaliabilityComponent } from './check-avaliability.component';

describe('CheckAvaliabilityComponent', () => {
  let component: CheckAvaliabilityComponent;
  let fixture: ComponentFixture<CheckAvaliabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAvaliabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAvaliabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
