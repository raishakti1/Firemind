import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import{ApicallService } from '../apicall.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product={
    name:'',
    price:0,
    rating:0,
    id:0
  }
  id
  durations=[1,2,3,4,5]

  constructor(private route: ActivatedRoute,private srv:ApicallService,private router:Router) { }

  ngOnInit() {

     this.id = this.route.snapshot.paramMap.get("id")
    // this.id=this.route.paramMap.pipe(
    //   switchMap((params) => {
    //        return params.get("id")
        
    //   })
    // )

    this.srv.productdetailapi(this.id).subscribe((x)=>{
      this.product=x.body[0];
      console.log(x.body);
    });
  }
deletedata()
{
  this.srv.productdeleteapi(this.id).subscribe((x)=>{
    
    console.log(x.status);
    this.router.navigate(['/products']);
    this.ngOnInit();
    
   
    

  });
}

cancel()
{
this.router.navigate(['/products']);
}

savedata()
{
this.srv.producteditapi(this.product).subscribe((x)=>{
  console.log(x.status);
  window.location.reload();
  

})
}

}
