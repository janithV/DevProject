import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Subject } from "rxjs";
import { intern } from "./Models/intern-auth.model";
import { tap } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class AuthService{

    intern = new Subject<intern>()

    constructor(private http:HttpClient){}

    // loggedIn=true;

    // isAuthenticatd(){
    //     const promise = new Promise(
    //         (resolve,reject) =>{
    //             setTimeout(() =>{
    //                 resolve(this.loggedIn);
    //             },800);
    //         }
    //     );
    //     return promise;
    // }

    companyLogin(email:string, password:string){
        return this.http.post('http://localhost:3000/auth/company-login',{
            email:email,
            password:password
        });
       
    }

    internLogin(email:string, password:string){
        return this.http.post('http://localhost:3000/auth/intern-login',{
            email:email,
            password:password
        },{
            observe:'response'
        });
       
    }

    logout(){
       
    }

}