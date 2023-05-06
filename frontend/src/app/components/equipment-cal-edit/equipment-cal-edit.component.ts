

import { Component, OnInit, ElementRef, ViewChild, Input, AfterContentInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TbUutname } from 'src/app/models/tbUutname.model';
import { Location, registerLocaleData } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { tbAteconfigFile } from 'src/app/models/tbAteconfigFile.model';
import { ate_equipment_cal } from 'src/app/models/ate_equipment_cal.model';
import { Ate_Equipment_cal222 } from 'src/app/models/Ate_Equipment_cal222.model';
import localeIt from '@angular/common/locales/it';
import localeEnGb from '@angular/common/locales/en-GB';

import sha256 from 'crypto-js/sha256';
declare var require: any;



@Component({
  selector: 'app-equipment-cal-edit',
  templateUrl: './equipment-cal-edit.component.html',
  styleUrls: ['./equipment-cal-edit.component.css']
})
export class EquipmentCalEditComponent implements OnInit {

  mProduct: Ate_Equipment_cal222 = null;

  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
  @ViewChild("fileInput2", { static: false }) fileInput2: ElementRef;

  tempDate: string = "2020-05-13";

  file: File | null = null;

  picker2: Date;

  observerFlag: boolean = false;

  lastCalDateStr: string = "";
  nextCalDateStr: string = "";

  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }



  ngOnInit() {

    registerLocaleData(localeIt, 'it-IT');
    registerLocaleData(localeEnGb, 'en-GB');

    this.activatedRoute.params.subscribe((params) => {



      this.feedData(params.id);


    });


  }


  feedData(id: string) {


    this.networkService.GetequipmentCalByID(id).subscribe(
      data => {

        //  this.observerFlag = true;
        this.mProduct = data.result



      },
    );




  }

  nextCalDateChange(event: any) {

    let newDate = new Date(this.fileInput.nativeElement.value);



    this.mProduct.next_Cal_Due_Date = newDate;

    console.log("this.mProduct.next_Cal_Due_Date");
    console.log(this.mProduct.next_Cal_Due_Date);

  }

  lastCalDateChange(event: any) {

    let newDate2 = new Date(this.fileInput2.nativeElement.value);


    this.mProduct.last_Cal_Date = newDate2;

    console.log("this.mProduct.last_Cal_Date");
    console.log(this.mProduct.last_Cal_Date);


  }


  submit() {


    let newDate = new Date(this.fileInput.nativeElement.value);
    newDate.setDate((newDate.getDate() + 1));
    this.mProduct.next_Cal_Due_Date = newDate;

    let newDate2 = new Date(this.fileInput2.nativeElement.value);

    newDate2.setDate((newDate2.getDate() + 1));
    this.mProduct.last_Cal_Date = newDate2;



    //String Not NULL
    if (this.mProduct.equipment_Name.replace(/\s/g, "") == "") {
      Swal.fire(
        'Error',
        'Equipment name can not be blank',
        'error'
      )
      return;
    }

    this.networkService.EditequipmentCal(this.mProduct, this.mProduct.equipment_ID.toString()).subscribe(
      data => {

        Swal.fire(
          'successfully',
          'Data has been saved',
          'success'
        )
        //  alert(data.message);
        this.localtion.back();
      },
    );


  }

  cancel() {
    this.localtion.back();
  }




}