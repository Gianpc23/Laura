import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { User } from './models/user/user.model';

@Injectable()
export class AppService {
  readonly URI_BASE = 'https://registrohorario.babel.es/api/';
  readonly VACATION_ENDPOINT: string = `${this.URI_BASE}signs/date`;
  readonly AUTH_ENDPOINT: string = `${this.URI_BASE}users/authenticate`;
  readonly REGISTER_ENDOPOINT: string = `${this.URI_BASE}signs/register/in`;
  readonly OUT_ENDPOINT: string = `${this.URI_BASE}signs/register/out`;

  accessToken: string = '';
  refreshToken: string = '';
  logged: boolean = false;

  constructor(private readonly httpService: HttpService) {}

  getAuthentication(user: User): Observable<AxiosResponse<any>> {
    console.log(`${this.AUTH_ENDPOINT}`);
    return this.httpService.post(`${this.AUTH_ENDPOINT}`, { password: 'GianBabel25', username: 'gianfranco.perez' });
  }

  getVacations(): Observable<AxiosResponse<any>> {
    let date = new Date();
    let time: number = new Date(date.getFullYear(),date.getMonth(),date.getDay(),2,0).getTime();
    console.log(`${this.VACATION_ENDPOINT}?date=${time}`);
    return this.httpService.get(`${this.VACATION_ENDPOINT}?date=${time}`,this.getAuthHeader());
  }

  postCompleteHours(): Observable<AxiosResponse<any>> {
    return this.httpService.post(`${this.OUT_ENDPOINT}`, this.createOutRequestBody(), this.getAuthHeader());
  }
  postCompleteHoursFake(): void {
    console.log(this.createOutRequestBody());
  }

  private createOutRequestBody(){
    let date = new Date();
    let interval = [{
      dateIn: new Date(date.getFullYear(),date.getMonth(),date.getDay(),14,30).getTime(),
      dateOut: new Date(date.getFullYear(),date.getMonth(),date.getDay(),15,30).getTime()
    }];
    let dateIn: number  = new Date(date.getFullYear(),date.getMonth(),date.getDay(),8,0).getTime();
    let dateOut: number = new Date(date.getFullYear(),date.getMonth(),date.getDay(),17,0).getTime();
    let dateRegister: number = new Date(date.getFullYear(),date.getMonth(),date.getDay(),2,0).getTime();
    return {
      interval,
      dateIn,
      dateOut,
      dateRegister
    }
  }

  private getAuthHeader(){
    return { headers: {'Authorization': `Bearer ${this.accessToken}`}};
  }

}
