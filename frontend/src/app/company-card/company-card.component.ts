import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '../Models/company.model';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit {

  @Input() companies:Company;
  @Input() id:number;
  @Output() cardClicked = new EventEmitter<{companyId:number}>();
  link:string;

  companyid:number;

  constructor() { }

  ngOnInit(): void {
    this.link="/view/"+this.id;
  }

  onCardClick(){
    this.cardClicked.emit({
      companyId:this.companyid
    })
  }

}
