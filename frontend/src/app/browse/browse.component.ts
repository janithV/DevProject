import { Component, OnInit } from '@angular/core';
import { Company } from '../Models/company.model';
import { BrowseService } from './browse.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private service:BrowseService) { }

  companies: Company[] = [];
  companyResponses: any[] = [];

  ngOnInit(): void {

    this.service.getCompanydetails().subscribe(ResponseData =>{
      console.log(ResponseData.body)
      this.companyResponses=<any>ResponseData.body;
      
      for (let i = 0; i < this.companyResponses.length; i++) {
        const company = new Company();

        company.id = this.companyResponses[i]['companyid'];
        company.cname = this.companyResponses[i]['name'];
        company.url = this.companyResponses[i]['logo'];
        company.about = this.companyResponses[i]['about'];
        company.fb = this.companyResponses[i]['fb'];
        company.twitter = this.companyResponses[i]['twitter'];
        company.linkedin = this.companyResponses[i]['linkedin'];
        company.email = this.companyResponses[i]['email'];

        this.companies.push(company);
      }
    });

  }

  onCardClick(event){
    console.log("this is from browse:",event)
  }

}
