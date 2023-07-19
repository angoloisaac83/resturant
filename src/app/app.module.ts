import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import { BlogComponent } from './blog/blog.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DeliverDetailsComponent } from './deliver-details/deliver-details.component';
import { PaymentComponent } from './payment/payment.component';
import { SucessfulComponent } from './sucessful/sucessful.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DeliveryComponent } from './delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    BlogComponent,
    ContactComponent,
    CartComponent,
    AddtocartComponent,
    DeliverDetailsComponent,
    PaymentComponent,
    SucessfulComponent,
    NavbarComponent,
    FooterComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgImageSliderModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
