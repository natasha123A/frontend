import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  products:Product[]=[];

  constructor() { }

  setProducts(arr:Product[]){
    this.products=arr;
  }

  getProducts(){
    return this.products;
  }
}
