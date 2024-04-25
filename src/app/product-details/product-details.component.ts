import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(private activeRoute:ActivatedRoute, private product: ProductsService){}

  productData: undefined | product;
  productQuantity: number=1;

  ngOnInit(): void{
    let productId=this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId).subscribe((result)=>{
    this.productData=result;
    })
  }

  handleQuantity(val: string){
    if(this.productQuantity<20 && val==="plus"){
      this.productQuantity=this.productQuantity+1
    }
    else if(this.productQuantity>1 && val==="min"){
      this.productQuantity=this.productQuantity-1
    }
  }

  addToCart(){
    if(this.productData){
      this.productData.quantity= this.productQuantity
      if(!localStorage.getItem('user')){
       this.product.localAddToCart(this.productData);
      }
      else{
        console.warn('no product');
      }
    }
  }

}
