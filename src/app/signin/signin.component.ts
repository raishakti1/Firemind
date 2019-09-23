import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{signdata} from './signdata';
import{ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  registerForm: FormGroup;
  submitted=false;
  shakti:signdata;

  constructor(private formBuilder: FormBuilder,private getdata:ApicallService,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      
      password: ['', [Validators.required]]
  });

  }

  get f() { return this.registerForm.controls; }
  check(){return this.submitted}

  submit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      this.shakti=this.registerForm.value;
      this.getdata.signinapi(this.shakti).subscribe((data)=>{
        console.log(data.status);
        //move to next page
        this.router.navigate(['/products']);
      })
      

        

        
    }
  }

}
