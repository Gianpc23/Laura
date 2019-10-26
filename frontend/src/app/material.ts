  
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatGridListModule,MatCardModule,MatTableModule,
    MatFormFieldModule,MatInputModule,
    
  ],
  exports: [MatButtonModule, MatCheckboxModule,
    MatGridListModule,MatCardModule,MatTableModule,
    MatFormFieldModule,MatInputModule
  ],

})

export class Material { }