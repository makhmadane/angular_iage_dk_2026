import { APP_ID, inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';

@Service()
export class ProductService {
  API_URL = "http://localhost:8000/api/products";

  private http = inject(HttpClient);


  getAll(){
    return   this.http.get<ProductModel[]>(this.API_URL);
  }

  delete(id : number) {
    return this.http.delete(this.API_URL+"/"+id);
  }

  save(product : any) {
    return this.http.post(this.API_URL, product);
  }

}
