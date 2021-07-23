import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Company } from "../Models/company.model";

@Injectable({providedIn : 'root'})
export class CompanyService {

    constructor(private http:HttpClient){}
    
    createaccount(user :Company){
        return this.http.post('http://localhost:3000/company/addcompany',user,{
            observe:'response'
        })
    }


    uploadPhoto(formdata: any){
        return this.http.post('http://localhost:3000/company/upload',formdata,{
            observe: 'response'
        })
}

}