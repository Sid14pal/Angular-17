import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import { Router } from '@angular/router'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItems: product[] = [];
  totalCartPrice: number = 0;

  constructor(private productService: ProductsService, private router: Router){}

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItemsFromLocalStorage();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalCartPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity,  0);
  }


}
