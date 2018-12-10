import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
obj:any[]=[]
  constructor(private d:DataService) { 
    this.obj=this.d.send()
  }
      
  ngOnInit() {
  }

}
