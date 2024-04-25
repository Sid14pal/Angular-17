import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: product[] = [];
  faDelete = faTrash;
  faEdit = faEdit;
  totalCartPrice: number = 0;
  message: any;
  action: any;

  constructor(private productService: ProductsService, private _snackBar: MatSnackBar, private router: Router) {}


  ngOnInit(): void {
    this.cartItems = this.productService.getCartItemsFromLocalStorage();
    this.calculateTotalPrice();
  }

  deleteItem(index: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.cartItems.splice(index, 1);
      this.productService.updateCartInLocalStorage(this.cartItems);
      this.calculateTotalPrice();
      this.openSnackBar('Item Deleted Successfully.', 'Close');
    }
  }

  deleteAllItems(): void {
    if (confirm('Are you sure you want to delete all items?')) {
      this.cartItems = [];
      this.productService.updateCartInLocalStorage(this.cartItems);
      this.calculateTotalPrice();
      this.openSnackBar('All Items Deleted Successfully.', 'Close');
    }
  }
  

  calculateTotalPrice(): void {
    this.totalCartPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity,  0);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success']  
    });

  }
  
}
