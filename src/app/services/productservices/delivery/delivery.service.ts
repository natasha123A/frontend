import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  checkservice(id:number):Observable<string[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(localStorage.getItem("username")+':'+localStorage.getItem("password"))
      })
    };
    let url="http://localhost:5000/service/"+id;
    return this.http.get<string[]>(url,httpOptions);
  }
}
