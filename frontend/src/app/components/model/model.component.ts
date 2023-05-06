import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NetworkService } from 'src/app/services/network.service';
import { TbEquipment } from 'src/app/models/tbEquipment.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { NgModel } from '@angular/forms';
import { model2 } from 'src/app/models/model2.model';
import { MatSelectModule } from '@angular/material/select';
import { model } from 'src/app/models/model.model'

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})


export class ModelComponent implements OnInit {


  // mProductArray: TbEquipment[] = null;
  mProductArray: model2[] = null;

  mProductArray2: model2[] = null;

  mProductArrayForFilter: model2[] = null;

  mSearchProductArray: model2[] = null;

  mProductDropDown: model[] = null;

  foods: string[] = ["aaaa", "bbbb"]

  searchTextChanged = new Subject<string>();
  filterSelected: string = "";

  testText: string;

  firstTimeFlag: boolean = true;

  stringArray1: model[] = []

  constructor(private router: Router, private networkService: NetworkService) { }

  ngOnInit() {
    /*
    this.searchTextChanged.pipe(
      debounceTime(1000)
    ).subscribe((filterSelected) => {
      if (filterSelected === '') {
        this.feedData();
      } else {
        this.mProductArray = this.mSearchProductArray.filter(
          product => {
            return product.hardware_Type.toLowerCase().indexOf(filterSelected.toLowerCase()) > -1
          }
        );
      }
    });
    */

    this.networkService.GetmodelByHardwareType().subscribe(
      data => {

        this.mProductDropDown = data.result.map(
          item => {
            this.stringArray1.push(item);
            return item
          }
        )

      },
    );


    this.feedData();
  }



  feedData() {
    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetmodelAll().subscribe(
      data => {
        //    console.log(JSON.stringify(data));
        //      this.mProductArray = data.result;
        //    console.log(this.mProductArray);
        //     console.log(JSON.stringify(this.mProductArray));
        this.mProductArray2 = data.result.map(
          item => {
            //     item.isGold = "a"
            //   console.log(item);
            //                  var image = item.image;
            //               if (image != null) {
            //              item.image = this.networkService.productImageURL + item.image
            //              }
            return item
          }
        )

        this.mSearchProductArray = data.result;

        if (this.firstTimeFlag == true) {
          this.mProductArrayForFilter = data.result;
          this.mProductArray = data.result;


        }
        //  console.log(this.mProductArray);
        //        this.getOutOfStock();
      },
    );

    //   console.log(this.mProductArrayForFilter);
    //   console.log(this.mProductArray);




  }

  getOutOfStock(): number {

    return 1150;
  }

  edit(id: string) {
    this.router.navigate([`/model-edit/${id}`])
    // this.router.navigate([`/stock/tbEquipment-edit/${id}`])
  }


  Add(id: string) {
    this.router.navigate([`/model-create/${id}`])
    //  this.router.navigate([`/stock/tbEquipment-create/${id}`])
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


  selectionChanged(event: any) {
    // console.log("PPPPPPPPPPPPPPPP");



    console.log("caqwe");
    console.log(this.mProductArray2);

    this.mProductArray = this.mProductArray2.filter(
      product => {
        //    return product.hardware_Type.toLowerCase().indexOf(this.filterSelected.toLowerCase()) > -1
        return product.hardware_Type.endsWith(this.filterSelected)
        //    return product.hardware_Type.toLowerCase().indexOf(this.filterSelected.toLowerCase()) > -1
      }
    );



    // this.feedData();
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
        this.networkService.Deletemodel(id).subscribe(
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

