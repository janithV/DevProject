import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internprofile',
  templateUrl: './internprofile.component.html',
  styleUrls: ['./internprofile.component.css']
})
export class InternprofileComponent implements OnInit {



  constructor() {
   
  }

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
