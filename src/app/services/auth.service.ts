import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { enviorment } from '../../environments/enviorment';
import { BehaviorSubject } from 'rxjs';
=======
import { environment } from '../../environments/environment';
import { BehaviorSubject, retry } from 'rxjs';
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

<<<<<<< HEAD
  private tokenName=enviorment.tokenName;

  private isLoggedIn= new BehaviorSubject<boolean>(this.getToken());
  isLoggedIn$ = this.isLoggedIn.asObservable();
  
  getToken(){
    const sess=sessionStorage.getItem(this.tokenName);
    if(sess) return true;

    const locs=localStorage.getItem(this.tokenName);

    if(locs){
      sessionStorage.setItem(this.tokenName,locs);
      return true;
    }
    return false;
  }

  login(token:string){
    sessionStorage.setItem(this.tokenName,token);
    this.isLoggedIn.next(true);
  }

  logout(){
=======
  private tokenName = environment.tokenName;

  private isLoggedIn = new BehaviorSubject<boolean>(this.getToken());
  isLoggedIn$ = this.isLoggedIn.asObservable();

  getToken(){
    const sess = sessionStorage.getItem(this.tokenName);
    if (sess) return true;

    const locs = localStorage.getItem(this.tokenName);
    if (locs){
      sessionStorage.setItem(this.tokenName, locs);
      return true;
    } 


    return false;
  }

  login(token: string) {
    sessionStorage.setItem(this.tokenName, token);
    this.isLoggedIn.next(true);
  }

  logout() {
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
    sessionStorage.removeItem(this.tokenName);
    localStorage.removeItem(this.tokenName);
    this.isLoggedIn.next(false);
  }

<<<<<<< HEAD
  loggedUser(){
    const token=sessionStorage.getItem(this.tokenName);
    if(token){
      return token;   //TODO: kskssksksks
=======
  LoggedUser() {
    const token = sessionStorage.getItem(this.tokenName);
    if (token) {
      return token; //TODO: decode token and get user info
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
    }
    return null;
  }

<<<<<<< HEAD
  storeUser(token:string){
    localStorage.setItem(this.tokenName,token);
    

  }

  isLoggedUser():boolean
  {
    return this.isLoggedIn.value;
  }

  isAdmin():boolean{
    const user: any=this.loggedUser();
    return user.role==='admin';
  }
  
=======
  storeUser(token: string) {
    localStorage.setItem(this.tokenName, token);
  }

  isLoggedUser(): boolean {
    return this.isLoggedIn.value;
  }

  isAdmin(): boolean {
    const user: any = this.LoggedUser();

    return user.role === 'admin'; //TODO: decode token and check user role
  }
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c

}
