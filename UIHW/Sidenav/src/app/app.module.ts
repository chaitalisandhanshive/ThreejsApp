import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import ReactiveFormsModule here
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { OrderComponent } from './components/order/order.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AuthServiceService } from './services/auth-service.service';
import { PaymentComponent } from './components/payment/payment.component';
import { Router, RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserordersComponent } from './components/userorders/userorders.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomepageComponent,
    LogoutComponent,
    AccountPageComponent,
    OrderComponent,
    AdmindashboardComponent,
    PaymentComponent,
    UserdetailsComponent,
    UserordersComponent,
  
 
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })

  ],
  providers: [
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }











