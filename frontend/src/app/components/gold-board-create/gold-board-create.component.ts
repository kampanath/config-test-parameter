import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ate_gold_board } from "src/app/models/ate_gold_board.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gold-board-create',
  templateUrl: './gold-board-create.component.html',
  styleUrls: ['./gold-board-create.component.css']
})
export class GoldBoardCreateComponent implements OnInit {

  mProduct: ate_gold_board = null;
  imageSrc: string | ArrayBuffer = null;

  @ViewChild('pRef', {static: false}) pRef: ElementRef;

  tempText: string = null;

  tempDate : Date = new Date();

  IsdateSetted : boolean = false;

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


    this.networkService.Getate_gold_boardBySN(id).subscribe(
      data => {

        this.mProduct = data.result
      },
    );


  }

 

  submit() {

      //String Not NULL
      if (this.mProduct.serial_no.replace(/\s/g, "") == "") {
        Swal.fire(
          'Error',
          'Serial number can not be blank',
          'error'
        )
        return;
      }

       //String Not NULL
       if (this.mProduct.model_no.replace(/\s/g, "") == "") {
        Swal.fire(
          'Error',
          'Model number can not be blank',
          'error'
        )
        return;
      }
   
    this.networkService.Addate_gold_board(this.mProduct).subscribe(
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
