import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';  // Asegúrate de que la ruta del modelo es correcta

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() { }

  // Método para obtener la lista de productos desde la API
  list(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/api/products");  // Ajusta la URL de la API
  }
}
