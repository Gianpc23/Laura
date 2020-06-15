import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Material } from './material'
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {CommonModule} from '@angular/common';
import { WorkedDayListComponent } from './components/worked-day-list/worked-day-list.component';
import { WorkedDayComponent } from './components/worked-day/worked-day.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    UserFormComponent,
    WorkedDayListComponent,
    WorkedDayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
    FormsModule,HttpClientModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
