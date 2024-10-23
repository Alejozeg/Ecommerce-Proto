import { Component, OnInit,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';  // Importa el servicio de API

@Component({
  selector: 'app-galeria-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-tienda.component.html',
  styleUrls: ['./galeria-tienda.component.css'],
})
export class GaleriaTiendaComponent implements OnInit {
  productos = signal([]);  // Inicializamos el array de productos vacío

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProductsFromApi();  // Llamamos al método para obtener los productos al cargar el componente
  }

  // Método para obtener productos desde la API
  getProductsFromApi(): void {
    this.apiService.getProducts().subscribe(
      (data) => {
        console.log (data,"data------------")
        this.productos.set(data);  // Asignamos los productos obtenidos al array
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }
}
