import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  frm_AddProduct:FormGroup;

  constructor(private _fb:FormBuilder, _productService:ProductService) {
    
  }

  ngOnInit() {
  }

}
