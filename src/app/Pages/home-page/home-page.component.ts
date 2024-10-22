import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { Product } from './ProductInterface';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardsComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'], // Corrección aquí
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        title: 'Camisa Casual',
        price: 29.99,
        image: 'https://picsum.photos/640/640?random=1'
      },
      {
        id: 2,
        title: 'Vestido Elegante',
        price: 49.99,
        image: 'https://picsum.photos/640/640?random=2'
      },
      {
        id: 3,
        title: 'Hoodie Unisex',
        price: 39.99,
        image: 'https://picsum.photos/640/640?random=3'
      },
      {
        id: 4,
        title: 'Zapatillas Deportivas',
        price: 59.99,
        image: 'https://picsum.photos/640/640?random=4'
      }
    ];
  }
}
