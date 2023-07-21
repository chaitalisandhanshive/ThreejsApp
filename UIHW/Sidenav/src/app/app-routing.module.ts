import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserordersComponent } from './components/userorders/userorders.component';






 const routes: Routes = [
 {path: '', redirectTo: 'homepage', pathMatch: 'full'},
 {path:'login', component:LoginComponent},
 {path:'signup',component:SignupComponent},
 {path:'dashboard',component:DashboardComponent},
 {path: 'homepage', component:HomepageComponent},
 {path:'accountpage', component:AccountPageComponent},
 {path: 'order', component:OrderComponent},
 {path: 'payment', component:PaymentComponent},
 {path: 'Admin', component:AdmindashboardComponent},
 {path: 'userdetails', component:UserdetailsComponent},
 {path: 'userorders', component:UserordersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }





