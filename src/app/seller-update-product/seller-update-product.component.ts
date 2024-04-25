import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent {
  productData: undefined | product ;
  productMessage: undefined | string;
  addProduct: any;
  constructor(private route: ActivatedRoute, private product: ProductsService){}

  ngOnInit(){
    const productId= this.route.snapshot.paramMap.get('id');
     this.product.getProduct(productId).subscribe((data)=>{
      this.productData= data;
    })

  }

  submit(data: product) {
    if(this.productData){
      data.id=this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productMessage="Product Updated Successfully";
      }
    })
    setTimeout(() => {
      this.productMessage= undefined;
    }, 3500);
  }

}
