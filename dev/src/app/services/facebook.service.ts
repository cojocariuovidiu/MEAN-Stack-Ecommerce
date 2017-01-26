import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../class/user';

declare const FB: any;

@Injectable()
export class FacebookService {

  constructor(private _UserService:UserService, private _user:User) { 
    FB.init({
      appId: '1139288556155732',
      cookie: true,
      xfbml: true,
      version: 'v2.8'
    });
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
     return this.fbApi(resp);
    } else if (resp.status === 'not_authorized') {
      console.log("Login Facebook: false => not_authorized");
    } else {
      console.log("Login Facebook: false");
    }
  };

  fbApi(res) {    
    FB.api('/me?fields=id,name,email,gender,picture,locale,link',
      (Fbdata) => {
        let json = {
          id: Fbdata.id,
          name: Fbdata.name,
          email: Fbdata.email,
          gender: Fbdata.gender,
          token: res.authResponse.accessToken,
          picture: Fbdata.picture.data.url,
          locale: Fbdata.locale,
          link: Fbdata.link
        };       

        this._UserService.User(json).subscribe(
          (data) => {
            this._user.detail = data[0];            
          });
      });

      return true;      

  }

}
