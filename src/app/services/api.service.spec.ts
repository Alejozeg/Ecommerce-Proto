import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './api.service';
import { environment } from '../../environments/environment';

// Modelo de producto simulado con casting
const mockProducts = [
  {
    _id: '1',
    name: 'Product 1',
    price: 10,
    descripcion: 'Description 1',
    images: ['image1.jpg'],
    category: 'Category 1',
    stock: 5,
    size: 'M',
    brand: 'Brand 1',
    sku: 'SKU123',
  } as unknown as any,
  {
    _id: '2',
    name: 'Product 2',
    price: 20,
    descripcion: 'Description 2',
    images: ['image2.jpg'],
    category: 'Category 2',
    stock: 10,
    size: 'L',
    brand: 'Brand 2',
    sku: 'SKU456',
  } as unknown as any,
];

const mockProduct = {
  _id: '1',
  name: 'Product 1',
  price: 10,
  descripcion: 'Description 1',
  images: ['image1.jpg'],
  category: 'Category 1',
  stock: 5,
  size: 'M',
  brand: 'Brand 1',
  sku: 'SKU123',
} as unknown as any;

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the list of products', () => {
    service.list().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(`${apiUrl}/api/products`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should retrieve a product by ID', () => {
    service.getProductById('1').subscribe((product) => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/api/product1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);
  });

  it('should handle errors when retrieving the product list', () => {
    const mockError = { status: 404, statusText: 'Not Found' };

    service.list().subscribe(
      () => fail('should have failed with 404 error'),
      (error) => {
        expect(error.status).toBe(404);
        expect(error.statusText).toBe('Not Found');
      }
    );

    const req = httpMock.expectOne(`${apiUrl}/api/products`);
    req.flush(null, mockError);
  });

  it('should handle errors when retrieving a product by ID', () => {
    const mockError = { status: 404, statusText: 'Not Found' };

    service.getProductById('1').subscribe(
      () => fail('should have failed with 404 error'),
      (error) => {
        expect(error.status).toBe(404);
        expect(error.statusText).toBe('Not Found');
      }
    );

    const req = httpMock.expectOne(`${apiUrl}/api/product1`);
    req.flush(null, mockError);
  });
});
