import { Component , OnInit} from '@angular/core';
import { Products , products } from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
})
export class CartComponent {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  temp = this.cartService.moves();
  products:any = products
  showing:boolean = false
  toggle:boolean = true
  show(){
    this.showing =! this.showing
    this.toggle =! this.toggle
  } 
  session:any;
  noOf:any;
  value = 0
  noItems = 0
  add(){
    this.value ++
    let data = {
      id: 1,
      value: this.value
    }
    localStorage.setItem('cart',JSON.stringify(data))
  }
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
    this.session = JSON.parse(val)
    let vals:any = localStorage.getItem('noitems')
    this.noOf = JSON.parse(vals)
   }
   product:Products | any;

   ngOnInit():void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = 
  
    // Find the product that correspond with the id provided in route.
    this.temp.forEach(jj=>{
      // return Number(jj.id)
      let ll = this.product = products.find(product => product.id === jj.id);
    });
    
    // console.log(productIdFromRoute)
  }
   addToCart(product: any) {
    this.noItems = this.cartService.noitems()+1
    this.cartService.addToCart(product);
  }
  clear(){
    this.cartService.clear()
  }
}
