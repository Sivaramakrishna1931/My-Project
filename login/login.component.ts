import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    data:any[]
  constructor(private r:Router,private ls:DataService) { 
    
  }
  readData()
  {

  }

  ngOnInit() {
  }
onSubmit(x)
{
  
  //this.ls.getData(x).subscribe(x=>this.data=x) 
  if(x.user=="admin123"&&x.password=="admin123")
  {
    this.r.navigate(['/admin'])
    alert("Admin logged in")
  }
  else if(x.user=="Siva123"&&x.password=="Siva123")
  {
    this.r.navigate(['/user'])
    alert("Welcome Back Siva")
  }
  else{
    alert("Credentials doesnt match");
  }
}

}
