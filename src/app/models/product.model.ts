export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: string[];  // Aquí cambias "imagenes" por "images"
  category: string;
  size: string;
  brand: string;
  sku: string;
  stock: string;
}
