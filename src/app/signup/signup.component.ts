import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import {signupdata} from './signupdata';
import {ApicallService} from '../apicall.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted=false;
  shakti:signupdata;
 ValidatePassword(control: AbstractControl) {
    if (!(/[*@!#%&()^~{}]+/.test(control.value))) {
      return { validpassword: true };
    }
    return null;
  }

  constructor(private formBuilder: FormBuilder,private getdata:ApicallService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username: ['', Validators.required],
      gender: ['', Validators.required],
      DOB:[null,Validators.required],
      city:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(10),this.ValidatePassword]]
  });

  }



  get f() { return this.registerForm.controls; }

   check() { return this.submitted;}
   

  submit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      this.shakti=this.registerForm.value;
      
      this.getdata.signupapi(this.shakti).subscribe((data)=>{
        console.log(data.status);
        //move to next page
      })
        
    }
    console.log(this.submitted);
  }

  
  

}
