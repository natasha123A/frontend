import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component:LandingComponent, pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"display",
    component:ProductlistComponent
    
  },
  {
    path:"product/:id",
    component:ProductdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
