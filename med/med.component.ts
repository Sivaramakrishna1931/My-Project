import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.css']
})
export class MedComponent implements OnInit {
  data:any[]=[];
  obj:any;
  Medicine:string;
  Usage:string;
  Quantity:string;
  Price:string;

  constructor(private d:DataService) {this.d.getData().subscribe(x=>this.data=x); }


  submit(v)
  {
    this.d.setData(v);
  }


  ngOnInit() {
  }
  
}
