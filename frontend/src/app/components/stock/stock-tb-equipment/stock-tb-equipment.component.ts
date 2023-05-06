import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NetworkService } from 'src/app/services/network.service';
import { TbEquipment } from 'src/app/models/tbEquipment.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { NgModel } from '@angular/forms';
import { TbProfile } from 'src/app/models/tbprofile.model';


@Component({
  selector: 'app-stock-tb-equipment',
  templateUrl: './stock-tb-equipment.component.html',
  styleUrls: ['./stock-tb-equipment.component.css']
})
export class StockTbEquipmentComponent implements OnInit {


  // mProductArray: Product[] = null;
  mProductArray: TbEquipment[] = null;

  mSearchProductArray: TbEquipment[] = null;

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
            return product.equipName.toLowerCase().indexOf(data.toLowerCase()) > -1
          }
        );
      }
    });

    this.feedData();
  }



  feedData() {
    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetTbEquipmentAll().subscribe(
      data => {
        this.mProductArray = data.result.map(
          item => {

            return item
          }
        )
      
        this.mSearchProductArray = data.result;
     
      },
    );
  }

 
  edit(id: string) {
    // this.router.navigate([`/stock/TbUutname-edit/${id}`])
    this.router.navigate([`/stock/tbEquipment-edit/${id}`])
  }


  Add(id: string) {
    // this.router.navigate([`/stock/TbUutname-edit/${id}`])
    this.router.navigate([`/stock/tbEquipment-create/${id}`])
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
        this.networkService.DeleteTbEquipment(id).subscribe(
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
