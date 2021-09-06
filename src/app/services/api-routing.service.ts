import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRoutingService {
  baseURL = 'http://localhost:3000/';
  headers = new HttpHeaders().append('Accept', 'application/json')
                            .append('Content-Type', 'application/json')
                            .append('Access-Control-Allow-Credentials', 'true')

  constructor() { }
}
