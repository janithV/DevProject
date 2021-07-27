import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { SignUpService } from './signup.service';
import { User } from '../Models/intern.model'
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('form') signUpForm:NgForm;
  typeChanged:boolean=false;
  createSuccess=false;
  validPassword:boolean=false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};

  date= new Date().toLocaleDateString("en",{year:"numeric",month:"2-digit", day:"2-digit"});


  constructor(private router:Router , private service:SignUpService) {
    
   }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'B.Sc. Computer Science' },
      { item_id: 2, item_text: 'B.Eng. Software Engineering' },
      { item_id: 3, item_text: 'B.Sc. Information Technology' },
      { item_id: 4, item_text: 'B.Sc. Information Systems' }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    console.log(this.date);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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
      user.degree = this.signUpForm.value.degree[0].item_text;
      user.specialization = this.signUpForm.value.special;
      user.password=this.signUpForm.value.password;

      
        if(this.signUpForm.value.Softwaredev == true){
         user.se="se1";
        }
        if(this.signUpForm.value.frontend == true){
          user.fe="fe1";
        }
        if(this.signUpForm.value.backend == true){
          user.be="be1";
        }
        if(this.signUpForm.value.fullstack == true){
          user.fs="fs1";
        }
        if(this.signUpForm.value.web == true){
          user.wd="wd1";
        }
        if(this.signUpForm.value.mobile == true){
          user.mad="md1";
        }
      
      this.service.createaccount(user).subscribe(responseData =>{
        console.log(responseData);
        if(responseData.status==201){
          console.log("inside if");
          Swal.fire(
            'Good job!',
            'You are registered!',
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

  checkValid(event:any){
    this.validPassword=false;
    if(event.path[0].value != this.signUpForm.value.password){
      this.validPassword=true;
    }
  }

  

}
