import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  showing:boolean = false
  toggle:boolean = true
  show(){
    this.showing =! this.showing
    this.toggle =! this.toggle
  }
  session:any;
  loadData(){
    let val:any = localStorage.getItem('cart')
    this.session = JSON.parse(val)
   }
}
