import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';
import { Ird } from 'src/app/models/ird.model';
import { TbProfile } from 'src/app/models/tbprofile.model';
import { a9522b_cnt,a9522b_cntAll } from 'src/app/models/a9522b_cnt.model';
import { debounceTime } from 'rxjs/operators';


import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-stock-mysql',
  templateUrl: './stock-mysql.component.html',
  styleUrls: ['./stock-mysql.component.css']
})
export class StockMysqlComponent implements OnInit {

 
 // mProductArray: Product[] = null;
 mProductArray: a9522b_cnt[] = null;
 testText: string;

  mSearchProductArray: a9522b_cnt[] = null;

  searchTextChanged = new Subject<string>();

  constructor(private router: Router, private networkService: NetworkService) { }


 ngOnInit() {
  this.searchTextChanged.pipe(
    debounceTime(3000)
  ).subscribe((data) => {
    if (data === '') {
      this.feedData();
    } else {
      this.mProductArray = this.mSearchProductArray.filter(
        product => {
          return a9522b_cnt.name.toLowerCase().indexOf(data.toLowerCase()) > -1
        }
      );
    }
  });

  this.feedData();
}

 feedData() {
  //   this.networkService.getProductAll().subscribe(
   this.networkService.Geta9522b_cntAll().subscribe(
     data => {
       //    console.log(JSON.stringify(data));
       //      this.mProductArray = data.result;
       console.log(this.mProductArray);
       //     console.log(JSON.stringify(this.mProductArray));
       this.mProductArray = data.result.map(
         item => {
           // console.log(item);
 //                  var image = item.image;
   //               if (image != null) {
     //              item.image = this.networkService.productImageURL + item.image
     //              }
           return item
         }
       )
//         console.log(this.mProductArray);
       //  this.mProductArray = data.result;
       //  this.mSearchProductArray = data.result;
  //        this.getOutOfStock();
     },
   );
}

getOutOfStock(): number {

 return 1150;
}

edit(id: string) {
//  this.router.navigate([`/stock/edit/${id}`])
 this.router.navigate([`/stock/mySQL-edit/${id}`])
}

delete(id: string) {
 //async
 Swal.fire({
   title: 'Are you sure?',
   text: "You won't be able to revert this!",
   icon: 'warning',
   allowOutsideClick: false,
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'Yes, delete it!'
 }).then((result) => {
   if (result.value) {

    // this.networkService.deleteProduct(id).subscribe(
     this.networkService.Deletea9522b_cnt(id).subscribe(
       data => {
         Swal.fire(
           'Deleted!',
           'Your file has been deleted.',
           'success'
         )
         this.feedData();
       },
     );
     //delete product from webapi
   }
 })


}

}