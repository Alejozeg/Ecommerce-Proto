import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/api.service';  // Asegúrate de importar el servicio correctamente
import { Product } from '../../models/product.model';  // Ajusta la ruta del modelo
import { CarritoComponent } from '../../carrito/carrito.component';  // Importa el componente Carrito
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria-tienda',
  standalone: true,
  imports: [CommonModule, CarritoComponent],  // Incluye el componente Carrito
  templateUrl: './galeria-tienda.component.html',
  styleUrls: ['./galeria-tienda.component.css'],
})
export class GaleriaTiendaComponent {

  productos = signal<Product[]>([]);
  ProductosPorMostrar = signal<Product[]>([]);  // Para los productos filtrados
  cartsProducts: Product[] = [];

  private productService = inject(ProductService);  // Inyectar el servicio de productos
  private router = inject(Router)
  ngOnInit() {
    const storedCart = localStorage.getItem('producto');
    if (storedCart) {
      this.cartsProducts = JSON.parse(storedCart);  // Restaura el carrito desde el localStorage
    }

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

  DetailProduct(id:any){
    this.router.navigate(["product/" + id])
  }

  // Método para añadir productos al carrito
  addToCart(producto: Product) {
    const productoExistente = this.cartsProducts.find(item => item._id === producto._id);

    if (productoExistente) {
      productoExistente.quantity! += 1;  // Incrementa la cantidad si el producto ya está en el carrito
    } else {
      producto.quantity = 1;  // Inicializa la cantidad si es un nuevo producto
      this.cartsProducts.push(producto);
    }

    localStorage.setItem('producto', JSON.stringify(this.cartsProducts));
  }
}
