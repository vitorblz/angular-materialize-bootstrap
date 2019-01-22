import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  userAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authService.userAuthenticatedEmitter.subscribe(
      result => this.userAuthenticated = result
    );
  }

}
