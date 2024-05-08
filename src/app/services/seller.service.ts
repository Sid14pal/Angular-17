import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  IsSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false);
  sellerData: any;

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: signUp) {
    let result = this.http.post('http://localhost:3000/seller', data, { observe: "response" }).subscribe((result) => {
      this.IsSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['dashboard']);
    });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.IsSellerLoggedIn.next(true);
      this.router.navigate(['dashboard']);
    }
  }

  userLogin(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     if(result && result.body && result.body.length===1){
       localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['dashboard']);
     }else{
      this.isLoginError.emit(true);
     }
    })
   }
}