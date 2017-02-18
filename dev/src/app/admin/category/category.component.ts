import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  Category:any;

  constructor(private _categoryService:CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    this._categoryService.getCategory().subscribe(
      (data) => { this. Category = data; },
      (err) => { console.log(err); },
      () => { console.log("get category success"); }
    );
  }

  Delete(name:string, _id:string){
    swal({
      text: 'คุณต้องการลบ '+name+' หรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ลบ',
      cancelButtonText: 'ยกเลิก'
    }).then(() => {
      this._categoryService.deleteCategory(_id).subscribe(data =>{
        if(data.status == true){
          swal(
            'ลบข้อมูลเรียบร้อย!',
            '',
            'success'
          )
          this.getCategory();
        }else if(data.status == false){
          swal(
            'ลบข้อมูลไม่สำเร็จ!',
            '',
            'info'
          )
        }else{
           swal(
            'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ',
            '',
            'error'
          )         
        }

      });

    }, (dismiss) => {})
  }

}
