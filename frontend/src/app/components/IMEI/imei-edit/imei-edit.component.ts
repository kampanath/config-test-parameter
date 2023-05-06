import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TbUutname } from 'src/app/models/tbUutname.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { a9522b_imei } from 'src/app/models/a9522b_imei.model';
import { a9523_imei } from 'src/app/models/a9523_imei.model';
import { a9522b_ext_imei } from 'src/app/models/a9522b_ext_imei.model';
import { Router } from '@angular/router';

import { a9523_ext_imei } from 'src/app/models/a9523_ext_imei.model';


import { a9523mw_imei } from 'src/app/models/a9523mw_imei.model';

import { a9523mw_ext_imei } from 'src/app/models/a9523mw_ext_imei.model';


import { a9523ptt_imei } from 'src/app/models/a9523ptt_imei.model';


import { a9555a_imei } from 'src/app/models/a9555a_imei.model';


import { a9555a_ext_imei } from 'src/app/models/a9555a_ext_imei.model';


import { a9555a_gsa_imei } from 'src/app/models/a9555a_gsa_imei.model';


import { a9575_imei } from 'src/app/models/a9575_imei.model';


import { a9575_ext_imei } from 'src/app/models/a9575_ext_imei.model';


import { a9575e_imei } from 'src/app/models/a9575e_imei.model';


import { a9575e_ext_imei } from 'src/app/models/a9575e_ext_imei.model';


import { a9575gsa_imei } from 'src/app/models/a9575gsa_imei.model';


import { a9575ptt_imei } from 'src/app/models/a9575ptt_imei.model';

import { a9575ptt_ext_imei } from 'src/app/models/a9575ptt_ext_imei.model';


import { a9602_imei } from 'src/app/models/a9602_imei.model';


import { a9602n_ext_imei } from 'src/app/models/a9602n_ext_imei.model';


import { a9602r_imei } from 'src/app/models/a9602r_imei.model';


import { a9602sb_imei } from 'src/app/models/a9602sb_imei.model';


import { a9602sb_ext_imei } from 'src/app/models/a9602sb_ext_imei.model';


import { a9603_imei } from 'src/app/models/a9603_imei.model';


import { a9603r_imei } from 'src/app/models/a9603r_imei.model';


import { bcx_imei } from 'src/app/models/bcx_imei.model';

import { gdb_imei } from 'src/app/models/gdb_imei.model';

import { sfx_imei } from 'src/app/models/sfx_imei.model';

@Component({
  selector: 'app-imei-edit',
  templateUrl: './imei-edit.component.html',
  styleUrls: ['./imei-edit.component.css']
})
export class ImeiEditComponent implements OnInit {

  mProduct: any = null;
  id: string;
  id2: string = "NO_CLEAR";
  constructor(
    private localtion: Location,
    private router: Router,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


    this.activatedRoute.params.subscribe((params) => {


      //   console.log(params.id)
      this.feedData(params.id);
      this.id = params.id;
      if (this.id == "9522b") {

        return this.mProduct as a9522b_imei;

      }
      if (this.id == "9522b_ext") {

        return this.mProduct as a9522b_ext_imei;

      }
      if (this.id == "9523") {

        return this.mProduct as a9523_imei;

      }
      if (this.id == "9523_ext") {

        return this.mProduct as a9523_ext_imei;

      }
      if (this.id == "9523mw_ext") {

        return this.mProduct as a9523mw_ext_imei;

      }
      if (this.id == "9523mw") {

        return this.mProduct as a9523mw_imei;

      }
      if (this.id == "9523ptt") {

        return this.mProduct as a9523ptt_imei;

      }
      if (this.id == "9555a_ext") {

        return this.mProduct as a9555a_ext_imei;

      }
      if (this.id == "9555a_gsa") {

        return this.mProduct as a9555a_gsa_imei;

      }
      if (this.id == "9555a") {

        return this.mProduct as a9555a_imei;

      }
      if (this.id == "9575_ext") {

        return this.mProduct as a9575_ext_imei;

      }
      if (this.id == "9575") {

        return this.mProduct as a9575_imei;

      }
      if (this.id == "9575e_ext") {

        return this.mProduct as a9575e_ext_imei;

      }
      if (this.id == "9575e") {

        return this.mProduct as a9575e_imei;

      }
      if (this.id == "9575gsa") {

        return this.mProduct as a9575gsa_imei;

      }
      if (this.id == "9575ptt_ext") {

        return this.mProduct as a9575ptt_ext_imei;

      }
      if (this.id == "9575ptt") {

        return this.mProduct as a9575ptt_imei;

      }
      if (this.id == "9602") {

        return this.mProduct as a9602_imei;

      }
      if (this.id == "9602n_ext") {

        return this.mProduct as a9602n_ext_imei;

      }
      if (this.id == "9602r") {

        return this.mProduct as a9602r_imei;

      }
      if (this.id == "9602sb_ext") {

        return this.mProduct as a9602sb_ext_imei;

      }
      if (this.id == "9602sb") {

        return this.mProduct as a9602sb_imei;

      }
      if (this.id == "9603") {

        return this.mProduct as a9603_imei;

      }
      if (this.id == "9603r") {

        return this.mProduct as a9603r_imei;

      }
      if (this.id == "bcx") {

        return this.mProduct as bcx_imei;

      }
      if (this.id == "gdb") {

        return this.mProduct as gdb_imei;

      }
      if (this.id == "sfx") {

        return this.mProduct as sfx_imei;

      }

    });
  }

  feedData(id: string) {

    if (this.networkService.tempString3 == "9522b") {
      this.networkService.Geta9522b_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result
        },
      );
    }
    else if (this.networkService.tempString3 == "9522b_ext") {
      this.networkService.Geta9522b_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result
        },
      );

    }
    else if (this.networkService.tempString3 == "9523") {
      this.networkService.Geta9523_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result
        },
      );

    }
    else if (this.networkService.tempString3 == "9523_ext") {
      this.networkService.Geta9523_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9523mw") {
      this.networkService.Geta9523mw_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9523mw_ext") {
      this.networkService.Geta9523mw_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9523ptt") {
      this.networkService.Geta9523ptt_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9555a_ext") {
      this.networkService.Geta9555a_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9555a_gsa") {
      this.networkService.Geta9555a_gsa_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9555a") {
      this.networkService.Geta9555a_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9575_ext") {
      this.networkService.Geta9575_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9575") {
      this.networkService.Geta9575_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9575e_ext") {
      this.networkService.Geta9575e_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9575e") {
      this.networkService.Geta9575e_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9575gsa") {
      this.networkService.Geta9575gsa_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9575ptt_ext") {
      this.networkService.Geta9575ptt_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9575ptt") {
      this.networkService.Geta9575ptt_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9602") {
      this.networkService.Geta9602_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9602n_ext") {
      this.networkService.Geta9602n_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9602r") {
      this.networkService.Geta9602r_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9602sb_ext") {
      this.networkService.Geta9602sb_ext_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9602sb") {
      this.networkService.Geta9602sb_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9603") {
      this.networkService.Geta9603_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "9603r") {
      this.networkService.Geta9603r_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "bcx") {
      this.networkService.Getbcx_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "gdb") {
      this.networkService.Getgdb_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }
    else if (this.networkService.tempString3 == "sfx") {
      this.networkService.Getsfx_imeiByID(id).subscribe(
        data => {

          this.mProduct = data.result;


        },
      );
    }






  }


  submit() {


    if (this.networkService.tempString3 == "9522b") {
      this.networkService.Edita9522b_imei(this.mProduct, this.mProduct.id9522b_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();
          //      this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9522b_ext") {
      this.networkService.Edita9522b_ext_imei(this.mProduct, this.mProduct.id9522b_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9523") {
      this.networkService.Edita9523_imei(this.mProduct, this.mProduct.id9523_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9523_ext") {
      this.networkService.Edita9523_ext_imei(this.mProduct, this.mProduct.id9523_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9523mw_ext") {
      this.networkService.Edita9523mw_ext_imei(this.mProduct, this.mProduct.id9523mw_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9523mw") {
      this.networkService.Edita9523mw_imei(this.mProduct, this.mProduct.id9523mw_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9523ptt") {
      this.networkService.Edita9523ptt_imei(this.mProduct, this.mProduct.id9523ptt_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9555a_ext") {
      this.networkService.Edita9555a_ext_imei(this.mProduct, this.mProduct.id9555a_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9555a_gsa") {
      this.networkService.Edita9555a_gsa_imei(this.mProduct, this.mProduct.id9555a_gsa_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9555a") {
      this.networkService.Edita9555a_imei(this.mProduct, this.mProduct.id9555a_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9575_ext") {
      this.networkService.Edita9575_ext_imei(this.mProduct, this.mProduct.id9575_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9575") {
      this.networkService.Edita9575_imei(this.mProduct, this.mProduct.id9575_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9575e_ext") {
      this.networkService.Edita9575e_ext_imei(this.mProduct, this.mProduct.id9575e_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9575e") {
      this.networkService.Edita9575e_imei(this.mProduct, this.mProduct.id9575e_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9575gsa") {
      this.networkService.Edita9575gsa_imei(this.mProduct, this.mProduct.id9575gsa_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9575ptt_ext") {
      this.networkService.Edita9575ptt_ext_imei(this.mProduct, this.mProduct.id9575ptt_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9575ptt") {
      this.networkService.Edita9575ptt_imei(this.mProduct, this.mProduct.id9575ptt_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9602") {
      this.networkService.Edita9602_imei(this.mProduct, this.mProduct.id9602_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9602n_ext") {
      this.networkService.Edita9602n_ext_imei(this.mProduct, this.mProduct.id9602n_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9602r") {
      this.networkService.Edita9602r_imei(this.mProduct, this.mProduct.id9602r_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9602sb_ext") {
      this.networkService.Edita9602sb_ext_imei(this.mProduct, this.mProduct.id9602sb_ext_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9602sb") {
      this.networkService.Edita9602sb_imei(this.mProduct, this.mProduct.id9602sb_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9603") {
      this.networkService.Edita9603_imei(this.mProduct, this.mProduct.id9603_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "9603r") {
      this.networkService.Edita9603r_imei(this.mProduct, this.mProduct.id9603r_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "bcx") {
      this.networkService.Editbcx_imei(this.mProduct, this.mProduct.idbcx_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "gdb") {
      this.networkService.Editgdb_imei(this.mProduct, this.mProduct.idgdb_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }
    else if (this.networkService.tempString3 == "sfx") {
      this.networkService.Editsfx_imei(this.mProduct, this.mProduct.idsfx_imei.toString()).subscribe(
        data => {

          Swal.fire(
            'successfully',
            'Data has been saved',
            'success'
          )
          //  alert(data.message);
          this.localtion.back();

          //  this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
        },
      );
    }




  }

  
  cancel() {

    this.localtion.back();
    // this.router.navigate([`/IMEI/ShowTable/${this.networkService.tempString3}/${this.id2}`])
  }


}