import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { from } from 'rxjs';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { StocksComponent } from './stocks/stocks.component';
import { CompanyComponent } from './company/company.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchPipe } from './search.pipe';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { MedComponent } from './med/med.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    CarouselComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    AdminComponent,
    MainComponent,
    StocksComponent,
    CompanyComponent,
    SalesComponent,
    OrdersComponent,
    CustomersComponent,
    SearchPipe,
    UserComponent,
    CartComponent,
    MedComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
