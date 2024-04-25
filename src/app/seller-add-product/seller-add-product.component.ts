import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {

  productAddMessage: undefined | string;

  constructor(private product: ProductsService, private _snackBar: MatSnackBar) { }

  submit(data: product) {
    this.product.addproduct(data).subscribe((result) => {
      if (result) {
        this.openSnackBar('Product added Successfully.', 'Close');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success']  
    });

  }

  sellerAddProduct= new FormGroup({
    name:new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    color: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    sale: new FormControl('')
  })

  get productName(){
    return this.sellerAddProduct.get('name');
  }

  get productPrice(){
    return this.sellerAddProduct.get('price');
  }

  get productColor(){
    return this.sellerAddProduct.get('color');
  }

  get productCategory(){
    return this.sellerAddProduct.get('category');
  }

  get productDescription(){
    return this.sellerAddProduct.get('description');
  }

  get productImage(){
    return this.sellerAddProduct.get('image');
  }
/* 
  get productSale(){
    return this.sellerAddProduct.get('sale');
  } */
  
  
  

}
