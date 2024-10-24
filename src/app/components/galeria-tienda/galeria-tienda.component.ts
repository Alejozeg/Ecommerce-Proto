import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/api.service';  // Asegúrate de importar el servicio correctamente
import { Product } from '../../models/product.model';  // Ajusta la ruta del modelo

@Component({
  selector: 'app-galeria-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-tienda.component.html',
  styleUrls: ['./galeria-tienda.component.css'],
})
export class GaleriaTiendaComponent {

  // Signal para almacenar los productos
  productos = signal<Product[]>([]);
  ProductosPorMostrar = signal<Product[]>([]);  // Para los productos filtrados

  private productService = inject(ProductService);  // Inyectar el servicio de productos

  ngOnInit() {
    this.productService.list().subscribe({
      next: (response: Product[]) => {
        console.log(response);  // Verifica si los productos se están recibiendo
        this.productos.set(response);
        this.ProductosPorMostrar.set(response);  // Mostrar inicialmente todos los productos
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);  // Manejar errores
      }
    });
  }

  filtrarPorCategoria(category: string) {
    const filtrado = this.productos().filter(producto => producto.category === category);
    this.ProductosPorMostrar.set(filtrado);  // Actualizar los productos filtrados
  }

  // Método para añadir productos al carrito
  addToCart(producto: Product) {
    console.log('Producto añadido al carrito:', producto);
    // Aquí puedes implementar la lógica de añadir al carrito
  }
}
