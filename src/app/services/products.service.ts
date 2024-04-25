import { HttpClient} from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getCartItems(): any {
    throw new Error('Method not implemented.');
  }
  localStorage: any;

  constructor(private http:HttpClient) { }

  addproduct(data: product){
   return this.http.post('http://localhost:3000/products', data)
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteProduct(id:any){
    return this.http.delete(`http://localhost:3000/products/${id}`)
 }
 getProduct(id: any){
  return this.http.get<product>(`http://localhost:3000/products/${id}`)
 }
 updateProduct(product: product){
  return this.http.put(`http://localhost:3000/products/${product.id}`, product)
 }
 featuredProducts(){
  return this.http.get<product[]>('http://localhost:3000/products');
}

getCartItemsFromLocalStorage(): product[] {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
}

updateCartInLocalStorage(cartItems: product[]): void {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

localAddToCart(data: product){
  let  localData= [];
  let cart= localStorage.getItem('cart');
  if(!cart){
    localStorage.setItem('cart', JSON.stringify([data]));
  }
  else{
    localData=JSON.parse(cart);
    localData.push(data);
    localStorage.setItem('cart', JSON.stringify(localData));
  }
}
}
