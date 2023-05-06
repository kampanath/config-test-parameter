

import { Component, OnInit, ElementRef, ViewChild, Input, AfterContentInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TbUutname } from 'src/app/models/tbUutname.model';
import { euipmentCalMaxID, euipmentCalMaxIDBy } from 'src/app/models/euipmentCalMaxID.model';

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
import { invalid } from '@angular/compiler/src/render3/view/util';
declare var require: any;



@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipment-create.component.html',
  styleUrls: ['./equipment-create.component.css']
})
export class EquipmentCreateComponent implements OnInit {

  mProduct: Ate_Equipment_cal222 = new Ate_Equipment_cal222();
  myMaxID:euipmentCalMaxID = new euipmentCalMaxID();
  

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
  
  
      this.networkService.GetequipmentCalByID2().subscribe(
        data => {
  
          this.myMaxID = data.result;
          this.mProduct.equipment_ID = this.myMaxID.maxIdmax;
          this.mProduct.equipment_ID++;
          this.mProduct.cal_Cycle=0;
        
        },
      );
  
  
  
  
    }
  
    nextCalDateChange(event: any) {
  
      let newDate = new Date(this.fileInput.nativeElement.value);
  
  
  
      this.mProduct.next_Cal_Due_Date = newDate;
  
    
  
    }
  
    lastCalDateChange(event: any) {
  
      let newDate2 = new Date(this.fileInput2.nativeElement.value);
  
  
      this.mProduct.last_Cal_Date = newDate2;
  
     

  
    }


  submit() {


    let newDate = new Date(this.fileInput.nativeElement.value);
    newDate.setDate((newDate.getDate() + 1));
    this.mProduct.next_Cal_Due_Date = newDate;

    let newDate2 = new Date(this.fileInput2.nativeElement.value);

    newDate2.setDate((newDate2.getDate() + 1));
    this.mProduct.last_Cal_Date = newDate2;



    //String Not NULL
    if (this.mProduct.equipment_Name == null) {
      Swal.fire(
        'Error',
        'Equipment name can not be blank',
        'error'
      )
      return;
    }
    if (this.mProduct.equipment_Name.replace(/\s/g, "") == "") {
      Swal.fire(
        'Error',
        'Equipment name can not be blank',
        'error'
      )
      return;
    }


   


    if ( isNaN(this.mProduct.next_Cal_Due_Date.getSeconds())  ) {
      Swal.fire(
        'Error',
        'Next cal date can not be blank',
        'error'
      )
      return;
    }


    if ( isNaN(this.mProduct.last_Cal_Date.getSeconds())  ) {
      Swal.fire(
        'Error',
        'Last cal date can not be blank',
        'error'
      )
      return;
    }



    this.networkService.AddequipmentCal(this.mProduct).subscribe(
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