import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatButtonModule,
            MatToolbarModule,
            MatExpansionModule,
            MatInputModule,
            MatSnackBarModule,
            MatProgressBarModule,
            MatCardModule,
            MatIconModule],
  exports: [MatButtonModule,
            MatToolbarModule,
            MatExpansionModule,
            MatInputModule,
            MatSnackBarModule,
            MatProgressBarModule,
            MatCardModule,
            MatIconModule]
})
export class MaterialModule { }
