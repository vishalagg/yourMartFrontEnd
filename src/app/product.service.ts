import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getProducts(searchKey:String=null,searchQuery:String=null) {
    let url : string = this.url + "/product"
    if(searchKey && searchQuery) {
      url += `?searchKey=${searchKey}&searchQuery=${searchQuery}`
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'authentication' : localStorage.getItem('token'),
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url,httpOptions)
  }

  addProduct(product : any,sellerId : string) {
    let url : string = this.url + "/product"
    let category = product.category
    product.seller = {
      id : sellerId
    }
    product.category = {
      id : category
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'authentication' : localStorage.getItem('token'),
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(url,product,httpOptions)
  }

  getProductById(productId) {
    const url = this.url + "/product/"+productId;

    const httpOptions = {
      headers: new HttpHeaders({
        'authentication' : localStorage.getItem('token'),
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url,httpOptions)

  }

  getCategories() {
    let url = this.url + "/category"
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url,httpOptions)
  }
}
