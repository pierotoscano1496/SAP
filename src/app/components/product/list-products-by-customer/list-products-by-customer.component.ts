import { Component, OnInit } from '@angular/core';
import Product from 'src/app/model/Product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { MainNavigator } from 'src/app/components/shared/main-navigator/main-navigator';
import CustomerDetails from 'src/app/model/details/CustomerDetails';

@Component({
  selector: 'app-list-products-by-customer',
  templateUrl: './list-products-by-customer.component.html',
  styleUrls: ['./list-products-by-customer.component.css'],
})
export class ListProductsByCustomerComponent implements OnInit {
  customerDetails: CustomerDetails = new CustomerDetails();
  num = 0;
  //listProducts: Array<Product> = null;
  prepareSendToEmail: boolean = false;
  emailToSend: string = 'torr@gaymail.com';
  emailSended: boolean = false;

  listNamesHeaderTable: string[] = ['Id', 'SAP Product', 'SAP Version', 'SAP Support Package', 'SAP Sever Operating System', 'SAP Server IP Address', 'Database Product', 'Database Version', 'Database Support Package', 'Database Server Operating System', 'Database Server IP Adress', 'Customer'];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let customerId: number = this.route.snapshot.params['customerId'];
    var params = new HttpParams().set('customerId', customerId.toString());
    let urlWS: string = 'http://localhost:5000/api/Product/GetListProductsByCustomer';

    this.httpClient.get<CustomerDetails>(urlWS, { params }).subscribe(response => {
      this.customerDetails.name = response.name;
      this.customerDetails.listProducts = new Array<Product>();

      response.listProducts.forEach(item => {
        var product = new Product();
        product.productId = item.productId;
        product.sapProduct = item.sapProduct;
        product.sapVersion = item.sapVersion;
        product.sapSupportPackage = item.sapSupportPackage;
        product.sapServerOperatingSystem = item.sapServerOperatingSystem;
        product.sapServerIp = item.sapServerIp;
        product.databaseProduct = item.databaseProduct;
        product.databaseVersion = item.databaseVersion;
        product.databaseSupportPackage = item.databaseSupportPackage;
        product.databaseServerOperatingSystem = item.databaseServerOperatingSystem;
        product.databaseServerIp = item.databaseServerIp;
        product.customerId = item.customerId;

        this.customerDetails.listProducts.push(product);
      });
    });

    console.log(JSON.stringify(this.customerDetails.listProducts));
  }

  sendEmail() {
    console.log(this.emailToSend);
    this.emailSended = true;
  }

  /*
  prepareSendExcelListProductsToEmail() {
    var listProductsWS = XLSX.utils.json_to_sheet(this.listProducts);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, listProductsWS, 'List of products');
    XLSX.writeFile(wb, 'ProductsList.xlsx');
  }

  exportListProductsToExcel() {
    var listProductsWS = XLSX.utils.json_to_sheet(this.listProducts);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, listProductsWS, 'List of products');
    XLSX.writeFile(wb, 'ProductsList.xlsx');
  }
  */
}
