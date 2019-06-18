import { Component, OnInit } from '@angular/core';
import Product from 'src/app/model/Product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-products-by-customer',
  templateUrl: './list-products-by-customer.component.html',
  styleUrls: ['./list-products-by-customer.component.css']
})
export class ListProductsByCustomerComponent implements OnInit {
  listProducts: Array<Product> = null;

  listNamesHeaderTable: string[] = ['Id', 'SAP Product', 'SAP Version', 'SAP Support Package', 'SAP Sever Operating System', 'SAP Server IP Address', 'Database Product', 'Database Version', 'Database Support Package', 'Database Server Operating System', 'Database Server IP Adress', 'Opciones'];

  constructor(private httpClient: HttpClient, private header: HttpHeaders, private route: ActivatedRoute) { }

  ngOnInit() {
    var params = new HttpParams().set('idComponent', this.route.snapshot.paramMap.get('idComponent'));

    this.httpClient.get<any[]>('', { params }).subscribe(response => {
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
        product.databaseSupportPackage = item.databaseSupportPackage;
        product.databaseServerOperatingSystem = item.databaseServerOperatingSystem;
        product.databaseServerIp = item.databaseServerIp;
        product.customerId = item.customerId;

        this.listProducts.push(product);
      });
    })
  }

}
