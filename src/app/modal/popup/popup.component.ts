import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  credentials = new FormGroup({
    username :new FormControl(''),
  })
  password: any;
  Answer: boolean = false

  constructor(@Inject(MAT_DIALOG_DATA) public modalData:any, private api: StudentService, private encrypt : EncryptDecryptService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.api.StudentFind(this.credentials.value.username).subscribe((data:any)=>{
      this.password = this.encrypt.get(data.password)
      this.Answer = true
    })
  }


}
