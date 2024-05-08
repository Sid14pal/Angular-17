import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleRight, faChartBar, faNoteSticky, faBoxOpen, faWallet, faCommentSms, faArrowRight, faChevronDown, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { SellerService } from '../../services/seller.service';


@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent implements OnInit{
  sellerName:string="";
  faArrowAltCircleRight = faArrowAltCircleRight;
  faChartBar = faChartBar;
  faListCheck = faNoteSticky;
  faTruckDroplet = faBoxOpen;
  faWallet = faWallet;
  faComment = faCommentSms;
  faArrowRight = faArrowRight;
  faChevronDown = faChevronDown;
  faRightFromBracket = faRightFromBracket;

  constructor(private route: Router, private sellerService: SellerService) {}

  ngOnInit(): void {
    if (this.sellerService.IsSellerLoggedIn.value) {
      this.loadSellerData();
    }
    this.sellerService.IsSellerLoggedIn.subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.loadSellerData();
      } else {
        this.sellerName = "";
      }
    });
  }

  // Function to load seller data
  private loadSellerData(): void {
    const seller = JSON.parse(localStorage.getItem('seller') || '{}');
    this.sellerName = seller.name || ""; // Ensure a fallback value if seller name is not available
  }


  logOut(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
}
