import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTemplateComponent } from './components/main-template/main-template.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'sap',
    component: MainTemplateComponent
    // children: [
    //   { path: 'saleList', component: SaleListComponent }
    // ]
  },
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
