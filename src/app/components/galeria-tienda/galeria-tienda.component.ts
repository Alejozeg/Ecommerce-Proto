import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para usar *ngFor
import { DetalleproductoComponent } from '../detalleproducto/detalleproducto.component';

@Component({
  selector: 'app-galeria-tienda',
  standalone: true,
  imports: [CommonModule,DetalleproductoComponent],  // Asegúrate de importar CommonModule
  templateUrl: './galeria-tienda.component.html',
  styleUrls: ['./galeria-tienda.component.css'],
})
export class GaleriaTiendaComponent {
  
  // // productos tarjetas
  // producto1

  productos = [
    {
      name: 'camisa de verano',
      size: 'M',
      genero: 'Hombre',
      stock: '100 Uunidades',
      price: '200000',
      category: 'sacos',
      brand: 'Nike',
      sku: 'saco-pluma-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-1.png',
    },
    // producto2

    {
      name: 'camisa de Nieve Suave',
      size: 'S',
      genero: 'Hombre',
      stock: '200 unidades',
      price: '300000',
      category: 'camisas',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-2.png',
    },
    // producto3

    {
      name: 'camisa Brisa Marina',
      size: 'L',
      genero: 'Hombre',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-3.png',
    },
    // producto4
    {
      name: 'camisa Refugio Invernal',
      size: 'L',
      Genero: 'Hombre',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-4.png',
    },

    // producto5

    {
      name: 'camisa Rayos de Sol',
      size: 'L',
      genero: 'Hombre',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-5.png',
    },

    // producto6

    {
      name: 'camisa Olas',
      size: 'L',
      genero: 'Hombre',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-4.png',
    },
    // producto7

    {
      name: 'camisa  Palmeras',
      size: 'L',
      genero: 'Mujer',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-5.png',
    },
    // producto8

    {
      name: 'camisa nieve astral',
      size: 'L',
      genero: 'Mujer',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-6.png'
    },
    // producto9

    {
      name: 'camisa verano fuego',
      size: 'L',
      genero: 'Mujer',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-7.png',
    },

    // producto10

    {
      name: 'camisa solticio verano',
      size: 'L',
      genero: 'Mujer',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-8.png',
    },
    // producto11

    {
      name: 'camisa primavera flores',
      size: 'L',
      genero: 'Mujer',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-9.png',
    },
    // producto12

    {
      name: 'camisa verano frio',
      size: 'L',
      genero: 'Mujer',
      stock: '200 unidades',
      price: '300000',
      category: 'camisa',
      brand: 'Adidas',
      sku: 'camisa-nike',
      picture:
        'https://www.biowebcolsacor.online/wp-content/uploads/2024/10/Rectangle-4-10.png',
    },
    
  ];
  ProductosPorMostrar:any []= [] 
  ngOnInit(){
    this.ProductosPorMostrar=this.productos
  }

  filtrarPorCategoria (category:string){ 
 
    const filtrado = this.productos.filter(producto =>producto.genero === category)
this.ProductosPorMostrar = filtrado

    //  console.log(filtrado)

  }
}
