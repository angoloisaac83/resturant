import { Component } from '@angular/core';

@Component({
  selector: 'app-sucessful',
  templateUrl: './sucessful.component.html',
  styleUrls: ['./sucessful.component.css']
})
export class SucessfulComponent {
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
