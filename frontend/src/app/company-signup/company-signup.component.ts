import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from 'sweetalert2';
import { Company } from '../Models/company.model';
import { CompanyService } from './company-signup.service';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {

  @ViewChild('form') signUpForm:NgForm;

  constructor(private router:Router,private service:CompanyService) { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
  validPassword:boolean=false;
  company = new Company();
  isLoading=false;


  ngOnInit(){
    this.dropdownList = [
      { item_id: 1, item_text: 'Software Engineer' },
      { item_id: 2, item_text: 'Web Developer' },
      { item_id: 3, item_text: 'Fullstack Developer' },
      { item_id: 4, item_text: 'Quality Assurance' },
      { item_id: 5, item_text: 'Mobile Application developer' },
      { item_id: 6, item_text: 'Business Analyst' },
      { item_id: 7, item_text: 'Data Analyst' },
      { item_id: 8, item_text: 'DevOps' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onTypeChange(){
      this.router.navigate(['/signup']);
  }

  onSubmit(){

    this.company.cname=this.signUpForm.value.cname;
    this.company.email=this.signUpForm.value.email;
    this.company.about=this.signUpForm.value.about;
    this.company.fb=this.signUpForm.value.fb;
    this.company.twitter=this.signUpForm.value.twitter;
    this.company.linkedin=this.signUpForm.value.linkedin;
    this.company.password=this.signUpForm.value.password;
    this.company.hiring=this.signUpForm.value.selected;

    console.log(this.company);
    
    for(let i=0;i<this.company.hiring.length;i++){
      console.log("inside :", i)
      if(this.company.hiring[i].item_id===1){
        this.company.SoftwareEngineer=1;
      }

      if(this.company.hiring[i].item_id===2){
        this.company.WebDeveloper=1;
      }

      if(this.company.hiring[i].item_id===3){
        this.company.FullstackDeveloper=1;
      }

      if(this.company.hiring[i].item_id===4){
        this.company.QualityAssurance=1;
      }

      if(this.company.hiring[i].item_id===5){
        this.company.MobileApplication=1;
      }

      if(this.company.hiring[i].item_id===6){
        this.company.BusinessAnalyst=1;
      }

      if(this.company.hiring[i].item_id===7){
        this.company.DataAnalyst=1;
      }

      if(this.company.hiring[i].item_id===8){
        this.company.DevOps=1;
      }
    }

    var formdata :any = new FormData();
    console.log('image',this.company.logo);

    formdata.append('logo', this.company.logo);
    // formdata.append('cname', this.signUpForm.value.cname);
    // console.log("formdata :",JSON.stringify(formdata));

    formdata.forEach((element , key) => {
      console.log(key + " " + element )
    });

    this.isLoading=true;
    this.service.uploadPhoto(formdata).subscribe(responseData =>{
      console.log(responseData);
      if(responseData.status==200){
        const obj=responseData.body['URL'];
        this.company.url=obj;
        this.service.createaccount(this.company).subscribe(responseData =>{
          console.log(responseData.status);
          if(responseData.status==201){
            this.isLoading=false;
            console.log("inside if");
            Swal.fire(
              'Good job!',
              'You are registered!',
              'success'
            )
          }
          else{
            this.isLoading=false;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            })
          }
          console.log(responseData);
          this.signUpForm.reset();
      });
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    });

    console.log(this.company);
  }

  onClear(){
    this.signUpForm.reset();
  }

  upload(event:any){
    console.log(event);
    this.company.logo=event.target.files[0];
  }

  checkValid(event:any){
    if(event.path[0].value != this.signUpForm.value.password){
      this.validPassword=true;
    }
  }

}
