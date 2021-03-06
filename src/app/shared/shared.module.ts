import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router'
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavbarComponent,
    RouterModule,
    CoreModule,
    FormsModule
  ]
})
export class SharedModule { }
