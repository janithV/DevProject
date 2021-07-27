import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CompanyProfileService{

    constructor(private http:HttpClient){}

    getCompanyDetails(companyId:number){
        return this.http.get('http://localhost:3000/company/getcompany/'+companyId);
    }

}