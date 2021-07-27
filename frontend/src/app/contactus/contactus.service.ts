import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class ContactUsService{

    constructor(private http: HttpClient){}

    emailService(email:string,fname:string,lname:string,subject:string,message:string){
        const obj={
            "email":email,
            "fname":fname,
            "lname":lname,
            "subject":subject,
            "message":message
        }
        return this.http.post('http://localhost:3000/contact',obj,{
            observe:'response'
        });

    }
}