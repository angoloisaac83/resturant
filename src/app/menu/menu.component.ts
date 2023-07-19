import { Component , OnInit} from '@angular/core';
import { Product , products } from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    constructor(
      private route: ActivatedRoute,
      private cartService: CartService
    ) { }
  products:any = products
  showing:boolean = false
  toggle:boolean = true
  show(){
    this.showing =! this.showing
    this.toggle =! this.toggle
  }
  value = 0
  session:any;
  hovs:boolean = false
  add(){
    this.value ++
    let data = {
      id: 1,
      value: this.value
    }
    localStorage.setItem('cart',JSON.stringify(data))
  }
  hov(){
    this.hovs =! this.hovs
  }
  noItems = this.cartService.noitems()
  loadData(){
   let val:any = localStorage.getItem('cart')
   this.session = JSON.parse(val)
  }

   product:Product | any;

   ngOnInit():void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    let ll = this.product = products.find(product => product.id === productIdFromRoute);
    console.log(routeParams)
  }
   move(product: any) {
    this.noItems = this.cartService.noitems()+1
    this.cartService.move(product);
    console.log(product)
  }
}
