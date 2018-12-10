import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
data:any[];
MedicineName:string;
Usage:string;
Quantity:string;
price:string;
  constructor(private d:DataService) { this.d.getData().subscribe(x=>this.data=x);

   }

  ngOnInit() {
   
}
remove(a)
{
  console.log(this.data);
this.data.splice(a,1)
}
}