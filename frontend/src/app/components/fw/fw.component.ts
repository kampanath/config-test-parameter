import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fw',
  templateUrl: './fw.component.html',
  styleUrls: ['./fw.component.css']
})
export class FWComponent implements OnInit {

  mProductArray : boolean = true;
  constructor(private router: Router) {  }

  ngOnInit() {
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

}
