
import { Component, OnInit, ElementRef, ViewChild, Input, AfterContentInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ate_gold_board } from 'src/app/models/ate_gold_board.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gold-board-edit',
  templateUrl: './gold-board-edit.component.html',
  styleUrls: ['./gold-board-edit.component.css']
})



export class GoldBoardEditComponent implements OnInit {

  @ViewChild('pRef', {static: false}) pRef: ElementRef;


  tempText: string = null;

  mProduct: ate_gold_board = null;

  tempDate : Date = new Date();

  IsdateSetted : boolean = false;

 

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


  feedData(id: string) {


    this.networkService.Getate_gold_boardBySN(id).subscribe(
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
  this.router.navigate(["/stock/ate_gold_board"])
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
 
    this.networkService.Editate_gold_board(this.mProduct,  this.mProduct.serial_no.toString()).subscribe(
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