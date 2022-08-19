import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProductDetailsService {

  constructor(private http:HttpClient) { }
  
  getDetails(id:number):Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(localStorage.getItem("username")+':'+localStorage.getItem("password"))
      })
    };
    let url="http://localhost:5000/details/"+id;
    return this.http.get<Product>(url,httpOptions);
  }
}
