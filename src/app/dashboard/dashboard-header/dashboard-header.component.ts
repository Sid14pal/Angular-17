import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  isAddProductPage: boolean = false;
  faGlobe = faGlobe;
  faPlus = faPlus;

  constructor(private router: Router, private product: ProductsService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isAddProductPage = this.router.url === '/add-product';
    });
  }
}