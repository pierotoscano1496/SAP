import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import CustomerDetails from 'src/app/model/details/CustomerDetails';
import Product from 'src/app/model/Product';
import Employee from 'src/app/model/Employee';

@Component({
  selector: 'app-list-employees-by-customer',
  templateUrl: './list-employees-by-customer.component.html',
  styleUrls: ['./list-employees-by-customer.component.css']
})
export class ListEmployeesByCustomerComponent implements OnInit {
  listNamesHeaderTable: string[] = ['Id', 'Name', 'Surname', 'DNI', 'Number Account', 'Amout', 'Email', 'Customer'];
  customerDetails: CustomerDetails = new CustomerDetails();

  emailToSend: string = "";
  emailSended: boolean = false;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    let customerId: number = this.route.snapshot.params['customerId'];
    var params = new HttpParams().set('customerId', customerId.toString());
    let urlWS: string = 'http://localhost:5000/api/Employee/GetListEmployeesByCustomer';

    this.httpClient.get<CustomerDetails>(urlWS, { params }).subscribe(response => {
      this.customerDetails.name = response.name;
      this.customerDetails.listEmployees = new Array<Employee>();

      response.listEmployees.forEach(item => {
        var employee = new Employee();
        employee.employeeId = item.employeeId;
        employee.name = item.name;
        employee.surname = item.surname;
        employee.dni = item.dni;
        employee.numberAccount = item.numberAccount;
        employee.amount = item.amount;
        employee.email = item.email;
        employee.customerId = item.customerId;

        this.customerDetails.listEmployees.push(employee);
      });
    });
  }

  sendEmail() {
    console.log(this.emailToSend);
    this.emailSended = true;
  }

}
