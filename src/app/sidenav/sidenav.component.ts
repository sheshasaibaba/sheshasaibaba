import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  items = [{name : "admin", links : '/admin' },{name : "student", links : '/student'}];
  constructor() { }

  ngOnInit(): void {
  }

}
