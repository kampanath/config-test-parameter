import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TbUutname } from 'src/app/models/tbUutname.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tb-uutname-edit',
  templateUrl: './stock-tb-uutname-edit.component.html',
  styleUrls: ['./stock-tb-uutname-edit.component.css']
})
export class StockTbUutnameEditComponent implements OnInit {

  mProduct: TbUutname = null;

  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

   
    
  
    this.activatedRoute.params.subscribe((params) => {
  

      console.log( params.id)
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

    if(this.mProduct.uutname == "" || this.mProduct.modelId == null || this.mProduct.factoryId == null  )
    {
      Swal.fire(
        'Error',
        'uutname ,modelId and factoryId can not be blank',
        'error'
      )
      return;
    }

    if( this.mProduct.calrequire.toString() != "true" && this.mProduct.calrequire.toString() != "false" )
    {
      Swal.fire(
        'Error',
        'CALRequire value can be only "true" or "false"',
        'error'
      )
      return;
    }

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

  
    this.networkService.EditTbUutname(this.mProduct, this.mProduct.uutnameId.toString()).subscribe(
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