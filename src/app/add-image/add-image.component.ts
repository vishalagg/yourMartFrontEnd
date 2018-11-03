import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '../../../node_modules/@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  image : any
  imageForm : FormGroup
  selectedFile: File

  constructor(private formBuilder: FormBuilder,private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.imageForm = this.formBuilder.group({
      image: ['', Validators.compose([Validators.required])]
    })
  }

  saveImage() {
    console.log(this.imageForm.value);
    if(this.imageForm.valid) {
      console.log(this.imageForm.value);
      let fd = new FormData();
      fd.append('image',this.selectedFile)
      console.log(fd.get("image"));
      console.log(fd.getAll('image'));

    //   for (let value of fd.values()) {
    //     console.log(value);
    //  }
      
      // this.productService.addImage(fd,12).subscribe((response : any) => {
      //   // this.router.navigate(['/product/image'])
      //   console.log(response);
        
      // },(error) => {
      //   console.log(error);
        
      // })
    }   
  }
  
  onFileChange(event) {
    let file = event.target.files[0]
    this.selectedFile = <File>file
  }
}
