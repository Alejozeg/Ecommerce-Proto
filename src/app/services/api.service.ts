import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';  // Asegúrate de que la ruta del modelo es correcta
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private appUrl = environment.apiUrl

  constructor() { }

  // Método para obtener la lista de productos desde la API
  list(): Observable<Product[]> {
    return this.http.get<Product[]> (this.appUrl+"/api/products");  // Ajusta la URL de la API
  }
  getProductById(id:any): Observable<Product>{
    return this.http.get<Product> (this.appUrl+"/api/product"+id);
  }
}
