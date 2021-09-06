import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { PopupComponent } from 'src/app/modal/popup/popup.component';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  credentials = new FormGroup({
    username :new FormControl(''),
    password : new FormControl('')
  })
  constructor(private popup: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.credentials.value)
  }


  getPassword(){
    this.openpopup()
  }

  openpopup(){
    const dialog = this.popup.open(PopupComponent, {
      width: '450px',
      panelClass: 'custom-dialog-container',
      data: {
        "content": '',
        "buttonTitle": "Warning"
      }
    })
    dialog.afterClosed().subscribe(result => {
      
    });
  }
}
