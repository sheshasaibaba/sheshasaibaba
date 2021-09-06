import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EncryptDecryptService } from "../../services/encrypt-decrypt.service";
import { AdminSideService } from "../../services/admin-side.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private encrypt: EncryptDecryptService, private adminApi: AdminSideService, private route: Router) { }
  
    credentials = new FormGroup({
    username : new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.credentials.value.username)
    if(this.credentials.valid){
        let obj = {username : this.credentials.value.username, password: this.encrypt.set(this.credentials.value.password)}
      this.adminApi.adminLogin(obj)
      .subscribe(
        (data:any) => {
        if(data){
          localStorage.clear()
          localStorage.setItem('userId', data._id)
          localStorage.setItem('isAdmin', "true")
          this.route.navigate(['/welcome'])
        }
      })
    }
  }

}
