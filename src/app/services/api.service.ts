import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';  // Reemplaza por la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener productos desde la API
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }

  // Otros métodos según las necesidades de la API...
}
