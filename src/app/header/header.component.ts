import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { RouteStatusService } from '../services/route-status.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName:string="";
  faCart= faCartShopping;
  faIcon= faSearch;
  cartItemsCount= 0;


  constructor(private route: Router, public routeStatusService: RouteStatusService) {}

  ngOnInit(): void {/* 
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
         let sellerStore=localStorage.getItem('seller');
         let sellerData =sellerStore && JSON.parse(sellerStore)[0];
         this.sellerName=sellerData.name;
          this.menuType = 'seller';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.menuType='user';
        }
         else {
          this.menuType = 'default';
        }
      }
    }); */
  }

  logOut(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
}