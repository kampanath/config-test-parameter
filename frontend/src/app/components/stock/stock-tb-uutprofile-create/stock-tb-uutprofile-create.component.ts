import { Component, OnInit } from '@angular/core';
import { TbUutprofile } from "src/app/models/tbUutprofile.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tb-uutprofile-create',
  templateUrl: './stock-tb-uutprofile-create.component.html',
  styleUrls: ['./stock-tb-uutprofile-create.component.css']
})
export class StockTbUutprofileCreateComponent implements OnInit {

  
  mProduct: TbUutprofile = null;
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


    this.networkService.GetTbUutprofileByID(id).subscribe(
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
    if (this.mProduct.uutprofileId == null || this.mProduct.profileId == null || this.mProduct.uutnameId == null) {
      Swal.fire(
        'Error',
        'uutprofileId ,profileId and uutnameId can not be blank',
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

    this.networkService.AddTbUutprofile(this.mProduct).subscribe(
      data => {

        Swal.fire(
          'successfully',
          'Data has been saved',
          'success'
        )
        //alert(data.message);
        this.localtion.back();
      },
    );
  }

  cancel() {
    this.localtion.back();
  }
}
