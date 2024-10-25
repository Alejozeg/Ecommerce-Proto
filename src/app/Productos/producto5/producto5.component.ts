import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-producto5',
  standalone: true,
  imports: [],
  templateUrl: './producto5.component.html',
  styleUrl: './producto5.component.css'
})
export class Producto5Component {
  id: string | null = null;
  data: Product={
    _id:'',
    name: '',
  price: 0,
  description: '',
  images:[],  // Aquí cambias "imagenes" por "images"
  category: '',
  size: '',
  brand: '',
  sku: '',
  stock: '',

  }
  constructor(private route: ActivatedRoute, private obtainProduct: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id'); // Extraer el 'id' de la URL
      console.log(this.id); 
    });
    this.getProduct()
  }
  getProduct(){
    this.obtainProduct.getProductById(this.id).subscribe((data)=> {
      this.data = data
      console.log(this.data)
    })
  }
}
