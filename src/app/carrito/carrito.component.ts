import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';  // Importa el CommonModule


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  @Input() cartsProducts: Product[] = [];

  getTotal(): number {
    return this.cartsProducts.reduce((total, producto) => total + (producto.price * producto.quantity!), 0);
  }

  finalizarCompra() {
    console.log('Compra finalizada');
  }
}
