import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { User } from "../Models/intern.model";

@Injectable({providedIn : 'root'})
export class SignUpService {

    constructor(private http :HttpClient){}

    createaccount(user :User){
        return this.http.post('http://localhost:3000/intern/addintern',user,{
            observe:'response'
        })
    }

    // getData(){
    //    return this.http.get('')
    //     .pipe(
    //       map(responseData => {
    //         //map jason to js objects array.push({...responseData[key],id:key}) MIGHT BE DIFFERENT FROM SQL 
    //         return //the array
    //       })
    //     );
    }
