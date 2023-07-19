import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
