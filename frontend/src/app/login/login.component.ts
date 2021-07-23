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

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const email = this.loginForm.value.email;
    const password =  this.loginForm.value.password;
    const companyLoginCheck = this.loginForm.value.check;

    if(companyLoginCheck){
      this.service.companyLogin(email,password).subscribe(responseData =>{
        console.log(responseData);
        localStorage.setItem('token',responseData['token']);
        console.log("after")
        this.router.navigate(['/companyprofile']);
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
