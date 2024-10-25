export interface Product {
  _id: number;
  name: string;
  price: number;
  descripcion: string;
  images: string[];  // Galería de imágenes del producto
  imagenDestacada: string;  // Imagen destacada del producto
  titulo: string;  // Título del producto
  opciones: string[];  // Opciones del producto (colores, tallas, etc.)
  recomendados: string[];  // Productos recomendados (imágenes)
  genero: string;
  category: string;
  quantity?: number;  // Agregar la propiedad quantity
}
