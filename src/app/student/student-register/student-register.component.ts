import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  credentials = new FormGroup({
    username :new FormControl(''),
    password : new FormControl(''),
    passwordRe : new FormControl('')
  })
  error: boolean = false;
  errorMessage:string = ''
  constructor(private encrypt: EncryptDecryptService, private studentapi: StudentService,private router: Router) { }

  ngOnInit(): void {
  }
  onChange(){
    if(this.credentials.value.password != this.credentials.value.passwordRe){
      this.error = true
      this.errorMessage = "The passwords don't match"
    }
    else{
      this.error = false
    }
  }
  onSubmit(){
    let obj = {
      username: this.credentials.value.username,
      password: this.encrypt.set(this.credentials.value.password)
    }
    console.log(this.encrypt.get(this.credentials.value.password))
    console.log(obj)
    this.studentapi.studentRegister(obj).subscribe((data:any)=> {
      if(data){
        this.router.navigate(['/student'])
      }
      else{
      }
    })
    
  }
}
