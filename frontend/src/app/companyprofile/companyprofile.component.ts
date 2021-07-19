import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homeClicked :boolean=true;
  recommendationsClicked:boolean=false;
  settingClicked:boolean=false;

    onHomeClick(){
    this.homeClicked=true;
    this.recommendationsClicked=false;
    this.settingClicked=false;
  }

  onRecommendationsClick(){
    this.homeClicked=false;
    this.recommendationsClicked=true;
    this.settingClicked=false;
  }

  onSettingsClick(){
    this.homeClicked=false;
    this.recommendationsClicked=false;
    this.settingClicked=true;
  }

}
