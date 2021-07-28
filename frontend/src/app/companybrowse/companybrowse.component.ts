import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import { Company } from '../Models/company.model';
import { CompanyBrowseService } from './companybrowse.service';

@Component({
  selector: 'app-companybrowse',
  templateUrl: './companybrowse.component.html',
  styleUrls: ['./companybrowse.component.css']
})
export class CompanybrowseComponent implements OnInit {

  companyid:number;
  company = new Company();
  hiring:string[]=[];
  rating:number;
  isLoggedIn:boolean=false;
  token:any;
  @ViewChild('form') reviewForm:NgForm;
  constructor(private router:ActivatedRoute,private service:CompanyBrowseService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('intern-token');
    if(this.token !=null){
      this.isLoggedIn=true;
    }
    this.companyid=this.router.snapshot.params['id']

    this.service.getCompanyDetails(this.companyid).subscribe(responseData =>{
      console.log(responseData);

      this.company.about=responseData.body[0]['about'];
      this.company.BusinessAnalyst=responseData.body[0]['ba'];
      this.company.DataAnalyst=responseData.body[0]['da'];
      this.company.DevOps=responseData.body[0]['devops'];
      this.company.email=responseData.body[0]['email'];
      this.company.fb=responseData.body[0]['fb'];
      this.company.FullstackDeveloper=responseData.body[0]['fsdev'];
      this.company.linkedin=responseData.body[0]['linkedin'];
      this.company.url=responseData.body[0]['logo'];
      this.company.MobileApplication=responseData.body[0]['maddev'];
      this.company.cname=responseData.body[0]['name'];
      this.company.password=responseData.body[0]['password'];
      this.company.QualityAssurance=responseData.body[0]['qa'];
      this.company.SoftwareEngineer=responseData.body[0]['se'];
      this.company.twitter=responseData.body[0]['twitter'];
      this.company.WebDeveloper=responseData.body[0]['webdev'];

      if(this.company.BusinessAnalyst){
        this.hiring.push('Business Analyst');
      }
      if(this.company.DataAnalyst){
        this.hiring.push('Data Analyst');
      }
      if(this.company.DevOps){
        this.hiring.push('DevOps');
      }
      if(this.company.FullstackDeveloper){
        this.hiring.push('Full Stack Developer');
      }
      if(this.company.MobileApplication){
        this.hiring.push('Mobile Application Developer');
      }
      if(this.company.QualityAssurance){
        this.hiring.push('Quality Assurance');
      }
      if(this.company.SoftwareEngineer){
        this.hiring.push('Software Engineer');
      }
      if(this.company.WebDeveloper){
        this.hiring.push('Web Developer');
      }

      console.log(this.hiring);
    });

    this.service.getReviews(this.companyid).subscribe(responseData=>{
      if(responseData.status==200){

      }
      if(responseData.status==204){

      }
    });

  }

  addReview(){
    if(this.isLoggedIn){
      const jwt = localStorage.getItem('intern-token');
      const internid=jwtDecode(jwt)['internid'];
      console.log(internid);
      const message = this.reviewForm.value.review;
  
      if(this.reviewForm.value.rate=="1"){
        this.rating=1;
      }
      if(this.reviewForm.value.rate2=="2"){
        this.rating=2;
      }
      if(this.reviewForm.value.rate3=="3"){
        this.rating=3;
      }
      if(this.reviewForm.value.rate4=="4"){
        this.rating=4;
      }
      if(this.reviewForm.value.rate5=="5"){
        this.rating=5;
      }
  
      this.service.postReview(this.companyid,internid,message,this.rating).subscribe(responseData=>{
        if(responseData.status==200){
          Swal.fire(
            'Thank you!',
            'Your Review was recceived!',
            'success'
          )
        }
      });
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'NOT LOGGED IN!',
        text: 'Please log in to post review!'
      })
    }

    
  }

}
