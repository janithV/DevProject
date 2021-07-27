import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class BrowseService{

    constructor(private http:HttpClient){}

    getCompanydetails(){
        return this.http.get('http://localhost:3000/company/getcompanies',{
            observe:'response'
        });
    }

}