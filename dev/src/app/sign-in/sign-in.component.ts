import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FacebookService } from '../services/facebook.service';
import { User } from '../class/user';

declare const FB: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  dropdown:boolean;
  modal_login: boolean;
  checkLogin: boolean;
  constructor(
    private _UserService: UserService, 
    private _router: Router, 
    private _fb:FacebookService,
    private _user:User
    ) {

    this.dropdown = false;
    this.modal_login = false;
    this.checkLogin = false;  
  
  }

  ngOnInit() {
    FB.getLoginStatus(response => {
      let status = this._fb.statusChangeCallback(response);
      setTimeout(()=>{this.check(status)},1000);
      console.log("Login Facebook : "+ status);
    }); 
  }

  facebookLogOut() {
    FB.logout()    
    this.checkLogin = false;
    this.dropdown = false;
  }

  FacebookLoginClick(){
    FB.login((resp) => {
      if (resp.status === 'connected') { 
        let status = this._fb.statusChangeCallback(resp);
        setTimeout(()=>{this.check(status)},1000);
        console.log("Login Facebook : "+ status);  
      } else if (resp.status === 'not_authorized') {
        console.log("Login Facebook: false => not_authorized");
      } else {
        console.log("Login Facebook: false");
      }
    });   
  }

  check(check:boolean){
      if(check == true){
        this.modal_login = false;
        this.checkLogin = true;  
      }else{
        this.modal_login = false;
        this.checkLogin = false;  
      }
  }

 
}
