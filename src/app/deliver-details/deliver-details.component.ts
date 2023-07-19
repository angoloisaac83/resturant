import { Component } from '@angular/core';

@Component({
  selector: 'app-deliver-details',
  templateUrl: './deliver-details.component.html',
  styleUrls: ['./deliver-details.component.css']
})
export class DeliverDetailsComponent {
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
