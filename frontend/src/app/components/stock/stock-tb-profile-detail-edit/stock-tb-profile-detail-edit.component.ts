import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TbProfileDetail } from 'src/app/models/tbProfileDetail.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tb-profile-detail-edit',
  templateUrl: './stock-tb-profile-detail-edit.component.html',
  styleUrls: ['./stock-tb-profile-detail-edit.component.css']
})
export class StockTbProfileDetailEditComponent implements OnInit {

  mProduct: TbProfileDetail = null;

  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {

      this.feedData(params.id);

    });
  }

  feedData(id: string) {


    this.networkService.GetTbProfileDetailByID(id).subscribe(
      data => {
        this.mProduct = data.result
      },
    );


  }


  submit() {

    //Not Allow Null
    
    if (this.mProduct.profiledetailId == null || this.mProduct.profileId == null || this.mProduct.detailSqNo == null || this.mProduct.detailTestName == "" || this.mProduct.detailLsl == null || this.mProduct.detailUsl == null || this.mProduct.detailUom == "") {
      Swal.fire(
        'Error',
        'profiledetailId, profileId, detailSqNo, detailTestName, detailLsl, detailUsl and detailUom can not be blank',
        'error'
      )
      return;
    }


     //Type Bit Allow Null, accept only text "true", "false" Null For First Time And "" For Next Time If User Type And Delete
    //First time is null
    if( this.mProduct.isActive != null )
    {                                                                        //if from null user type something then remove it become ""
      if( this.mProduct.isActive.toString() != "true" && this.mProduct.isActive.toString() != "false" && this.mProduct.isActive.toString() != "")
      {
        Swal.fire(
          'Error',
          'isActive value can be only "true" ,"false" or blank',
          'error'
        )
        return;
      }

      if(  this.mProduct.isActive.toString() == "" )
      {
        Swal.fire(
          'Error',
          'isActive value can be only "true" ,"false" or blank',
          'error'
        )
        return;
      }

    }
    
    this.networkService.EditTbProfileDetail(this.mProduct, this.mProduct.profiledetailId.toString()).subscribe(
      data => {

        Swal.fire(
          'successfully',
          'Data has been saved',
          'success'
        )
       // alert(data.message);
        this.localtion.back();
      },
    );
  }

  cancel() {
    this.localtion.back();
  }

}