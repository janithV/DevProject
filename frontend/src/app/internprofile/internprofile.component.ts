import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import { Company } from '../Models/company.model';
import { User } from '../Models/intern.model';
import { InternProfileService } from './internprofile.service';

@Component({
  selector: 'app-internprofile',
  templateUrl: './internprofile.component.html',
  styleUrls: ['./internprofile.component.css']
})
export class InternprofileComponent implements OnInit {

  intern = new User();
  skills: string[] = [];
  isLoading = false;
  internid: number;
  companies: Company[] = [];
  companyResponses: any[] = [];

  constructor(private service: InternProfileService,private router:Router) {

  }

  ngOnInit(): void {
    const jwt = localStorage.getItem('intern-token');
    this.internid = jwtDecode(jwt)['internid'];
    console.log(this.internid);

    this.service.getInternDetails(this.internid).subscribe(responseData => {

      this.intern.fname = responseData[0]['fname'];
      this.intern.lname = responseData[0]['lname'];
      this.intern.email = responseData[0]['email'];
      this.intern.password = responseData[0]['password'];
      this.intern.dob = responseData[0]['dob'];
      this.intern.contact = responseData[0]['contact'];
      this.intern.gender = responseData[0]['gender'];
      this.intern.university = responseData[0]['university'];
      this.intern.degree = responseData[0]['degree'];
      this.intern.specialization = responseData[0]['specialization'];
      this.intern.se = responseData[0]['se'];
      this.intern.fe = responseData[0]['fe'];
      this.intern.be = responseData[0]['be'];
      this.intern.fs = responseData[0]['fs'];
      this.intern.wd = responseData[0]['wd'];
      this.intern.mad = responseData[0]['mad'];

      if (this.intern.se) {
        this.skills.push('Software Development');
      }
      if (this.intern.fe) {
        this.skills.push('Front-End Development');
      }
      if (this.intern.be) {
        this.skills.push('Back-End Development');
      }
      if (this.intern.fs) {
        this.skills.push('Fullstack Development');
      }
      if (this.intern.wd) {
        this.skills.push('Web Development');
      }
      if (this.intern.mad) {
        this.skills.push('Mobile Application Development');
      }



    });

    console.log(this.intern);


  }

  homeClicked: boolean = true;
  recommendationsClicked: boolean = false;
  settingClicked: boolean = false;

  onHomeClick() {
    this.homeClicked = true;
    this.recommendationsClicked = false;
    this.settingClicked = false;
  }

  onSignoutClick(){
    localStorage.removeItem('intern-token');
    this.router.navigate(['/']);

  }

  onRecommendationsClick() {

    this.isLoading = true;
    this.homeClicked = false;
    this.recommendationsClicked = true;
    this.settingClicked = false;
    this.service.getRecommendations(this.internid).subscribe(resposeData => {
      // console.log(resposeData.body);
      this.isLoading = false;
      this.companyResponses = <any>resposeData.body;
      console.log("responses",this.companyResponses);
      // console.log("1st",resposeData[0]['companyid'])

      for (let i = 0; i < this.companyResponses.length; i++) {
        const company = new Company();

        company.id = this.companyResponses[i]['companyid'];
        company.cname = this.companyResponses[i]['name'];
        company.logo = this.companyResponses[i]['logo'];
        company.about = this.companyResponses[i]['about'];
        company.fb = this.companyResponses[i]['fb'];
        company.twitter = this.companyResponses[i]['twitter'];
        company.linkedin = this.companyResponses[i]['linkedin'];
        company.email = this.companyResponses[i]['email'];

        this.companies.push(company);
      }
      // if(resposeData.status==200){
      //   this.companyidlist=resposeData.body['users'];

      //   setTimeout(()=>{
      //     for(let i=0;i<this.companyidlist.length;i++){

      //       setTimeout(()=>{
      //         this.service.getCompanyDetails(this.companyidlist[i]).subscribe(resposeData =>{
      //           const company = new Company();

      //           company.id=resposeData[0]['companyid'];
      //           company.cname=resposeData[0]['name'];
      //           company.logo=resposeData[0]['logo'];
      //           company.about=resposeData[0]['about'];
      //           company.fb=resposeData[0]['fb'];
      //           company.twitter=resposeData[0]['twitter'];
      //           company.linkedin=resposeData[0]['linkedin'];
      //           company.email=resposeData[0]['email'];

      //           this.companies.push(company);
      //         });
      //       },1000);
      //     }
      //   },1000);

      //   console.log(this.companies);
      //   this.isLoading=false;
      // }
      // else{
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Oops...',
      //     text: 'Something went wrong!'
      //   })
      // }
    });
  }

  onSettingsClick() {
    this.homeClicked = false;
    this.recommendationsClicked = false;
    this.settingClicked = true;
  }

}
