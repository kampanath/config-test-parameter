import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

 
   

  constructor(private router: Router ,private authService: AuthService) { }

  ngOnInit() {
   
  
  }

  logout() {
    this.authService.logout();
  }

  click1() {
    this.router.navigate(["/stock/TbUutname"])
   // console.log("PPPPPPPPPPPPPPPP");
  }

  click2() {
    this.router.navigate(["/IMEI/Product"])
  }

  click3() {
    console.log("WWWWWWWWWWWW");
  }

  click4() {
    this.router.navigate(["/stock/tbEquipment"])
  }

 

  

}
