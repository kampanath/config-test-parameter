import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { a9522b_cnt } from 'src/app/models/a9522b_cnt.model';
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-stock-mysql-edit',
  templateUrl: './stock-mysql-edit.component.html',
  styleUrls: ['./stock-mysql-edit.component.css']
})
export class StockMysqlEditComponent implements OnInit {

  mProduct: a9522b_cnt = null;
  imageSrc: string | ArrayBuffer = null;

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
    this.networkService.Geta9522b_cntByID(id).subscribe(
      data => {
        this.mProduct = data.result
      },
    );
  }

  submit() {
    this.networkService.Edita9522b_cnt(this.mProduct, this.mProduct.idcnt.toString()).subscribe(
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