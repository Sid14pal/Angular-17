import { Component } from '@angular/core';
import { RouteStatusService } from '../services/route-status.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private routeStatusService: RouteStatusService,){
    this.routeStatusService.hideHeader = true;
  }

}
