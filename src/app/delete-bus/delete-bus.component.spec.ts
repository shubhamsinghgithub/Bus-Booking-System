import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBusComponent } from './delete-bus.component';

describe('DeleteBusComponent', () => {
  let component: DeleteBusComponent;
  let fixture: ComponentFixture<DeleteBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
