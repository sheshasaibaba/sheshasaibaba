import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthenticationGuard } from "./services/authentication.guard";
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { StudentLandingComponent } from './student/student-landing/student-landing.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomepageComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'admin-register', component: AdminMainComponent},
  {path: 'welcome', component:AdminDashboardComponent,canActivate:[AuthenticationGuard]},
  {path:'student', component: StudentLoginComponent},
  {path:'student-register', component: StudentRegisterComponent},
  {path:'student-landing',component: StudentLandingComponent},
  { path: "**",redirectTo:"/home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
