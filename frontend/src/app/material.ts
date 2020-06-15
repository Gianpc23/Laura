
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule,Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatGridListModule,MatCardModule,MatTableModule,
    MatFormFieldModule,MatInputModule, MatToolbarModule,
    MatDatepickerModule,MatNativeDateModule,ScrollingModule

  ],
  exports: [MatButtonModule, MatCheckboxModule,
    MatGridListModule,MatCardModule,MatTableModule,
    MatFormFieldModule,MatInputModule, MatToolbarModule,
    MatDatepickerModule,MatNativeDateModule,ScrollingModule
  ],

})

export class Material { }
