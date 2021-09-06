import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminSideService } from '../../services/admin-side.service';
import { EncryptDecryptService } from "../../services/encrypt-decrypt.service";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {


  constructor( private adminapi : AdminSideService, private encrypt: EncryptDecryptService,private router: Router) { }
  @ViewChild('formDirective', { static: true })
  private formDirective!: NgForm;

  ngOnInit(): void {
  }
  credentials = new FormGroup({
    username : new FormControl(''),
    fullname: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){
    let obj ={username : this.credentials.value.username,fullname:this.credentials.value.fullname, password: this.encrypt.set(this.credentials.value.password)}
    this.adminapi.adminRegister(obj).subscribe( data => {
      if(data){
        // this.credentials.reset({emitEvent: false})
        this.formDirective.resetForm()
        this.router.navigate(['/admin'])
      }
      console.log(data)

    })  }
}
