import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  url: string;

  constructor(private _http: Http) { 
    this.url = "/product";
  }

  GetProduct() {
    return this._http.get(this.url).map(res => res.json());
  }

  GetProductById(id) {
    let ID = '/' + id;
    return this._http.get(ID).map(res => res.json());
  }

  AddProduct(data) {
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, method: 'post' });
    return this._http.post(this.url, body, options).map(res => res.json());
  }

  UpdateProduct(data) {
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, method: 'post' });
    return this._http.put(this.url, body, options).map(res => res.json());
  }

  DeleteProduct(id) {
    let ID = '/' + id;
    return this._http.delete(ID).map(res => res.json());
  }

}
