import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faDelete = faTrash;
  faEdit = faEdit;
  deletemessage: undefined| string;

  productList: undefined | product[];

  constructor(private product: ProductsService){}

  ngOnInit(): void{
    this.product.productList().subscribe((result)=>{
      this.productList=result;  
    })
  }

}
