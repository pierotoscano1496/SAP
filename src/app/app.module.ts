import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigator } from './components/shared/main-navigator/main-navigator';
import { MainTemplateComponent } from './components/main-template/main-template.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { ListProductsByCustomerComponent } from './components/product/list-products-by-customer/list-products-by-customer.component';
import { SendListProductsToEmailComponent } from './components/product/list-products-by-customer/send-list-products-to-email/send-list-products-to-email.component';
import { ListEmployeesByCustomerComponent } from './components/employee/list-employees-by-customer/list-employees-by-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTemplateComponent,
    MainPageComponent,
    LoginComponent,
    ListProductsByCustomerComponent,
    MainNavigator,
    SendListProductsToEmailComponent,
    ListEmployeesByCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
