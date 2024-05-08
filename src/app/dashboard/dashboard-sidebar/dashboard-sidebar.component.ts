import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleRight, faChartBar, faNoteSticky, faBoxOpen, faWallet, faCommentSms, faArrowRight, faChevronDown, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { SellerService } from '../../services/seller.service';


@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent{
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

  


  logOut(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
}
