import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(' http://localhost:3000/product');
  }
  getOneProduct(id: number | string): Observable<any> {
    return this.http.get(`http://localhost:3000/product/${id}`)
  }
  addProduct(product: IProduct): Observable<any> {
    return this.http.post('http://localhost:3000/product', product)
  }
  updateProduct(product: IProduct): Observable<any> {
    return this.http.put(`http://localhost:3000/product/${product.id}`, product)
  }
  deleteProduct(id: number | string): Observable<any> {
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }
}
