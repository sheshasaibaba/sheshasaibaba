import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutingService } from './api-routing.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private api: ApiRoutingService, private httpclient: HttpClient) { }

  studentRegister(data: any){
    return this.httpclient.post(this.api.baseURL + 'student/student/register',data, {
      observe: "body",
      headers: this.api.headers
    })
  }

  StudentFind(user: any){
    return this.httpclient.get(this.api.baseURL + 'student/student/forgot' + user, {
      observe: "body",
      headers: this.api.headers
    })
  }

  
}
