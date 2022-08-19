import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { RegisteruserService } from '../services/auth/register/registeruser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerservice:RegisteruserService, private route:Router) { }

  ngOnInit(): void {
  }
  getUserData(data:any){
    var currentdate= new Date();
    var dobdate= new Date(`${data.dob}`)
    data.age= Number(currentdate.getFullYear()) - Number(dobdate.getFullYear());
    this.registerservice.addnewuser(data).subscribe(res=>{
      this.route.navigate(['/login']);
    })

  }

}
