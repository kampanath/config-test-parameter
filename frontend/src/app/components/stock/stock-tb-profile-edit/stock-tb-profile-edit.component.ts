import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TbProfile } from 'src/app/models/tbprofile.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tb-profile-edit',
  templateUrl: './stock-tb-profile-edit.component.html',
  styleUrls: ['./stock-tb-profile-edit.component.css']
})
export class StockTbProfileEditComponent implements OnInit {

  mProduct: TbProfile = null;

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


    this.networkService.GetTbProfileByID(id).subscribe(
      data => {
        this.mProduct = data.result
      },
    );


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


  submit() {

     //Not Allow Null
     if (this.mProduct.profileId == null || this.mProduct.profileVersion == "" ) {
      Swal.fire(
        'Error',
        'profileId and profileVersion can not be blank',
        'error'
      )
      return;
    }

    //Type Bit Not Allow Null, accept only text "true" or "false"
    if (this.mProduct.isActive.toString() != "true" && this.mProduct.isActive.toString() != "false") {
      Swal.fire(
        'Error',
        'isActive value can be only "true" or "false"',
        'error'
      )
      return;
    }

   
    this.networkService.EditTbProfile(this.mProduct, this.mProduct.profileId.toString()).subscribe(
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