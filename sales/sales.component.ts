import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
data:any[];
Medicine:string;
Usage:string;
Quantity:string;
PurchasedPrice:string;
SellingPrice:string;
Profit:string;

  constructor(private d:DataService) {this.d.getData().subscribe(x=>this.data=x) }

  ngOnInit() {
  }

}
