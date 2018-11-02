import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any
  constructor(private productService : ProductService) {
   }

  ngOnInit() {
    this.productService.getProducts().subscribe( products => {
      this.products = products
    })
  }

  getProducts() {

  }

}
