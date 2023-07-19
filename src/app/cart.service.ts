import { Product, Products } from './product';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  temp: Products[] = [];

/* . . . */

addToCart(product: Product) {
  this.items.push(product);
  localStorage.setItem('cartItems',JSON.stringify(this.items))
  console.log(this.items)
  window.alert('Your product has been added to the cart!');
}
getItems() {
  return this.items;
}
loadData(){
  console.log(this.items)
}
clearCart() {
  this.items = [];
  localStorage.setItem('cartItems',JSON.stringify(this.items))
  return this.items,
  alert("Cart Cleared");
}
clear(){
  this.temp = [];
  return this.temp
}
noitems(){
  return this.items.length
}
move(temp: Products){
  this.temp.push(temp);
}
moves(){
  return this.temp;
}
}