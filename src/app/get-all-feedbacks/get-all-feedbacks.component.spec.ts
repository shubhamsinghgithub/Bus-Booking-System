import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFeedbacksComponent } from './get-all-feedbacks.component';

describe('GetAllFeedbacksComponent', () => {
  let component: GetAllFeedbacksComponent;
  let fixture: ComponentFixture<GetAllFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
