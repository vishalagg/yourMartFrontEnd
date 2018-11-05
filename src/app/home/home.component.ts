import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any
  dropdownHeading : string = 'name'
  token : string 
  constructor(private productService : ProductService,
              private userService : UserService) {
   }

  ngOnInit() {
    // this.userService.currentToken.subscribe((token) => {
    //   this.token = token
    // })`
    this.token = localStorage.getItem('token')

    this.productService.getProducts().subscribe( products => {
      this.products = products
    })
  }

  searchProducts(searchQuery) {
    this.productService.getProducts(this.dropdownHeading,searchQuery).subscribe( products => {
      this.products = products
    })
    
  }

  setSearchKey(key) {
    this.dropdownHeading = key
  }
  

}
