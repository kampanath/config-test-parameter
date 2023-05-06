import { Component, OnInit } from '@angular/core';
import { a9522b_cnt } from "src/app/models/a9522b_cnt.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-stock-mysql-create',
  templateUrl: './stock-mysql-create.component.html',
  styleUrls: ['./stock-mysql-create.component.css']
})
export class StockMysqlCreateComponent implements OnInit {

  mProduct = new a9522b_cnt();
  imageSrc: string | ArrayBuffer = null;

  constructor(private localtion: Location, private networkService: NetworkService) {
    this.mProduct.cnt_val = '';
  
  }

  ngOnInit() {

  }

  submit() {
    this.networkService.Adda9522b_cnt(this.mProduct).subscribe(
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