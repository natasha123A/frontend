import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class SearchitemService {

  constructor(private http:HttpClient) { }

  getItems(word:any):Observable<Product[]>{
    let url="http://localhost:5000/searchProd/" +word;
    return this.http.get<Product[]>(url);
  }
}
