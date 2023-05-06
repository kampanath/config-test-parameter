import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TbUutprofile } from 'src/app/models/tbUutprofile.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tb-uutprofile-edit',
  templateUrl: './stock-tb-uutprofile-edit.component.html',
  styleUrls: ['./stock-tb-uutprofile-edit.component.css']
})
export class StockTbUutprofileEditComponent implements OnInit {

  
  mProduct: TbUutprofile = null;

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

    if(this.mProduct.uutprofileId == null || this.mProduct.profileId == null || this.mProduct.uutnameId == null  )
    {
      Swal.fire(
        'Error',
        'uutprofileId ,profileId and uutnameId can not be blank',
        'error'
      )
      return;
    }


    if( this.mProduct.isActive.toString() != "true" && this.mProduct.isActive.toString() != "false")
    {
      Swal.fire(
        'Error',
        'isActive value can be only "true" ,"false" or blank',
        'error'
      )
      return;
    }


    this.networkService.EditTbUutprofile(this.mProduct, this.mProduct.uutprofileId.toString()).subscribe(
      data => {
        //alert(data.message);
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