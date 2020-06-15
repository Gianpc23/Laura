import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userName: string = "";
  password: string = "";
  startDate: Date;
  endDate: Date;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  getSessionToken():void{
    this.homeService.getSessionTokenFromBabel(this.userName, this.password).subscribe(
      res => {
        this.homeService.sessionToken = res.access_token;
        this.getHolidays();
      }
    );
  }

  getHolidays() {
    this.homeService.getHolidays().subscribe(
      res => {
        this.homeService.holidays = res.map(e => {
          let parts = e.FECHA.split('/');
          return new Date(parts[2], parts[1]-1, parts[0]);
        });
      }
    );
  }

  setDays(){
    console.log(this.startDate)
    console.log(this.endDate)
    this.homeService.$stats.next({
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

}
