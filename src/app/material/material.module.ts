import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatIconModule } from "@angular/material/icon"
// import { MatIconModule } from "@angular/material/core/"
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from "@angular/material/dialog";


const modules = [MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatFormFieldModule,ReactiveFormsModule,MatButtonModule,MatInputModule,MatExpansionModule,MatDialogModule]
@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules],
  providers: [
  ]
})
export class MaterialModule { }
