import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'  //regist in root
})
export class AuthService {

  keyLocalStorage = environment.keyLocalAuthenInfo



  constructor(private router: Router) { }

  login(token: string){
      localStorage.setItem(this.keyLocalStorage,token)
      //redirect to home
      this.router.navigate(["/home"])
  }

  logout(){

      localStorage.removeItem(this.keyLocalStorage)
      //Then redirect to login page
      this.router.navigate(["/login"])
  }

  isLogin(){

    return localStorage.getItem(this.keyLocalStorage) //like prereference in android
  }


}
