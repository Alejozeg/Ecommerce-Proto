import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';  // Asegúrate de importar CurrencyPipe
import { Product } from '../../models/product.model';  // Ajusta la ruta de tu modelo

@Component({
  selector: 'app-detalleproducto',
  standalone: true,  // Si es standalone
  imports: [CommonModule, CurrencyPipe],  // Asegúrate de incluir CurrencyPipe en los imports
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent {
  @Input() producto!: Product;
  // Método para añadir el producto al carrito
addToCart(product: Product) {

  localStorage.setItem("hola", "maicol");

}
  // Método para cerrar la vista de detalle del producto
  cerrar() {
    // Lógica para cerrar la vista del producto
    console.log('Cerrando vista del producto');
  }
}
