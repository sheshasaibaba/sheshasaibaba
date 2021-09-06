import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutingService } from './api-routing.service';

@Injectable({
  providedIn: 'root'
})
export class AdminSideService {

  constructor(private api : ApiRoutingService,private httpClient :HttpClient) {  }

  adminRegister(data: any){
    return this.httpClient.post(this.api.baseURL + 'api/register/admin',data, {
      observe : 'body',
      headers : this.api.headers
      
    } )
  }
  adminLogin(data: any){
    return this.httpClient.post(this.api.baseURL + 'api/admin/login',data, {
      observe: 'body',
      headers: this.api.headers
    })
  }
  isLogin() {
    return localStorage.getItem("userId")? true: false;
  }
}
