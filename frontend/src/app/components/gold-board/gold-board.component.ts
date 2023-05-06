

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';
import { ate_gold_board } from 'src/app/models/ate_gold_board.model';

@Component({
  selector: 'app-gold-board',
  templateUrl: './gold-board.component.html',
  styleUrls: ['./gold-board.component.css']
})
export class GoldBoardComponent implements OnInit {

 // mProductArray: Product[] = null;
 mProductArray: ate_gold_board[] = null;

 mSearchProductArray: ate_gold_board[] = null;

 searchTextChanged = new Subject<string>();


 testText: string;


 constructor(private router: Router, private networkService: NetworkService) { }

 ngOnInit() {
  this.searchTextChanged.pipe(
    debounceTime(1000)
  ).subscribe((data) => {
    if (data === '') {
      this.feedData();
    } else {
      this.mProductArray = this.mSearchProductArray.filter(
        product => {
          return product.model_no.toLowerCase().indexOf(data.toLowerCase()) > -1
        }
      );
    }
  });

  this.feedData();
}



 feedData() {
    //   this.networkService.getProductAll().subscribe(
     this.networkService.Getate_gold_boardAll().subscribe(
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
         
           this.mSearchProductArray = data.result;
    //        this.getOutOfStock();
       },
     );
 }

 getOutOfStock(): number {

   return 1150;
 }

 edit(id: string) {
  // this.router.navigate([`/stock/TbUutname-edit/${id}`])
  this.router.navigate([`/goldBoardEdit/${id}`])
 }

 view(id: string) {
  // this.router.navigate([`/stock/TbUutname-edit/${id}`])
  this.router.navigate([`/goldBoardEdit/${id}`])
 }

 Add(id: string) {
  // this.router.navigate([`/stock/TbUutname-edit/${id}`])
  this.router.navigate([`/goldBoardCreate/${id}`])
 }

 click1() {
  this.router.navigate(["/stock/TbUutname"])
 // console.log("PPPPPPPPPPPPPPPP");
}

click2() {
  this.router.navigate(["/IMEI/Product"])
}

click3() {
  this.router.navigate(["/sn"])
}

click4() {
  this.router.navigate(["/stock/tbEquipment"])
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
       this.networkService.Deleteate_gold_board(id).subscribe(
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
