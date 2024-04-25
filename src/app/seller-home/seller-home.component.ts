import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {

  faDelete = faTrash;
  faEdit = faEdit;
  deletemessage: undefined| string;

  productList: undefined | product[];

  constructor(private product: ProductsService, private _snackBar: MatSnackBar){}

  ngOnInit(): void{
    this.mainData();
  }

  deleteProduct(id:any){
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.mainData();
        this.openSnackBar('Item Deleted Successfully.', 'Close');
      }
    })
  }

  mainData(){
    this.product.productList().subscribe((result)=>{
      this.productList=result;  
    })
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
