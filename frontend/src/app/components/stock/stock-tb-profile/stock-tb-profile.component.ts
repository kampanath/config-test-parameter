import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NetworkService } from 'src/app/services/network.service';
import { TbUutprofile } from 'src/app/models/tbUutprofile.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { NgModel } from '@angular/forms';
import { TbProfile } from 'src/app/models/tbprofile.model';
import { TbProfileDetail } from 'src/app/models/tbProfileDetail.model';


@Component({
  selector: 'app-stock-tb-profile',
  templateUrl: './stock-tb-profile.component.html',
  styleUrls: ['./stock-tb-profile.component.css']
})
export class StockTbProfileComponent implements OnInit {

 // mProductArray: Product[] = null;
 mProductArray: TbProfile[] = null;
 mProductArray2: TbProfileDetail[] = null;
 testText: string;
ID : string

 constructor(
   private router: Router, 
   private networkService: NetworkService,
   private activatedRoute: ActivatedRoute
   ) { }

 ngOnInit() {

  this.activatedRoute.params.subscribe((params) => {
    this.ID = params.id
    this.feedData(params.id);
  });

 }




 feedData(id: string) {
    //   this.networkService.getProductAll().subscribe(
     this.networkService.GetTbProfileByProfileID(id).subscribe(
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

     this.networkService.GetTbProfileDetailByProfileID(id).subscribe(
      data => {
        //    console.log(JSON.stringify(data));
        //      this.mProductArray = data.result;
        //     console.log(JSON.stringify(this.mProductArray));
        this.mProductArray2 = data.result.map(
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

 editProfile(id: string) {
 //  this.router.navigate([`/stock/edit/${id}`])
   this.router.navigate([`/stock/tbProfile-edit/${id}`])
 }

 editProfileDetail(id: string) {
  //  this.router.navigate([`/stock/edit/${id}`])
    this.router.navigate([`/stock/tbProfileDetail-edit/${id}`])
  }

  Add(id: string) {
    // this.router.navigate([`/stock/TbUutname-edit/${id}`])
    this.router.navigate([`/stock/tbProfile-create/${id}`])
   }

   AddProfileDetail(id: string) {
    // this.router.navigate([`/stock/TbUutname-edit/${id}`])
    this.router.navigate([`/stock/tbProfileDetail-create/${id}`])
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

  
 deleteTbProfile(id: string) {
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
      this.networkService.DeleteTbProfile(id).subscribe(
        data => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.feedData(this.ID);
        },
      );
      //delete product from webapi
    }
  })


}

deleteTbProfileDetail(id: string) {
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
      this.networkService.DeleteTbProfileDetail(id).subscribe(
        data => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.feedData(this.ID);
        },
      );
      //delete product from webapi
    }
  })


}



   

}
