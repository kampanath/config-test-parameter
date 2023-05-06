import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ird } from 'src/app/models/ird.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imei-sub-product',
  templateUrl: './imei-sub-product.component.html',
  styleUrls: ['./imei-sub-product.component.css']
})
export class IMEISubProductComponent implements OnInit {

  mProduct: Ird = null;

  searchTextChanged = new Subject<string>();

  tempText : string;

  Sub9522 = [
    "9522b",
    "9522b_ext"
  ];

  
  Sub9523 = [
    "9523",
    "9523_ext",
    "9523mw",
    "9523mw_ext",
    "9523ptt"
  ];

  Sub9555 = [
    "9555a",
    "9555a_ext",
    "9555a_gsa"
  ];

  Sub9575 = [
    "9575",
    "9575_ext",
    "9575e",
    "9575e_ext",
    "9575gsa",
    "9575ptt",
    "9575ptt_ext"
  ];

  Sub9602 = [
    "9602",
    "9602n_ext",
    "9602r",
    "9602sb",
    "9602sb_ext"
  ];

  Sub9603 = [
    "9603",
    "9603r"
  ];

  SubOthers = [
    "bcx",
    "gdb",
    "sfx"
  ];

  SubProductName = [

  ];

  allTableArrayLink = [
    "/stock/Product",
    "/stock/UUTStatusType",
    "/stock/mySQL",
    "/stock/TbUutname",
    "/IMEI/Product"
  ];


  constructor(
    private router: Router,
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


    this.networkService.clearFlag = "CLEAR";

    //console.log(this.networkService.clearFlag);


    this.activatedRoute.params.subscribe((params) => {
    
      if (params.id == 0) {
        this.SubProductName = this.Sub9522;
      }
      else if (params.id == 1) {
        this.SubProductName = this.Sub9523;

      }
      else if (params.id == 2) {
        this.SubProductName = this.Sub9555;
      }
      else if (params.id == 3) {
        this.SubProductName = this.Sub9575;
      }
      else if (params.id == 4) {
        this.SubProductName = this.Sub9602;
      }
      else if (params.id == 5) {
        this.SubProductName = this.Sub9603;
      }
      else if (params.id == 6) {
        this.SubProductName = this.SubOthers;
      }


    });
  }

  viewTable(id: string) {
   let id2:string = "CLEAR"
   this.router.navigate([`/IMEI/ShowTable/${id}/${id2}`])

   
  }


}