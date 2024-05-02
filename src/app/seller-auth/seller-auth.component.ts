import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RouteStatusService } from '../services/route-status.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  constructor(private seller: SellerService, private router: Router, private routeStatusService: RouteStatusService,  private _snackBar: MatSnackBar,) { 
    this.routeStatusService.hideHeader = true;
  }

  showLogin = false;
  authError:string = '';

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: signUp): void {
    this.seller.userSignUp(data)
  }

  login(data: signUp): void {
    this.authError="";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
       this.openSnackBar('Invalid Authentication', 'Close');
      }
    })
  }

    openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['danger']  
    });
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp(){
    this.showLogin = false;
  }

  signUpForm= new FormGroup({
    name:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email])
  })

  get user(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }



}
