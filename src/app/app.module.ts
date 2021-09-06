import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from "@angular/common/http";
import { EncryptDecryptService } from "./services/encrypt-decrypt.service";
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthgaurdserviceService } from './services/authgaurdservice.service';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { StudentLandingComponent } from './student/student-landing/student-landing.component';
import { PopupComponent } from './modal/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AdminLoginComponent,
    SidenavComponent,
    AdminMainComponent,
    HomepageComponent,
    AdminDashboardComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    StudentLandingComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [EncryptDecryptService,AuthgaurdserviceService],
  bootstrap: [AppComponent],
  exports: [MaterialModule]
})
export class AppModule { }
