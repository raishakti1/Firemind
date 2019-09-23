import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap,retry } from 'rxjs/operators';
import {signdata }  from './signin/signdata';
import {signupdata }  from './signup/signupdata';
export interface productdetail{
  id:number,
  name:string,
  price:number,
  rating:number
}

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  

  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json'
   });

  

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`);
        if(err.status==401)
        alert (err.error)
        if(err.status==400)
        alert(err.error)
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  signinapi(body:signdata):Observable<HttpResponse<signdata>>
  {
    
return this.http.post<signdata>("http://localhost:3000/api/signin",body,{headers:this. httpHeaders,observe:'response'}).pipe(
  

  catchError(this.handleError)
);
  }

  signupapi(body:signupdata):Observable<HttpResponse<signdata>>
  {
    
return this.http.post<signdata>("http://localhost:3000/api/signup",body,{headers:this. httpHeaders,observe:'response'}).pipe(
  
 
  catchError(this.handleError)
);
  }

productlistapi():Observable<HttpResponse<any>>
{
  return this.http.get("http://localhost:3000/api/products",{observe:'response'}).pipe(
    catchError(this.handleError)
  )
}

productdetailapi(id:number):Observable<HttpResponse<any>>
{
  return this.http.get("http://localhost:3000/api/products/"+id,{observe:'response'}).pipe(
    catchError(this.handleError)
  )
}

productdeleteapi(id:number):Observable<HttpResponse<any>>
{
  return this.http.get("http://localhost:3000/api/productsdelete/"+id,{observe:'response'}).pipe(
    catchError(this.handleError)
  )

}

producteditapi(body:productdetail):Observable<HttpResponse<productdetail>>
  {
    
return this.http.post<productdetail>("http://localhost:3000/api/productsedit",body,{headers:this. httpHeaders,observe:'response'}).pipe(
  
 
  catchError(this.handleError)
);
  }


}