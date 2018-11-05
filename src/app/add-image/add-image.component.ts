import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '../../../node_modules/@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  image: File
  productId: number
  constructor(private imageService: ImageService,private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id')
  }

  onFileSeleceted(event) {
    this.image = event.target.files[0];
  }

  uploadImage() {
    let form = new FormData()
    form.append('image', this.image)
    console.log(this.productId);
    
    this.imageService.uploadImage(form, this.productId).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }
}
