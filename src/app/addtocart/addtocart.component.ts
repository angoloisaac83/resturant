import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent {

  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }
  showing:boolean = false
  toggle:boolean = true
  show(){
    this.showing =! this.showing
    this.toggle =! this.toggle
  }
  sho(){
    this.cartService.loadData()
    alert('a')
  }
  clearCart(){
    this.cartService.clearCart()
  }
  session:any;
  noOf:any;
  noItems = this.cartService.noitems()
  minus(){
    this.noItems --
    if (this.noItems <= 0) {
      this.noItems = 0
    }
    let data = {
      id: 2,
      value: this.noItems
    }
    localStorage.setItem('noitems',JSON.stringify(data))
  }
  ad(){
    this.noItems++
    let data = {
      id: 3,
      value: this.noItems
    }
    localStorage.setItem('noitems',JSON.stringify(data))
  }
  loadData(){
    let val:any = localStorage.getItem('cart')
    localStorage.getItem('item')
    this.noItems = this.cartService.noitems()
    this.session = JSON.parse(val)
    let vals:any = localStorage.getItem('noitems')
    this.noOf = JSON.parse(vals)
   }
}
