import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [{path:'home',component:HomeComponent,children:[{path:'signin',component:SigninComponent},{path:'signup',component:SignupComponent}]},
{path:'products',component:ProductsComponent,children:[{path:":id",component:ProductdetailComponent}]},
{path:'**',redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
