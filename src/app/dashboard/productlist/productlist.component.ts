import { Component } from '@angular/core';
import { RouteStatusService } from '../../services/route-status.service';
import { ProductsService } from '../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { product } from '../../data-type';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

  deletemessage: undefined| string;

  productList: undefined | product[];

  constructor(private routeStatusService: RouteStatusService, private product: ProductsService, private _snackBar: MatSnackBar){
    this.routeStatusService.hideHeader = true;
  }

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
