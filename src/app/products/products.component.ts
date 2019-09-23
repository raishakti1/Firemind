import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ApicallService } from '../apicall.service';
export interface Products{
  name:string;
  price:number;
  id:number;
}



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 

   products:any;

  constructor(private router:Router,private srv:ApicallService) {
    
   }

  ngOnInit() {

this.srv.productlistapi().subscribe((x)=>{
  this.products=x.body;
  console.log(x.body);
});

  }

 

  logout()
  {
this.router.navigate(['/home']);
  }

}
