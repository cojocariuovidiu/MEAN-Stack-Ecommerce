import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nav_menu:boolean;
  navbarShadow:boolean;

  constructor() {

    this.nav_menu = false;

    setTimeout(()=>{  
      $( window ).scroll(()=> {
        if(window.scrollY > 10){
          this.navbarShadow = true;
        }else{
          this.navbarShadow = false;  
        }     
      });
    });


  }

  ngOnInit() {
  }

  nav_menus(){

    if(this.nav_menu == false){
      this.nav_menu = true;
    }else if(this.nav_menu == true){
      this.nav_menu = false;
    }

  }

}
