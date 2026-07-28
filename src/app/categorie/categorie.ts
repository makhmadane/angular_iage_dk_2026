import { Component, inject, signal } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product-service';
import { CategorieModel } from '../models/categorie-model';
import { CategorieService } from '../services/categorie-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorie',
  imports: [RouterLink],
  templateUrl: './categorie.html',
  styleUrl: './categorie.css',
})
export class Categorie {
  tabCat = signal<CategorieModel[]>([]);

  //Injection
  /*public constructor(public http: HttpClient ) {

  }*/

  private categorieService = inject(CategorieService);

  //constructeur
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categorieService.getAll().subscribe((res) => {
      this.tabCat.set(res);
    });
  }

  delete(id: number): void {
    this.categorieService.delete(id).subscribe((res) => {
      this.getAll();
    });
  }
}
