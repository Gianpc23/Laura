import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from "rxjs";
import {WorkedDay} from "../models/workedDay";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly URI_BASE = 'https://registrohorario.babel.es/api';
  readonly AUTH_ENDPOINT: string = `${this.URI_BASE}/users/authenticate`;
  readonly VACATION_ENDPOINT: string = `${this.URI_BASE}/users/absenses`;
  readonly IN_ENDPOINT: string = `${this.URI_BASE}/signs/register/in`;
  $stats= new Subject<{startDate, endDate}>();

  constructor(private http: HttpClient) { }

  sessionToken: string = "";
  holidays: Date[] = [];
  dateIn: number;
  dateOut: number;
  dateRegister: number;
  intervals: [{}] = [{ }];

  getSessionTokenFromBabel(userName: string, password: string): Observable<any>{
    return this.http.post(`${this.AUTH_ENDPOINT}`, { password: password, username: userName });
  }

  getHolidays(): Observable<any> {
    let dateStart = "2018-01-01";
    let dateEnd = "2030-12-31";
    return this.http.get(`${this.VACATION_ENDPOINT}?dateStart=${dateStart}&dateEnd=${dateEnd}`,this.getAuthHeader());
  }

  private getAuthHeader(){
    return { headers: {'Authorization': `Bearer ${this.sessionToken}`}};
  }

  inRequestToBabel(workedDay: WorkedDay): Observable<any>{
    this.dateIn = new Date(workedDay.date.getFullYear(), workedDay.date.getMonth(),
      workedDay.date.getDate(),8,0).getTime();
    this.dateRegister = new Date(workedDay.date.getFullYear(), workedDay.date.getMonth(),
      workedDay.date.getDate(),2,0).getTime();
    let requestBody = {
      dateIn: this.dateIn,
      dateRegister: this.dateRegister
    }
    console.log(requestBody);
    return this.http.post(this.IN_ENDPOINT, requestBody, this.getAuthHeader());
  }

  outRequestToBabel(workedDay: WorkedDay){
    this.dateOut = new Date(workedDay.date.getFullYear(), workedDay.date.getMonth(),
      workedDay.date.getDate(),17,0).getTime();
    this.intervals[0] = {
      dateIn: new Date(workedDay.date.getFullYear(), workedDay.date.getMonth(),
        workedDay.date.getDay(),14,30).getTime(),
      dateOut: new Date(workedDay.date.getFullYear(), workedDay.date.getMonth(),
        workedDay.date.getDay(),15,30).getTime()
    }
    let requestBody = {
      dateIn: this.dateIn,
      dateOut: this.dateOut,
      dateRegister: this.dateRegister,
      intervals: this.intervals
    }
    return this.http.post(this.IN_ENDPOINT, requestBody, this.getAuthHeader());
  }

}
