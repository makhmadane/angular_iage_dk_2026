import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './addProduct.html',
  styleUrl: './product.css',
})
export class AddProduct {

  private productService = inject(ProductService);
  private router = inject(Router);

  productForm = new FormGroup(
    {
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',),
      prixe: new FormControl('',[Validators.required]),
    }
  );

  save(){
    if(this.productForm.valid){
      console.log(this.productForm.value);
      this.productService.save(this.productForm.value).subscribe(
        value => {
          this.router.navigate(['/product']);
        }
      )
    }

  }

}
