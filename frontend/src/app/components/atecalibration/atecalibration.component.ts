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

import { ate_equipment_cal } from 'src/app/models/ate_equipment_cal.model'
import { ate_equipment_cal_loc, ate_equipment_cal_locBy } from 'src/app/models/ate_equipment_cal_loc.model'
import { ate_equipment_cal_ateNo, ate_equipment_cal_ateNoBy } from 'src/app/models/ate_equipment_cal_ateNo.model'

import { ateCalibration } from 'src/app/models/ateCalibration.model'
import { atecalibrationATEName, atecalibrationATENameBy } from 'src/app/models/atecalibrationATEName.model'
import { atecalibrationFixtureName, atecalibrationFixtureNameBy } from 'src/app/models/atecalibrationFixtureName.model'

declare var require: any
@Component({
  selector: 'app-atecalibration',
  templateUrl: './atecalibration.component.html',
  styleUrls: ['./atecalibration.component.css']
})

export class ATECalibrationComponent implements OnInit {

  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;

  file: File | null = null;


  @ViewChild('pRef', { static: false }) pRef: ElementRef;

  @ViewChild('pRef2', { static: false }) pRef2: ElementRef;

  tempText: string = null;

  tempDate: Date = new Date();

  IsdateSetted: boolean = false;

  tempText2: string = null;

  tempDate2: Date = new Date();

  IsdateSetted2: boolean = false;


  // mProductArray: TbEquipment[] = null;
  mProductArray: ateCalibration[] = null;

  mProductArray2: ateCalibration[] = null;

  mProductArrayForFilter: ateCalibration[] = null;

  mSearchProductArray: ateCalibration[] = null;

  mProductDropDown: atecalibrationATEName[] = null;
  mProductDropDown2: atecalibrationFixtureName[] = null;

  foods: string[] = ["aaaa", "bbbb"]

  searchTextChanged = new Subject<string>();
  filterSelected: string = "";
  filterSelected2: string = "";

  testText: string;

  firstTimeFlag: boolean = true;

  stringArray1: string[] = []
  stringArray2: string[] = []


  stringEmpty = new atecalibrationATEName();
  stringEmpty2 = new atecalibrationFixtureName();

  FixtureNameFilter: string;
  ateNameFilter: string;
  stringFilter: string;

  textTestDownload: string = "ZZXXX"

  showAll : boolean = true;

  param1 : string ="%&%&";

  currentDate : string[]= [];


  constructor(private router: Router, private networkService: NetworkService) { }



    /*
      //for default filter-> text input
    this.filterSelected = "ADE FTO";
    this.filterSelected2 = "All";
    this.ateNameFilter = this.filterSelected;
    this.FixtureNameFilter = this.filterSelected2;

    //for default filter-> start date input 
    this.IsdateSetted = true;
    this.tempText = "2017-01-02";
    //this.pRef.nativeElement.value = this.tempText;

    //for default filter-> end date input 
    this.IsdateSetted2 = true;
    this.tempText2 = "2023-01-05";
    //this.pRef.nativeElement.value = this.tempText2;

    this.startFilter();

  */

  ngOnInit() {

  this.stringEmpty.stationName = "5";
  this.stringEmpty2.fixtureName = "4";

 //2020-06-30T09:31:50.763Z
  this.currentDate = this.tempDate2.toISOString().split('T');

        this.networkService.ateCalAllToday("%&%&"+ this.currentDate[0] +"&"+this.currentDate[0]).subscribe(
          data => {
    
            this.mProductArray = data.result.map(
              item => {
                return item
              }
            )
    
          },
        );


       

    this.networkService.GetTbAteCalByATENameColumn().subscribe(
      data => {

        this.mProductDropDown = data.result.map(
          item => {
            this.stringArray1.push(item.stationName);
            return item
          }
        )
      },
    );

    this.feedData();

    //for default filter
    setTimeout(() => {
          //for default filter-> text input
      this.filterSelected = "ADE FTO";
      this.filterSelected2 = "All";
      this.ateNameFilter = this.filterSelected;
      this.FixtureNameFilter = this.filterSelected2;

      //for default filter-> start date input 
      this.IsdateSetted = true;
      this.tempText = "2017-01-02";
      this.pRef.nativeElement.value = this.tempText;

      //for default filter-> end date input 
      this.IsdateSetted2 = true;
      this.tempText2 = "2023-01-05";
      this.pRef2.nativeElement.value = this.tempText2;

      this.startFilter();
    }, 2000);


  } //ngOninit

  calDueDate(calDate : Date) : Date
  {
    var tempDate3 = new Date();

    tempDate3 = calDate;

      return tempDate3;
  }

  textChanged(event: any) {

    this.IsdateSetted = true;

    this.tempText = event.target.value;

    console.log(this.tempText); //2017-01-02

    this.pRef.nativeElement.value = this.tempText;
   
  }

  textChanged2(event: any) {

    this.IsdateSetted2 = true;

    this.tempText2 = event.target.value;

    this.pRef2.nativeElement.value = this.tempText2;
  
    this.feedData();
  }

  startFilter()
  {

   if(this.FixtureNameFilter == undefined )
   {
    this.FixtureNameFilter = '%';
   }

   if(this.FixtureNameFilter == "All" )
   {
    this.FixtureNameFilter = '%';
   }

    this.param1 = this.ateNameFilter + "&" + this.FixtureNameFilter + "&" + this.tempText + "&" + this.tempText2
    this.feedData();
  }

  feedData() {

    this.stringFilter = this.FixtureNameFilter + '&' + this.ateNameFilter;
   
    this.networkService.ateCalAllToday(this.param1).subscribe(
      data => {

        this.mProductArray = data.result.map(
          item => {
            return item
          }
        )

      },
    );

  
    this.stringArray2.length = 0;
   
    this.networkService.GetateCalFixtureNameByATEName(this.ateNameFilter).subscribe(
      data => {
        this.stringEmpty2.fixtureName = "All";
        this.stringArray2.push(this.stringEmpty2.fixtureName);
       
        this.mProductDropDown2 = data.result.map(
          item => {
         
            this.stringArray2.push(item.fixtureName);
            return item
          }
        )
       
      
      },
    );
  }

  clearFilter() {
    console.log("sa");
    this.ateNameFilter = undefined;
    this.FixtureNameFilter = undefined;
  }

  addNewProfile() {
    this.router.navigate(["/ProfileATE-create"])
    // this.router.navigate([`/stock/tbEquipment-edit/${id}`])
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

    this.ateNameFilter = this.filterSelected;
    this.feedData();

  }

  selectionChanged2(event: any) {
    // console.log("PPPPPPPPPPPPPPPP");

    this.FixtureNameFilter = this.filterSelected2;
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

/*import { Component, OnInit, Pipe, ElementRef, ViewChild } from '@angular/core';
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

import { ate_equipment_cal } from 'src/app/models/ate_equipment_cal.model'
import { ate_equipment_cal_loc, ate_equipment_cal_locBy } from 'src/app/models/ate_equipment_cal_loc.model'
import { ate_equipment_cal_ateNo, ate_equipment_cal_ateNoBy } from 'src/app/models/ate_equipment_cal_ateNo.model'

import { ateCalibration } from 'src/app/models/ateCalibration.model'
import { atecalibrationATEName, atecalibrationATENameBy } from 'src/app/models/atecalibrationATEName.model'
import { atecalibrationFixtureName, atecalibrationFixtureNameBy } from 'src/app/models/atecalibrationFixtureName.model'

declare var require: any
@Component({
  selector: 'app-atecalibration',
  templateUrl: './atecalibration.component.html',
  styleUrls: ['./atecalibration.component.css']
})

export class ATECalibrationComponent implements OnInit {

  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;

  file: File | null = null;


  @ViewChild('pRef', { static: false }) pRef: ElementRef;

  @ViewChild('pRef2', { static: false }) pRef2: ElementRef;

  tempText: string = null;

  tempDate: Date = new Date();

  IsdateSetted: boolean = false;

  tempText2: string = null;

  tempDate2: Date = new Date();

  IsdateSetted2: boolean = false;


  // mProductArray: TbEquipment[] = null;
  mProductArray: ateCalibration[] = null;

  mProductArray2: ateCalibration[] = null;

  mProductArrayForFilter: ateCalibration[] = null;

  mSearchProductArray: ateCalibration[] = null;

  mProductDropDown: atecalibrationATEName[] = null;
  mProductDropDown2: atecalibrationFixtureName[] = null;

  foods: string[] = ["aaaa", "bbbb"]

  searchTextChanged = new Subject<string>();
  filterSelected: string = "";
  filterSelected2: string = "";

  testText: string;

  firstTimeFlag: boolean = true;

  stringArray1: string[] = []
  stringArray2: string[] = []


  stringEmpty = new atecalibrationATEName();
  stringEmpty2 = new atecalibrationFixtureName();

  FixtureNameFilter: string;
  ateNameFilter: string;
  stringFilter: string;

  textTestDownload: string = "ZZXXX"

  showAll : boolean = true;

  param1 : string ="%&%&";

  currentDate : string[]= [];


  constructor(private router: Router, private networkService: NetworkService) { }

  ngOnInit() {


   
  //for default filter-> text input
  this.filterSelected = "ADE FTO";
  this.filterSelected2 = "All";
  this.ateNameFilter = this.filterSelected;
  this.FixtureNameFilter = this.filterSelected2;

  //for default filter-> start date input 
  this.IsdateSetted = true;
  this.tempText = "2017-01-02";
  //this.pRef.nativeElement.value = this.tempText;

  //for default filter-> end date input 
  this.IsdateSetted2 = true;
  this.tempText2 = "2023-01-05";
  //this.pRef.nativeElement.value = this.tempText2;


  this.stringEmpty.stationName = "5";
  this.stringEmpty2.fixtureName = "4";

 //2020-06-30T09:31:50.763Z
  this.currentDate = this.tempDate2.toISOString().split('T');

        this.networkService.ateCalAllToday("%&%&"+ this.currentDate[0] +"&"+this.currentDate[0]).subscribe(
          data => {
    
            this.mProductArray = data.result.map(
              item => {
                return item
              }
            )
    
          },
        );


       

    this.networkService.GetTbAteCalByATENameColumn().subscribe(
      data => {

        this.mProductDropDown = data.result.map(
          item => {
            this.stringArray1.push(item.stationName);
            return item
          }
        )
      },
    );

    this.feedData();
  } //ngOninit

  calDueDate(calDate : Date) : Date
  {
    var tempDate3 = new Date();

    tempDate3 = calDate;

      return tempDate3;
  }

  textChanged(event: any) {

    this.IsdateSetted = true;

    this.tempText = event.target.value;

    console.log(this.tempText); //2017-01-02

    this.pRef.nativeElement.value = this.tempText;
   
  }

  textChanged2(event: any) {

    this.IsdateSetted2 = true;

    this.tempText2 = event.target.value;

    this.pRef2.nativeElement.value = this.tempText2;
  
    this.feedData();
  }

  startFilter()
  {

   if(this.FixtureNameFilter == undefined )
   {
    this.FixtureNameFilter = '%';
   }

   if(this.FixtureNameFilter == "All" )
   {
    this.FixtureNameFilter = '%';
   }

    this.param1 = this.ateNameFilter + "&" + this.FixtureNameFilter + "&" + this.tempText + "&" + this.tempText2
    this.feedData();
  }

  feedData() {

    this.stringFilter = this.FixtureNameFilter + '&' + this.ateNameFilter;
   
    this.networkService.ateCalAllToday(this.param1).subscribe(
      data => {

        this.mProductArray = data.result.map(
          item => {
            return item
          }
        )

      },
    );

  
    this.stringArray2.length = 0;
   
    this.networkService.GetateCalFixtureNameByATEName(this.ateNameFilter).subscribe(
      data => {
        this.stringEmpty2.fixtureName = "All";
        this.stringArray2.push(this.stringEmpty2.fixtureName);
       
        this.mProductDropDown2 = data.result.map(
          item => {
         
            this.stringArray2.push(item.fixtureName);
            return item
          }
        )
       
      
      },
    );
  }

  clearFilter() {
    console.log("sa");
    this.ateNameFilter = undefined;
    this.FixtureNameFilter = undefined;
  }

  addNewProfile() {
    this.router.navigate(["/ProfileATE-create"])
    // this.router.navigate([`/stock/tbEquipment-edit/${id}`])
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

    this.ateNameFilter = this.filterSelected;
    this.feedData();

  }

  selectionChanged2(event: any) {
    // console.log("PPPPPPPPPPPPPPPP");

    this.FixtureNameFilter = this.filterSelected2;
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

*/