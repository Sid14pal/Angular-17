import { Component } from '@angular/core';
import { RouteStatusService } from '../services/route-status.service';
import { faCircleDot, faStar, faStarHalf, faTruck, faListCheck, faUpDown, faMap} from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  faCircleDot = faCircleDot;
  faStar = faStar;
  faStarHalf = faStarHalf;
  faTruck = faTruck;
  faListCheck = faListCheck;
  faUpDown = faUpDown;
  faMap = faMap;
  productList: undefined | product[];

  constructor(private routeStatusService: RouteStatusService, private product: ProductsService){
    this.routeStatusService.hideHeader = true;
  }

  ngOnInit(): void{
    this.mainData();
  }


  mainData(){
    this.product.productList().subscribe((result)=>{
      this.productList=result;  
    })
  }

}
