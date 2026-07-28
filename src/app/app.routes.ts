import { Routes } from '@angular/router';
import { Product } from './product/product';
import { AddProduct } from './product/Addproduct';
import { Categorie } from './categorie/categorie';
import { AddCategorie } from './categorie/AddCategorie';

export const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'},

  {path : "product", component: Product},
  {path: "addProduct", component: AddProduct},

  {path : "categorie", component: Categorie},
  {path : "addCategorie", component: AddCategorie}
];
