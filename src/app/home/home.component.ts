import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any
  dropdownHeading : string = 'name'
  constructor(private productService : ProductService) {
   }

  ngOnInit() {
    this.productService.getProducts().subscribe( products => {
      this.products = products
    })
  }

  searchProducts(searchQuery) {
    console.log(searchQuery);
    this.productService.getProducts(this.dropdownHeading,searchQuery).subscribe( products => {
      this.products = products
    })
    
  }

  setSearchKey(key) {
    this.dropdownHeading = key
  }
  

}
