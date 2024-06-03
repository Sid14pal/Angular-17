import { Component } from '@angular/core';
import { RouteStatusService } from '../../services/route-status.service';
import { ProductsService } from '../../services/products.service';
import { faPalette, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { product } from '../../data-type';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  faColor = faPalette;
  faGlobe = faGlobe

  constructor(private routeStatusService: RouteStatusService, private product: ProductsService, private _snackBar: MatSnackBar){
    this.routeStatusService.hideHeader = true;
  }

  submit(data: product) {
    this.product.addproduct(data).subscribe((result) => {
      if (result) {
        this.openSnackBar('Product added Successfully.', 'Close');
        console.warn(result)
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

}
