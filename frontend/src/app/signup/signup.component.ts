import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { SignUpService } from './signup.service';
import { User } from '../Models/intern.model'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('form') signUpForm:NgForm;
  typeChanged:boolean=false;
  createSuccess=false;
  
  constructor(private router:Router , private service:SignUpService) {
    
   }

  ngOnInit(): void {
  }


  onSubmit(){
      const user = new User();
      user.fname = this.signUpForm.value.fname;
      user.lname = this.signUpForm.value.lname;
      user.email = this.signUpForm.value.email;
      user.contact = this.signUpForm.value.contact;
      user.dob = this.signUpForm.value.date;
      user.gender = this.signUpForm.value.gender;
      user.university = this.signUpForm.value.university;
      user.degree = this.signUpForm.value.degree;
      user.specialization = this.signUpForm.value.special;

      
        if(this.signUpForm.value.Softwaredev == true){
         user.se=1;
        }
        if(this.signUpForm.value.frontend == true){
          user.fe=1;
        }
        if(this.signUpForm.value.backend == true){
          user.be=1;
        }
        if(this.signUpForm.value.fullstack == true){
          user.fs=1;
        }
        if(this.signUpForm.value.web == true){
          user.wd=1;
        }
        if(this.signUpForm.value.mobile == true){
          user.mad=1;
        }
      
      this.service.createaccount(user).subscribe(responseData =>{
        console.log(responseData);
        if(responseData.status==201){
          console.log("inside if");
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        }
        console.log(responseData);
        this.signUpForm.reset();
    });

    console.log(user);

  }

  onClear(){
    this.signUpForm.reset();
  }

  onTypeChange(){
    this.router.navigate(['/company-signup']);
    
  }

  // getData(){

  //   this.service.getData().subscribe(users =>{
  //     console.log(users)
  //   });
  // }
  

}
