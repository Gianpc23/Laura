import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = "Login form";
  currentUser: User;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.currentUser = new User();
  }

  validUser(){
    this.loginService.validateUser(this.currentUser).subscribe( res => {
      console.log("RES: " + res);
      if(res.valid == true){
        console.log("True");
      }else if(res.valid == false){
        console.log("False");
      }
    });

  }

}
