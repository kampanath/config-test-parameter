import { Component, OnInit, ElementRef, ViewChild, Input, AfterContentInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TbEquipment } from 'src/app/models/tbEquipment.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tb-equipment-edit',
  templateUrl: './stock-tb-equipment-edit.component.html',
  styleUrls: ['./stock-tb-equipment-edit.component.css']
})



export class StockTbEquipmentEditComponent implements OnInit, AfterViewChecked {

  @ViewChild('pRef', { static: false }) pRef: ElementRef;


  tempText: string = null;

  mProduct: TbEquipment = null;

  tempDate: Date = new Date();

  IsdateSetted: boolean = false;

  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    public datepipe: DatePipe,
    private router: Router) { }

  ngOnInit() {





    this.activatedRoute.params.subscribe((params) => {


      //  console.log(params.id)
      this.feedData(params.id);

    });


  }

  ngAfterViewChecked() {


    //  console.log("WWWWWWWW")
    //   console.log("IsdateSetted");
    //   console.log(this.IsdateSetted);
    //   console.log(this.mProduct.equipCaldue)

    if (this.IsdateSetted == true) {



    }
    else {

      //Update date picker text to value that get from database
      this.pRef.nativeElement.value = this.mProduct.equipCaldue.toString().replace('T00:00:00', '');


    }

  }

  feedData(id: string) {


    this.networkService.GetTbEquipmentByID(id).subscribe(
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

  textChanged(event: any) {

    this.IsdateSetted = true;

    this.tempText = event.target.value;

    this.pRef.nativeElement.value = this.tempText;
    //   this.tempDate  = event.target.value;
    //   console.log(this.tempText)
    //   console.log(this.tempDate)

    //   console.log(this.pRef.nativeElement.value)
    //    console.log(this.mProduct.equipCaldue.toString().replace('T00:00:00',''))


    //  this.pRef.nativeElement.value = "1968-05-06"
    // 1968-05-06

    //  console.log("IsdateSetted");
    //   console.log(this.IsdateSetted);


  }


  submit() {



    //If User did not set then it will be default date.  So do this only when user setted date.
    if (this.IsdateSetted == true) {

      this.mProduct.equipCaldue = new Date(this.tempText);

    }
    else {

      //   console.log("submit");
      //  console.log(this.mProduct.equipModelNo);


      if (this.mProduct.equipCaldue == null) {



      }
      else {

        this.mProduct.equipCaldue = new Date(this.mProduct.equipCaldue.toString().replace('T00:00:00', ''));
      }




    }

    //String Not NULL
    if (this.mProduct.equipName.replace(/\s/g, "") == "") {
      Swal.fire(
        'Error',
        'Name can not be blank',
        'error'
      )
      return;
    }


    //Boolean NULL
    if (this.mProduct.equipIsCal != null)//First time is null
    {                                                                        //if from null user type something then remove it become ""
      if (this.mProduct.equipIsCal.toString() != "true" && this.mProduct.equipIsCal.toString() != "false" && this.mProduct.equipIsCal.toString() != "") {
        Swal.fire(
          'Error',
          'equipIsCal value can be only "true" ,"false" or blank',
          'error'
        )
        return;
      }

    }

    //Boolean NULL
    if (this.mProduct.isActive != null)//First time is null
    {                                                                        //if from null user type something then remove it become ""
      if (this.mProduct.isActive.toString() != "true" && this.mProduct.isActive.toString() != "false" && this.mProduct.isActive.toString() != "") {
        Swal.fire(
          'Error',
          'Is Active value can be only "true" ,"false" or blank',
          'error'
        )
        return;
      }

    }



    this.networkService.EditTbEquipment(this.mProduct, this.mProduct.equipId.toString()).subscribe(
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