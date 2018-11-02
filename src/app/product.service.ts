import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getProducts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'authentication' : localStorage.getItem('token'),
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url+"/product",httpOptions)
  }
}
