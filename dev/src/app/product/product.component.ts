import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productDesktop:boolean;
  productMobile:boolean;
  innerWidth: number;

  items:any = [
    {"id": 1},
    {"id": 2},
    {"id": 3},
    {"id": 4},
    {"id": 5},
    {"id": 6},
    {"id": 7},
    {"id": 8}
    ];

  constructor(private _location:Location) { 
    this.innerWidth = (window.screen.width);

     this.productDesktop = true;
     if(this.innerWidth <= 768){
      this.productDesktop = false;
      this.productMobile = true;
     }else{
      this.productDesktop = true;
      this.productMobile = false;
     }
  }

  ngOnInit() {
  }

  goBack(){    
    let url = this._location.back();
  }

}
