import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';
import { CategorieModel } from '../models/categorie-model';

@Service()
export class CategorieService {
  API_URL = `http://localhost:8000/api/categorie`;
  private http = inject(HttpClient);


  getAll(){
    return   this.http.get<CategorieModel[]>(this.API_URL);
  }

  delete(id : number) {
    return this.http.delete(this.API_URL+"/"+id);
  }

  save(categorie : any) {
    return this.http.post(this.API_URL, categorie);
  }
}
