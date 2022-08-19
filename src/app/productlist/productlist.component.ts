import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductlistService } from '../services/productservices/getlist/productlist.service'; 

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  products:Product[]=[];
  constructor(private productservice:ProductlistService,private router:Router) { }

  ngOnInit(): void {
    
    this.products=this.productservice.getProducts();
    if(this.products.length==0){
      alert('NO ITEM FOUND')
      this.router.navigate([''])
    }
  }


}
