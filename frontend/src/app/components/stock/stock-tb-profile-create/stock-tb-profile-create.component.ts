import { Component, OnInit } from '@angular/core';
import { Ird } from "src/app/models/ird.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { TbProfile } from 'src/app/models/tbprofile.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tb-profile-create',
  templateUrl: './stock-tb-profile-create.component.html',
  styleUrls: ['./stock-tb-profile-create.component.css']
})
export class StockTbProfileCreateComponent implements OnInit {

 
  mProduct: TbProfile = null;
  imageSrc: string | ArrayBuffer = null;

  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }




  ngOnInit() {




    this.activatedRoute.params.subscribe((params) => {


      console.log(params.id)
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
     if (this.mProduct.profileVersion == "" ) {
      Swal.fire(
        'Error',
        'profileVersion can not be blank',
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



    this.networkService.AddTbProfile(this.mProduct).subscribe(
      data => {
     //   alert(data.message);
     //   alert(data.result.profileDateCreate);
     Swal.fire(
      'successfully',
      'Data has been saved',
      'success'
    )
        this.localtion.back();
      },
    );
  }

  cancel() {
    this.localtion.back();
  }
}
