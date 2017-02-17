import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  CategoryName:string;

  constructor(private _category:CategoryService) { }

  ngOnInit() {
  }

  addCategory(){
    if(this.CategoryName !== ""){
      let data = {name: this.CategoryName}
      this._category.createCategory(data).subscribe(data => {
        if(data.code == 11000){
          console.log("insert: false");
          this.CategoryName = "";          
        }else{
          console.log("insert: true");
          this.CategoryName = "";
        }        
      });
    }
  }

  reset(){
    this.CategoryName = "";
  }

}
