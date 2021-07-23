export class intern{
    constructor(public id:string, private _token:any,private _tokenExpirationDate:Date){}
    
    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return this._token;
        }
        
    }
}