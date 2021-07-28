import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CompanyBrowseService{

    constructor(private http:HttpClient){}

    getCompanyDetails(companyId:number){
        return this.http.get('http://localhost:3000/company/getcompany/'+companyId,
        {
            observe:'response'
        })

    }

    getReviews(companyId:number){
        return this.http.get('http://localhost:3000/review/getratings/'+companyId,
        {
            observe:'response'
        })

    }



    postReview(companyid:number,internid:number,review:string,rating:number){

        const reviewObj ={
            "companyid":companyid,
            "internid":internid,
            "review":review,
            "rating":rating
        }

        return this.http.post('http://localhost:3000/review/addreview',reviewObj,
        {
            observe:'response'
        });
    }

}