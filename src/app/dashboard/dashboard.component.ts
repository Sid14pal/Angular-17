import { Component } from '@angular/core';
import { RouteStatusService } from '../services/route-status.service';
import { faCircleDot, faStar, faStarHalf, faTruck, faListCheck, faUpDown, faMap} from '@fortawesome/free-solid-svg-icons';

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

  constructor(private routeStatusService: RouteStatusService,){
    this.routeStatusService.hideHeader = true;
  }

}
