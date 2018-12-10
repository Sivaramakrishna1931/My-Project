import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
data:any[];
Company:string;
Medicines:string;
Location:string;
Email:string;

  constructor(private d:DataService) {this.d.getData().subscribe(b=>this.data=b) }

  ngOnInit() {
  }
del(a)
{
  console.log(this.data);
this.data.splice(a,1)
}
}
