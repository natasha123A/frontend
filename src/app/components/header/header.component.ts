import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductlistService } from 'src/app/services/productservices/getlist/productlist.service';
import { SearchitemService } from 'src/app/services/productservices/search/searchitem.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public arr=['<500','500-1000','1000-2000','>2000'];
  public selected=''
  
  isLoggedin:boolean=false
  word={
    searchword:""
  }
  username:string=""
  static products:Product[]=[]
  constructor(private route:Router,private searchservice:SearchitemService,private productservice:ProductlistService) { }

  ngOnInit(): void {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.username=localStorage.getItem("username")??"";
    if(this.username!=""){
      this.isLoggedin=true;
    }
    else if(this.username==""){
      this.isLoggedin=false;
    }
    this.selected='Filter By Price'
  }
  getWord(data:any){
    this.word=data
    this.searchservice.getItems(this.word.searchword).subscribe(res=>{
      HeaderComponent.products=res;
      this.productservice.setProducts(res);
      this.route.navigate(['/display'])
    })
  }
  gotoLogin(){
    this.route.navigate(['/login']);
  }
  gotoRegister(){
    this.route.navigate(['/register']);
  }
  logout(){
    localStorage.clear();
    this.route.navigate([''])
  }
  getfilter(data:any){
    if(data.price){
    }
  }
  change(item:string){
    this.selected=item;
    let filterarr:Product[]=[];
    if(this.selected=='<500') filterarr=HeaderComponent.products.filter((prod)=> prod.price<500);
    else if(this.selected=='500-1000') filterarr=HeaderComponent.products.filter((prod)=> prod.price>=500 && prod.price<1000);
    else if(this.selected=='1000-2000') filterarr=HeaderComponent.products.filter((prod)=> prod.price>=1000 && prod.price<2000);
    else if(this.selected=='>2000') filterarr=HeaderComponent.products.filter((prod)=> prod.price>=2000);

    this.productservice.setProducts(filterarr);
    this.route.navigate(['/display']);

  }
}
