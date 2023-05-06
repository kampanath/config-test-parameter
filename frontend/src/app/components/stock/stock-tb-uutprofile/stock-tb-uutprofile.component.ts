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



@Component({
  selector: 'app-stock-tb-uutprofile',
  templateUrl: './stock-tb-uutprofile.component.html',
  styleUrls: ['./stock-tb-uutprofile.component.css']
})
export class StockTbUutprofileComponent implements OnInit {

 // mProductArray: Product[] = null;
 mProductArray: TbUutprofile[] = null;

 mSearchProductArray: TbUutprofile[] = null;

 searchTextChanged = new Subject<string>();

 testText: string;

 ID : string


 constructor(
   private router: Router, 
   private networkService: NetworkService,
   private localtion: Location,
   private activatedRoute: ActivatedRoute
   ) { }

   ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
    //  console.log(params.id);
    this.ID = params.id
      this.feedData(params.id);
    });
  }

 // this.feedData();

feedData(id: string) {
  //   this.networkService.getProductAll().subscribe(
   this.networkService.GetTbUutprofileByUUTNameID(id).subscribe(
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
       
    //     this.mSearchProductArray = data.result;
  //        this.getOutOfStock();
     },
   );
}

 getOutOfStock(): number {

   return 1150;
 }

 edit(id: string) {
 //  this.router.navigate([`/stock/edit/${id}`])
   this.router.navigate([`/stock/TbUutprofile-edit/${id}`])
 }

 view(id: string) {
  // this.router.navigate([`/stock/TbUutname-edit/${id}`])
  this.router.navigate([`/stock/tbProfile/${id}`])

 }

 Add(id: string) {
  // this.router.navigate([`/stock/TbUutname-edit/${id}`])
  this.router.navigate([`/stock/TbUutprofile-create/${id}`])
 }

 click1() {
  this.router.navigate(["/stock/TbUutname"])
 // console.log("PPPPPPPPPPPPPPPP");
}

click2() {
  this.router.navigate(["/IMEI/Product"])
}

click3() {
  console.log("WWWWWWWWWWWW");
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
      this.networkService.DeleteTbUutprofile(id).subscribe(
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
