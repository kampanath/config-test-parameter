import { Component, OnInit } from '@angular/core';
import { a9522b_imei } from "src/app/models/a9522b_imei.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imei-create',
  templateUrl: './imei-create.component.html',
  styleUrls: ['./imei-create.component.css']
})
export class ImeiCreateComponent implements OnInit {

  mProduct: a9522b_imei = null;
  imageSrc: string | ArrayBuffer = null;

  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {


    this.activatedRoute.params.subscribe((params) => {

      console.log(params.id)
      this.feedData(params.id);

    });
  }

  feedData(id: string) {


    this.networkService.Geta9522b_imeiByID(id).subscribe(
      data => {

        this.mProduct = data.result
      },
    );


  }


submit() {
 


  this.networkService.Adda9522b_imei(this.mProduct).subscribe(
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
