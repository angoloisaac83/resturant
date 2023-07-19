import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DeliverDetailsComponent } from './deliver-details/deliver-details.component';
import { PaymentComponent } from './payment/payment.component';
import { SucessfulComponent } from './sucessful/sucessful.component';
const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'about' , component: AboutComponent},
  {path:'blog' , component: BlogComponent},
  {path:'menu' , component: MenuComponent},
  {path:'contact' , component: ContactComponent},
  {path:'cart' , component: CartComponent},
  {path:'addtocart' , component: AddtocartComponent},
  {path:'delivery' , component: DeliverDetailsComponent},
  {path:'payment' , component: PaymentComponent},
  {path:'sucessful' , component: SucessfulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
