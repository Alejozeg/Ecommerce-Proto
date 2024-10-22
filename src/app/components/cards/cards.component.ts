import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para usar *ngFor

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  imports: [CommonModule]  // Asegúrate de que CommonModule esté en la propiedad 'imports'
})
export class CardsComponent {
  products = [
    { title: 'Camisa Casual', price: 29.99, image: 'https://picsum.photos/640/640?random=1' },
    { title: 'Vestido Elegante', price: 49.99, image: 'https://picsum.photos/640/640?random=2' },
    { title: 'Hoodie Unisex', price: 39.99, image: 'https://picsum.photos/640/640?random=3' },
    { title: 'Zapatillas Deportivas', price: 59.99, image: 'https://picsum.photos/640/640?random=4' }
  ];
}
