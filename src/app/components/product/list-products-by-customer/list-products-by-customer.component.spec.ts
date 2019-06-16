import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsByCustomerComponent } from './list-products-by-customer.component';

describe('ListProductsByCustomerComponent', () => {
  let component: ListProductsByCustomerComponent;
  let fixture: ComponentFixture<ListProductsByCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsByCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
