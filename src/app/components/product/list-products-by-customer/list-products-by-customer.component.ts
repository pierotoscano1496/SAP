import { Component, OnInit } from '@angular/core';
import Product from 'src/app/model/Product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-products-by-customer',
  templateUrl: './list-products-by-customer.component.html',
  styleUrls: ['./list-products-by-customer.component.css']
})
export class ListProductsByCustomerComponent implements OnInit {
  listProducts: Array<Product> = null;

  listNamesHeaderTable: string[] = ['Id', 'SAP Product', 'SAP Version', 'SAP Support Package', 'SAP Sever Operating System', 'SAP Server IP Address', 'Database Product', 'Database Version', 'Database Support Package', 'Database Server Operating System', 'Database Server IP Adress', 'Opciones'];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let customerId: number = this.route.snapshot.params['customerId'];
    var params = new HttpParams().set('customerId', customerId.toString());
    let urlWS: string = 'http://localhost:5000/api/Product/GetListProductsByCustomer';

    this.httpClient.get<any[]>(urlWS, { params }).subscribe(response => {
      this.listProducts = new Array<Product>();

      response.forEach(item => {
        var product = new Product();
        product.productId = item.productId;
        product.sapProduct = item.sapProduct;
        product.sapVersion = item.sapVersion;
        product.sapSupportPackage = item.sapSupportPackage;
        product.sapServerOperatingSystem = item.sapServerOperatingSystem;
        product.sapServerIp = item.sapServerIp;
        product.databaseProduct = item.databaseProduct;
        product.databaseVersion = item.databaseVersion;
        product.databaseSupportPackage = item.dsatabaseSupportPackage;
        product.databaseServerOperatingSystem = item.databaseServerOperatingSystem;
        product.databaseServerIp = item.databaseServerIp;
        product.customerId = item.customerId;

        this.listProducts.push(product);
      });
    });

    console.log(JSON.stringify(this.listProducts));
  }

  exportListProductsToExcel() {
    var listProductsWS = XLSX.utils.json_to_sheet(this.listProducts);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, listProductsWS, 'List of products');
    XLSX.writeFile(wb, 'ProductsList.xlsx');
  }
}
