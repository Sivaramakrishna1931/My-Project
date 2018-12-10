import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
data:any[];
  constructor(private r:Router,private ls:DataService) { }

  ngOnInit() {
  }
onSubmit(x)
{
 //this.ls.getData(x).subscribe(x=>this.data=x)
  console.log(x);
}
goto()
{
  this.r.navigateByUrl('/mainpage/signin');
}
}
