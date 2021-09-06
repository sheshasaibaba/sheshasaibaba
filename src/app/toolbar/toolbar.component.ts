import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isExpanded: boolean = false;
  


  constructor(private router :Router, private app: AppComponent) { }

  ngOnInit(): void {

  }

  menuclick(){
    this.isExpanded = this.isExpanded? false : true
    this.app.sideBarToggle(this.isExpanded)
  }
  onLogout(){
    if(localStorage.getItem('isAdmin') == 'true'){
      localStorage.clear()
    this.router.navigate(['/admin'])
    }
  }

}
