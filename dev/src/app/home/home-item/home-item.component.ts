import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
    
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

  cartDesktop:boolean;
  cartMobile:boolean;
  innerWidth: number;

  constructor(private _router:Router) {

    this.innerWidth = (window.screen.width);

     this.cartDesktop = true;
     if(this.innerWidth <= 768){
      this.cartDesktop = false;
      this.cartMobile = true;
     }else{
      this.cartDesktop = true;
      this.cartMobile = false;
     }


  }

  ngOnInit() {
  }

  goProductPages(id:number){
    this._router.navigate(['/product', id]);
  }

}
