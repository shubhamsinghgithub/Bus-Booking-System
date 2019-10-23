import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAvaliabilityComponent } from './set-avaliability.component';

describe('SetAvaliabilityComponent', () => {
  let component: SetAvaliabilityComponent;
  let fixture: ComponentFixture<SetAvaliabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAvaliabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAvaliabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
