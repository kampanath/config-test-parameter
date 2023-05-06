
import { Component, OnInit, Pipe, ElementRef, ViewChild } from '@angular/core';
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
import { DatePipe } from '@angular/common';

import { ate_equipment_cal } from 'src/app/models/ate_equipment_cal.model'
import { Ate_Equipment_cal222 } from 'src/app/models/Ate_Equipment_cal222.model'
import { ate_equipment_cal_loc, ate_equipment_cal_locBy } from 'src/app/models/ate_equipment_cal_loc.model'
import { ate_equipment_cal_ateNo, ate_equipment_cal_ateNoBy } from 'src/app/models/ate_equipment_cal_ateNo.model'

declare var require: any
@Component({
  selector: 'app-equipment-cal',
  templateUrl: './equipment-cal.component.html',
  styleUrls: ['./equipment-cal.component.css']
})

export class EquipmentCalComponent implements OnInit {

  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;

  file: File | null = null;

  // mProductArray: TbEquipment[] = null;
  mProductArray: Ate_Equipment_cal222[] = null;

  mProductArray2: Ate_Equipment_cal222[] = null;

  mProductArrayForFilter: Ate_Equipment_cal222[] = null;

  mSearchProductArray: Ate_Equipment_cal222[] = null;

  mProductDropDown: ate_equipment_cal_loc[] = null;
  mProductDropDown2: ate_equipment_cal_ateNo[] = null;

  foods: string[] = ["aaaa", "bbbb"]

  searchTextChanged = new Subject<string>();
  filterSelected: string = "";
  filterSelected2: string = "";

  testText: string;

  firstTimeFlag: boolean = true;

  stringArray1: ate_equipment_cal_loc[] = []
  stringArray2: ate_equipment_cal_ateNo[] = []
  

  stringEmpty = new ate_equipment_cal_loc();
  stringEmpty2 = new ate_equipment_cal_ateNo();

  LocationFilter: string;
  ateNoFilter: string;
  stringFilter: string;

  textTestDownload: string = "ZZXXX"

  param1 : string = "";





  constructor(private router: Router, private networkService: NetworkService) { }

  ngOnInit() {

    console.log("ccccccccceddd");

    this.stringEmpty.location = "5";
    this.stringEmpty2.aTE_No = "4";
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

  //  this.stringArray1.push("All");
 //   this.stringArray2.push("All");
    /*
        this.networkService.GettbAteconfigFileByHardwareType().subscribe(
          data => {
    
            this.mProductDropDown = data.result.map(
              item => {
                this.stringArray1.push(item);
                return item
              }
            )
    
          },
        );
    */

   this.param1 = "%&%";
      //   this.networkService.getProductAll().subscribe(
        this.networkService.GetequipmentCalAll(this.param1).subscribe(
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
    
    
            //        this.getOutOfStock();
          },
        );



    this.networkService.GetequipmentCalByLocation().subscribe(
      data => {

        this.mProductDropDown = data.result.map(
          item => {
            console.log(item);
            this.stringArray1.push(item);
            return item
          }
        )
        console.log(this.stringArray1);
       
      },
    );


    this.feedData();
  }


  
  startFilter()
  {
/*
   if(this.tempText == null)
   {
    this.tempText = "1990-1-1";
   }

   if(this.tempText2 == null)
   {
    this.tempText2 =   this.tempDate.year;
   
   }
*/
   // this.param1 ="%&%&";
/*
   if(this.FixtureNameFilter == undefined )
   {
    this.FixtureNameFilter = '%';
   }

   if(this.FixtureNameFilter == "All" )
   {
    this.FixtureNameFilter = '%';
   }
*/
    this.param1 = this.LocationFilter + "&" + this.ateNoFilter ;
    console.log("param1 string");
    console.log(this.param1);
    this.feedData();
  }


  feedData() {

    this.stringFilter = this.LocationFilter + '&' + this.ateNoFilter;
  

    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetequipmentCalAll(this.param1).subscribe(
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


        //        this.getOutOfStock();
      },
    );

    //   console.log(this.mProductArrayForFilter);
    //   console.log(this.mProductArray);



    /*--------------------------------------------------------------*/

    console.log("9999999999999");
    this.stringArray2.length = 0;
    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetequipmentCalForFilterLocation(this.LocationFilter).subscribe(
      data => {
        //    console.log(JSON.stringify(data));
        //      this.mProductArray = data.result;
        //    console.log(this.mProductArray);
        //     console.log(JSON.stringify(this.mProductArray));
        this.mProductDropDown2 = data.result.map(
          item => {
            //     item.isGold = "a"
            console.log("AAAASSSSSSSS");
            console.log(item);
            //                  var image = item.image;
            //               if (image != null) {
            //              item.image = this.networkService.productImageURL + item.image
            //              }
            this.stringArray2.push(item);
            return item
          }
        )
        //        this.getOutOfStock();
      },
    );


    /*----------------------------------------------------------------*/

    /*--------------------------------------------------------------*/
/*
    this.stringArray1.length = 0;

    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetequipmentCalForFilterLocation(this.LocationFilter).subscribe(
      data => {
        //    console.log(JSON.stringify(data));
        //      this.mProductArray = data.result;
        //    console.log(this.mProductArray);
        //     console.log(JSON.stringify(this.mProductArray));
        this.mProductDropDown = data.result.map(
          item => {
            //     item.isGold = "a"
            //   console.log(item);
            //                  var image = item.image;
            //               if (image != null) {
            //              item.image = this.networkService.productImageURL + item.image
            //              }
            this.stringArray1.push(item);
            return item
          }
        )
        //        this.getOutOfStock();
      },
    );
      */
    /*----------------------------------------------------------------*/

  }

  clearFilter() {
    console.log("sa");
    this.ateNoFilter = undefined;
    this.LocationFilter = undefined;
    /*--------------------------------------------------------------*/
/*
    console.log("9999999999999");
    this.stringArray2.length = 0;
    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetequipmentCalForFilterATE_No(this.ateNoFilter).subscribe(
      data => {
        //    console.log(JSON.stringify(data));
        //      this.mProductArray = data.result;
        //    console.log(this.mProductArray);
        //     console.log(JSON.stringify(this.mProductArray));
        this.mProductDropDown2 = data.result.map(
          item => {
            //     item.isGold = "a"
            console.log("AAAASSSSSSSS");
            console.log(item);
            //                  var image = item.image;
            //               if (image != null) {
            //              item.image = this.networkService.productImageURL + item.image
            //              }
            this.stringArray2.push(item);
            return item
          }
        )
        //        this.getOutOfStock();
      },
    );
*/

    /*----------------------------------------------------------------*/

    /*--------------------------------------------------------------*/
/*
    this.stringArray1.length = 0;

    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetequipmentCalForFilterLocation(this.LocationFilter).subscribe(
      data => {
        //    console.log(JSON.stringify(data));
        //      this.mProductArray = data.result;
        //    console.log(this.mProductArray);
        //     console.log(JSON.stringify(this.mProductArray));
        this.mProductDropDown = data.result.map(
          item => {
            //     item.isGold = "a"
            //   console.log(item);
            //                  var image = item.image;
            //               if (image != null) {
            //              item.image = this.networkService.productImageURL + item.image
            //              }
            this.stringArray1.push(item);
            return item
          }
        )
        //        this.getOutOfStock();
      },
    );
*/
    /*----------------------------------------------------------------*/

  }

  addNewProfile() {
    this.router.navigate(["/ProfileATE-create"])
    // this.router.navigate([`/stock/tbEquipment-edit/${id}`])
  }

  getOutOfStock(): number {

    return 1150;
  }

  edit(id: string) {
    this.router.navigate([`/EquipmentCalEdit/${id}`])
    // this.router.navigate([`/stock/tbEquipment-edit/${id}`])
  }

  Add() {
    this.router.navigate(["/EquipmentCalCreate"])
    //  this.router.navigate([`/stock/tbEquipment-create/${id}`])
  }

  selectionChanged(event: any) {
    // console.log("PPPPPPPPPPPPPPPP");

    this.LocationFilter = this.filterSelected;
    console.log("PPPPPPPPPPPPPPPP");
    console.log(this.LocationFilter);
    /*
        this.mProductArray = this.mProductArray2.filter(
          product => {
          
            return product.configType.endsWith(this.filterSelected)
        
          }


        );

    */

    this.feedData();

  }

  selectionChanged2(event: any) {
    // console.log("PPPPPPPPPPPPPPPP");

    this.ateNoFilter = this.filterSelected2;
   this.feedData();

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

