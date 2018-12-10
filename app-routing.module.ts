import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { StocksComponent } from './stocks/stocks.component';
import { CompanyComponent } from './company/company.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { MedComponent } from './med/med.component';


const routes: Routes = [
  {
    path: 'mainpage', component: MainComponent, children: [
      { path: 'signin', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: '', component: CarouselComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Contact', component: ContactComponent }]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'sto', component: StocksComponent },
      { path: 'industry', component: CompanyComponent },
      { path: 'salesreport', component: SalesComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'stores', component: CustomersComponent }]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'medc', component: MedComponent },
      { path: '', redirectTo: 'medc', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
