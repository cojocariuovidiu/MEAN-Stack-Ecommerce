import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Category:any;

  constructor(private _categoryService:CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    this._categoryService.getCategory().subscribe(
      (data) => { this.Category = data },
      (err) => {console.log(err); }
    );
  }

}
