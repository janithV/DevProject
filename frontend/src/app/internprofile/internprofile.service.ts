import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class InternProfileService{

    constructor(private http:HttpClient){}

    getInternDetails(internId:number){
        return this.http.get('http://localhost:3000/intern/getintern/'+internId);
    }

    getRecommendations(internId:number){
        return this.http.get('http://localhost:3000/recommend/'+internId,{
            observe:'response'
        });
    }

    getCompanyDetails(companyID:number){
        return this.http.get('http://localhost:3000/company/getcompany/'+companyID);
    }

}