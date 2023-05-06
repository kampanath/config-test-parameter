import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ird } from 'src/app/models/ird.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-stock-ird-edit',
  templateUrl: './stock-ird-edit.component.html',
  styleUrls: ['./stock-ird-edit.component.css']
})
export class StockIrdEditComponent implements OnInit {

  mProduct: Ird = null;

  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    this.activatedRoute.params.subscribe((params) => {
  
      this.feedData(params.id);
      
    });
  }

  feedData(id: string) {
   

    this.networkService.getIrdBy(id).subscribe(
      data => {
        this.mProduct = data.result
      },
    );

 
  }
 

  submit() {
    this.networkService.editIrd(this.mProduct, this.mProduct.uutstatusTypeId.toString()).subscribe(
      data => {
        alert(data.message);
        this.localtion.back();
      },
    );
  }

  cancel() {
    this.localtion.back();
  }

}