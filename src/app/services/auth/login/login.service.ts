import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  credentials = {
    username: "",
    password: ""
  }
  constructor(private http: HttpClient) { }

  validate(data: any) {
    this.credentials=data;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(this.credentials.username+':'+this.credentials.password)
      })
    };
    let url = "http://localhost:5000/auth"
    return this.http.get(url,httpOptions);
  }
}
