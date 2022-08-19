import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentails = {
    username: "",
    password: ""
  }
  constructor(private loginservice: LoginService,private route:Router) { }

  ngOnInit(): void {
  }
  getdata(data: any) {

    this.credentails = data;
    this.loginservice.validate(this.credentails).subscribe(res => {
      if(res==true){
        localStorage.setItem("username",`${this.credentails.username}`);
        localStorage.setItem("password",`${this.credentails.password}`);
        this.route.navigate([''])
      }
    })
  }

}
