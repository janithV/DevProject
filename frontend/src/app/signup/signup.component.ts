import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('form') signUpForm:NgForm;

  typeChanged:boolean=false;
  
  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.signUpForm);

  }

  onClear(){
    this.signUpForm.reset();
  }

  onTypeChange(){
    this.router.navigate(['/company-signup']);
    
  }
  

}
