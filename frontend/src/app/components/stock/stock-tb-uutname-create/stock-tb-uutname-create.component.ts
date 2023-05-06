import { Component, OnInit } from '@angular/core';
import { TbUutname } from "src/app/models/TbUutname.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tb-uutname-create',
  templateUrl: './stock-tb-uutname-create.component.html',
  styleUrls: ['./stock-tb-uutname-create.component.css']
})
export class StockTbUutnameCreateComponent implements OnInit {

  mProduct: TbUutname = null;
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


    this.networkService.GetTbUutnameByID(id).subscribe(
      data => {

        this.mProduct = data.result
      },
    );


  }

  submit() {
    //Not Allow Null
    if (this.mProduct.uutname == "" || this.mProduct.modelId == null || this.mProduct.factoryId == null) {
      Swal.fire(
        'Error',
        'uutname ,modelId and factoryId can not be blank',
        'error'
      )
      return;
    }

    //Type Bit Not Allow Null, accept only text "true" or "false"
    if (this.mProduct.calrequire.toString() != "true" && this.mProduct.calrequire.toString() != "false") {
      Swal.fire(
        'Error',
        'CALRequire value can be only "true" or "false"',
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

    }


    this.networkService.AddTbUutname(this.mProduct).subscribe(
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
 

}
