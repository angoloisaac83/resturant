import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  session:any;
  showing:boolean = false
  toggle:boolean = true
  constructor(
    private cartService: CartService
  ) { }
  show(){
    this.showing =! this.showing
    this.toggle =! this.toggle
  }
  noItems = this.cartService.noitems()
  loadData(){
    let val:any = localStorage.getItem('cart')
    localStorage.getItem('item')
    this.session = JSON.parse(val)
}
}