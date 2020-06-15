import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly URI_BASE = 'https://registrohorario.babel.es/api/';
  readonly AUTH_ENDPOINT: string = `${this.URI_BASE}users/authenticate`;
  readonly VACATION_ENDPOINT: string = `${this.URI_BASE}users/absenses`;

  $stats= new Subject<{startDate, endDate}>();

  constructor(private http: HttpClient) { }

  sessionToken: string = "";
  holidays: Date[] = [];

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

}
