import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from '../services/categorie-service';

@Component({
  selector: 'app-add-categorie',
  imports: [ReactiveFormsModule],
  templateUrl: './addCategorie.html',
  styleUrl: './categorie.css',
})
export class AddCategorie {

  private categorieService = inject(CategorieService);
  private router = inject(Router);

  categorieForm = new FormGroup(
    {
      libelle: new FormControl(''),
    }
  );

  save(){
    console.log(this.categorieForm.value);
    this.categorieService.save(this.categorieForm.value).subscribe(
      value => {
        this.router.navigate(['/categorie']);
      }
    )
  }

}
