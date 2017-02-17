import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  menu_category_add:boolean;
  menu_product_add:boolean;

  constructor(private _router:Router) {
    this.checkPath();
  }

  ngOnInit() {
  }

  checkPath(){
    let path = this._router.url;

    if(path == "/admin/product/add"){
      this.menu_product_add = true;
    }else{
      this.menu_product_add = false;
    }

    if(path == "/admin/category/add"){
      this.menu_category_add = true;
    }else{
      this.menu_category_add = false;
    }

  }

  menu(name:string, action:string){

    if(name == "product"){
      if(action == "add"){
        this._router.navigate(['admin/', name, action]);
      }
    }

    if(name == "category"){
      if(action == "add"){
        this._router.navigate(['admin/', name, action]);
      }
    }
    
    setTimeout(()=>{
      this.checkPath();
    },5);

  }

}
