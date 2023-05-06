import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';
import { Ird } from 'src/app/models/ird.model';

@Component({
  selector: 'app-stock-uutstatus-type',
  templateUrl: './stock-uutstatus-type.component.html',
  styleUrls: ['./stock-uutstatus-type.component.css']
})
export class StockUUTStatusTypeComponent implements OnInit {

 // mProductArray: Product[] = null;
 mProductArray: Ird[] = null;
 mProductArrayName: Ird = new Ird;
 mProductArrayName2: string[] = this.mProductArrayName.fruits;
 testText: string;


 constructor(private router: Router, private networkService: NetworkService) { }

 ngOnInit() {

   this.feedData();

 }




 feedData() {
    //   this.networkService.getProductAll().subscribe(
     this.networkService.GetIRDAll().subscribe(
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
   this.router.navigate([`/stock/ird-edit/${id}`])
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
       this.networkService.deleteIrd(id).subscribe(
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
