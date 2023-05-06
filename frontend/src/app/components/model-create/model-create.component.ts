import { Component, OnInit } from '@angular/core';
import { TbUutname } from "src/app/models/TbUutname.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { model2 } from "src/app/models/model2.model";

@Component({
  selector: 'app-model-create',
  templateUrl: './model-create.component.html',
  styleUrls: ['./model-create.component.css']
})
export class ModelCreateComponent implements OnInit {

  mProduct: model2 = null;
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


    this.networkService.GetmodelByID(id).subscribe(
      data => {

        this.mProduct = data.result
      },
    );


  }

  submit() {

      //String Not NULL
      if (this.mProduct.hardware_Type.replace(/\s/g, "") == "") {
        Swal.fire(
          'Error',
          'Hardware type can not be blank',
          'error'
        )
        return;
      }
    

    this.networkService.Addmodel(this.mProduct).subscribe(
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
