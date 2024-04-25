import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-product-list',
  templateUrl: './index-product-list.component.html',
  styleUrl: './index-product-list.component.css'
})
export class IndexProductListComponent {

  faBag = faShoppingBag;
  featuredProducts: undefined | product[];
  constructor(private product:ProductsService){}

  ngOnInit(): void{
    this.product.productList().subscribe((result)=>{
      this.featuredProducts=result;  
    })
  }

}
