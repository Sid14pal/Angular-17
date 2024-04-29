import { Component, OnInit } from '@angular/core';
import { RouteStatusService } from '../services/route-status.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  constructor(private routeStatusService: RouteStatusService) {
    this.routeStatusService.hideHeader = true;
  }

  ngOnInit() {}
}