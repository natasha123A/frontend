import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from '../services/productservices/delivery/delivery.service';
import { GetProductDetailsService } from '../services/productservices/getdetail/get-product-details.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  display:boolean=false
  product:any
  id:number=0
  delivery:boolean=true;
  constructor(private route:Router,private deliveryservice:DeliveryService,private activateroute:ActivatedRoute, private getdetails:GetProductDetailsService) { }

  ngOnInit(): void {
    if(localStorage.length==0){
      this.route.navigate(['/login'])
    }
    this.id = this.activateroute.snapshot.params['id']
    this.getdetails.getDetails(this.id).subscribe(res=>{
      this.product=res;
    }) 
  }
  getdata(data:any){
    this.deliveryservice.checkservice(this.id).subscribe((res)=>{
      if(res.includes(`${data.pincode}`)){
        this.delivery=true;
      }
      else  this.delivery=false;
      
    })
    this.display=true;
  }

}
