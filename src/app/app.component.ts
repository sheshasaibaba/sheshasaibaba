import { Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('drawer', { static: true }) drawer? : MatSidenavContainer; 

  sideBarToggle(app: any){
  if(app == true){
    this.drawer?.close()
  }
  else{
    this.drawer?.open()
  }
  }
}
