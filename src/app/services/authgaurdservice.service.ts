import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdserviceService {

  constructor( private router: Router) { }

  gettoken(){  
  return !!localStorage.getItem("userId");  
  }  

  canActivate(): boolean {  
    if (!this.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.gettoken();  
}  
}
