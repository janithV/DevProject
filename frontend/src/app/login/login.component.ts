import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') loginForm:NgForm;
  companyLoginCheck=false;

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const email = this.loginForm.value.email;
    const password =  this.loginForm.value.password;
    this.companyLoginCheck = this.loginForm.value.check;

    if(this.companyLoginCheck){
      this.service.companyLogin(email,password).subscribe(responseData =>{
        if(responseData.status==200){
          console.log(responseData);
          localStorage.setItem('company-token',responseData.body['token']);
          console.log("after")
          this.router.navigate(['/companyprofile']);
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }

      },error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      });
    }
    else{
      this.service.internLogin(email,password).subscribe(responseData =>{
        if(responseData.status==200){
          console.log(responseData);
          console.log(responseData['token'])
          localStorage.setItem('intern-token',responseData.body['token']);
          console.log("after")
          this.router.navigate(['/internprofile']);
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }

      },error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      });
    }
  }

}
