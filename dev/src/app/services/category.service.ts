import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  
  url:string = "/api/category";

  constructor(private _http:Http) { }

  createCategory(data:any){
    let body = JSON.stringify(data);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers, method:'post'});
    return this._http.post(this.url, body, options).map(res => res.json());
  }

}
