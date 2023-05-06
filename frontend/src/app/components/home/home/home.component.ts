import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';
import { Ird } from 'src/app/models/ird.model';
import {Chart} from 'node_modules/chart.js'
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message1 = 'INVALID ID OR PASSWORD';
  isTextInputDisable = false;
  fontSize:number = 16;

  lineChartData: ChartDataSets[] = [
    { data: [98, 97.5, 97, 97.7, 98, 99], label: '9575GSA APP Yield' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

 // mProductArray: Product[] = null;
 testText: string;


  allTableArray = [
  "Sample Table",
  "UUTStatusType",
  "mySQL",
  "Profile",
  "IMEI"
];

dummyProductYield = [
  "9575GSA APP",
  "9575 SIM",
  "9575P G03",
  "9575P Phone",
  "9523N",
  "9602N-RUSSIA"
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

getOutOfStock(): number {

 return 1150;
}

viewTable(id: string) {

// this.router.navigate([`/stock/${id}`])
this.router.navigate([`${id}`])

}

changeGraph(id: number) {

    if (id==0) {
      this.lineChartData = [
        { data: [98, 97.5, 97, 97.7, 98, 99], label: '9575GSA APP Yield' },
      ];

    }
    else if(id ==1)
    {
      this.lineChartData = [
        { data: [96, 95.5, 95, 96, 94, 99], label: '9575 SIM Yield' },
      ];
      this.lineChartColors = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(173,14,14,0.28)',
        },
      ];
    }
    else if(id ==2)
    {
      this.lineChartData = [
        { data: [90, 91, 93.4, 96, 94, 95], label: '9575P G03 Yield' },
      ];
      this.lineChartColors = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(150,20,146,0.28)',
        },
      ];
    }
    else if(id ==3)
    {
      this.lineChartData = [
        { data: [98, 99.5, 97, 97.7, 98, 97], label: '9575P Phone Yield' },
      ];
      this.lineChartColors = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(26,91,171,0.28)',
        },
      ];
    }
    else if(id ==4)
    {
      this.lineChartData = [
        { data: [99, 99.5, 99.1, 98, 98.5, 99], label: '9523N Yield' },
      ];
      this.lineChartColors = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(30,171,179,0.28)',
        },
      ];
    }
    else if(id ==5)
    {
      this.lineChartData = [
        { data: [98, 97.5, 97, 97.7, 98, 99], label: '9602N-RUSSIA Yield' },
      ];
      this.lineChartColors = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(99,179,30,0.28)',
        },
      ];
    }
  

  
  }



}
