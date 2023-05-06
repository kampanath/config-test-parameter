import { Component, OnInit } from '@angular/core';
import { Ird } from "src/app/models/ird.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-stock-ird-create',
  templateUrl: './stock-ird-create.component.html',
  styleUrls: ['./stock-ird-create.component.css']
})
export class StockIrdCreateComponent implements OnInit {

  mProduct = new Ird();
  imageSrc: string | ArrayBuffer = null;

  constructor(private localtion: Location, private networkService: NetworkService) {
    this.mProduct.uutstatusTypeName = '';
    this.mProduct.uutstatusTypeDesc = '';
  }

  ngOnInit() {
  }

  submit() {
    this.networkService.addIrd(this.mProduct).subscribe(
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
