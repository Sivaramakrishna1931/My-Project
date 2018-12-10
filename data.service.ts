import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  obj:any[]=[];
  s:any={};

  constructor(private http:HttpClient) { }
  setData(v):Observable<any>
  {
    this.obj.push(v)
   
   return this.http.get('assets/user.json');
  }

  send()
  {
    return this.obj
  }

  
  getData():Observable<any>
  {
    
    return this.http.get('assets/user.json');
  }
}
