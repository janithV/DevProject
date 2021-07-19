import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {

  constructor(private router:Router) { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};


  ngOnInit(){
    this.dropdownList = [
      { item_id: 1, item_text: 'Software Engineer' },
      { item_id: 2, item_text: 'Web Developer' },
      { item_id: 3, item_text: 'Fullstack Developer' },
      { item_id: 4, item_text: 'Quality Assurance' },
      { item_id: 5, item_text: 'Mobile Application developer' },
      { item_id: 5, item_text: 'Business Analyst' },
      { item_id: 5, item_text: 'Data Analyst' },
      { item_id: 5, item_text: 'DevOps' }
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

}
