import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './models/user/user.model';
import { Observable, pipe, BehaviorSubject, Subject  } from 'rxjs';
//import { AxiosResponse } from 'axios';
import {} from 'morgan';
const fetch = require("node-fetch");

@Controller()
export class AppController {
  ob1 = new Subject<any>();

  constructor(private readonly appService: AppService) {

  }
  

  @Post('register')
  registDay(@Body() user: User){
    this.getAuthentication(user).subscribe(res => {
      this.setTokenVariables(res);
      this.getVacations().subscribe((res) => {
        console.log("RES: " + res.data.comment);
        return { message: '' }
      });
    },err => {
      return { message: 'Credenciales no validas'}
    });
    
  }

  getAuthentication(user: User) {
    return this.appService.getAuthentication(user);
  }

  getVacations() {
    return this.appService.getVacations();
  }

  postHours(){
    this.appService.postCompleteHoursFake();
  }

  private setTokenVariables(res): void{
    this.appService.accessToken = res.data.access_token;
    this.appService.refreshToken = res.data.refresh_token;
    this.appService.logged = true;
  }

  testFetch(){
    var url = 'https://registrohorario.babel.es/api/users/authenticate';
    var data = { password: 'GianBabel25', username: 'gianfranco.perez' };
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
  }

}
