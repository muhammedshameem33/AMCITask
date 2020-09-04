import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { from } from 'rxjs';

const MaterialComponents=[
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
