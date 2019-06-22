import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeesByCustomerComponent } from './list-employees-by-customer.component';

describe('ListEmployeesByCustomerComponent', () => {
  let component: ListEmployeesByCustomerComponent;
  let fixture: ComponentFixture<ListEmployeesByCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeesByCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
