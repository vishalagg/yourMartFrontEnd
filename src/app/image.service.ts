import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  baseUrl: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  

  uploadImage(image,productId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'authentication' : localStorage.getItem('token')
      })
    };
    const requestUrl = `${this.baseUrl}/product/${productId}/image`
    return this.http.post(requestUrl,image,httpOptions)
  }

  getProductImages(productId) {
    const requestUrl = `${this.baseUrl}/product/${productId}/image`
    return this.http.get(requestUrl);
  }
}
