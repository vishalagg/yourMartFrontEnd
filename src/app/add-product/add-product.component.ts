import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';
import { Validators, FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  productForm: FormGroup

  constructor(private formBuilder: FormBuilder, private productService: ProductService,
    private router: Router) {
    this.productForm = this.formBuilder.group({
      code: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      shortDescription: ['', Validators.compose([Validators.required])],
      longDescription: ['', Validators.compose([Validators.required])],
      dimensions: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      mrp: ['', Validators.compose([Validators.required])],
      ssp: ['', Validators.compose([Validators.required])],
      ymp: ['', Validators.compose([Validators.required])],
      instruction: ['', Validators.compose([Validators.required])],
      attributes: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  saveProduct() {
    if(this.productForm.valid) {
      console.log(this.productForm.value);
      
      this.productService.addProduct(this.productForm.value,10).subscribe((response : any) => {
        this.router.navigate(['/product/image'])
        
      },(error) => {
        console.log(error);
        
      })
    }
  }

}
