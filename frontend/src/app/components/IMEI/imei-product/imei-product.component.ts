import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';
import { Ird } from 'src/app/models/ird.model';

@Component({
  selector: 'app-imei-product',
  templateUrl: './imei-product.component.html',
  styleUrls: ['./imei-product.component.css']
})
export class IMEIProductComponent implements OnInit {

 // mProductArray: Product[] = null;
 testText: string;


  allTableArray = [
  "9522",
  "9523",
  "9555",
  "9575",
  "9602",
  "9603",
  "Others"
  
  
];

allTableArrayLink = [
  "/stock/Product",
  "/stock/UUTStatusType",
  "/stock/mySQL",
  "/stock/TbUutname",
  "/IMEI/Product"
];


 constructor(private router: Router, private networkService: NetworkService) { }

 ngOnInit() {


   this.feedData();

 }

 feedData() {
  
}

viewTable(id: string) {

 this.router.navigate([`/IMEI/SubProduct/${id}`])


}

}

