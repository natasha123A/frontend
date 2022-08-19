import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/app/models/User';
@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http:HttpClient) { }

  addnewuser(data:User){
    let url="http://localhost:5000/newuser";
    return this.http.post(url,data);
  }
}
