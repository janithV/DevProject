import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Company } from '../Models/company.model';
import { CompanyProfileService } from './company-profile.service';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {

  company = new Company();
  hiring:string[]=[];

  constructor(private service:CompanyProfileService) { }

  ngOnInit(): void {
    const jwt = localStorage.getItem('company-token');
    const companyid=jwtDecode(jwt)['companyid'];
    console.log(companyid);

    this.service.getCompanyDetails(companyid).subscribe(responseData =>{
      console.log(responseData[0]);

      this.company.about=responseData[0]['about'];
      this.company.BusinessAnalyst=responseData[0]['ba'];
      this.company.DataAnalyst=responseData[0]['da'];
      this.company.DevOps=responseData[0]['devops'];
      this.company.email=responseData[0]['email'];
      this.company.fb=responseData[0]['fb'];
      this.company.FullstackDeveloper=responseData[0]['fsdev'];
      this.company.linkedin=responseData[0]['linkedin'];
      this.company.logo=responseData[0]['logo'];
      this.company.MobileApplication=responseData[0]['maddev'];
      this.company.cname=responseData[0]['name'];
      this.company.password=responseData[0]['password'];
      this.company.QualityAssurance=responseData[0]['qa'];
      this.company.SoftwareEngineer=responseData[0]['se'];
      this.company.twitter=responseData[0]['twitter'];
      this.company.WebDeveloper=responseData[0]['webdev'];

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

  }

  homeClicked :boolean=true;
  applicationsClicked:boolean=false;
  settingClicked:boolean=false;

    onHomeClick(){
    this.homeClicked=true;
    this.applicationsClicked=false;
    this.settingClicked=false;
  }

  onApplications(){
    this.homeClicked=false;
    this.applicationsClicked=true;
    this.settingClicked=false;
  }

  onSettingsClick(){
    this.homeClicked=false;
    this.applicationsClicked=false;
    this.settingClicked=true;
  }

  onGenerateClick(){

  }

}
