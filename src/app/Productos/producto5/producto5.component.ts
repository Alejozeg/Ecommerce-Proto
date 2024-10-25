import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { CarritoComponent } from '../../carrito/carrito.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto5',
  standalone: true,
  imports: [CarritoComponent,CommonModule],
  templateUrl: './producto5.component.html',
  styleUrl: './producto5.component.css'
})
export class Producto5Component {
  id: string | null = null;
  data: Product={
    _id:'',
    name: '',
  price: 0,
  descripcion: '',
  images:[],  // Aquí cambias "imagenes" por "images"
  category: '',
  size: '',
  brand: '',
  sku: '',
  stock: '',

  }
  cartsProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private obtainProduct: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id'); // Extraer el 'id' de la URL
      console.log(this.id);
    });
    this.getProduct()
    const storedCart = localStorage.getItem('producto');
    if (storedCart) {
      this.cartsProducts = JSON.parse(storedCart);  // Restaura el carrito desde el localStorage
    }
  }
  getProduct(){
    this.obtainProduct.getProductById(this.id).subscribe((data)=> {
      this.data = data
      console.log(this.data)
    })
  }
  @Input() producto!: Product;
  // Método para añadir el producto al carrito
// addToCart(product: Product) {

//   localStorage.setItem("hola", "maicol");

// }
// / Método para añadir productos al carrito
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