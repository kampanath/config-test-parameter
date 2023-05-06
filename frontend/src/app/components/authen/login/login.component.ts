import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';
import Swal from 'sweetalert2';
import { View } from '@fullcalendar/core';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // @ViewChild("password", { static: false }) password: ElementRef;

  constructor(private authService: AuthService,
    private router: Router,
    private networkService: NetworkService) {
    //init member
  }

  ngOnInit() {
    if (this.authService.isLogin()) {
      this.router.navigate(["/home"])
    }

    document.getElementById("username").focus();
  }

  onSubmit(loginForm: NgForm) {

  
   // alert(loginForm.value.username);
  //  alert(loginForm.value.password);

  
    if(loginForm.value.username != "" &&  (loginForm.value.password == "" || loginForm.value.password == null)   )
    {
  //    alert(loginForm.value.password);
    //  this.password.nativeElement.focus();
      document.getElementById("password").focus();
      return;
    }

    this.networkService.login(loginForm.value).subscribe(
      (data) => {
        if (data.token) {
          this.authService.login(data.token);
        } else {
        //  alert(data.message);
     


          Swal.fire(
            'Error',
            'Can not get information from database',
            'error' )
        }
      },
      (error) => {

    

        loginForm.reset();
        loginForm.value.password = "XXX";
       
     //   this.password.nativeElement.value = "";
        document.getElementById("username").focus();

        Swal.fire(
          'Error',
          'Wrong user name or password',
          'error' )

      //  alert(JSON.stringify(error));
      }

    );



  }
}