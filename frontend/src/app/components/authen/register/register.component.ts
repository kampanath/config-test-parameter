import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  positions = ['Admin','Cashier']

  //DI dependency injection 
  constructor ( private router: Router,private networkService: NetworkService) { 
  }

  ngOnInit() {  //constructor  will error if dont have
  }

  onSubmit(registerForm: NgForm){
   // alert(JSON.stringify(registerForm.value));

   this.networkService.register(registerForm.value).subscribe(
     (data) =>{
       alert(data.message)
       this.router.navigate(["/login"]);

     },
      (error) => {
        alert(JSON.stringify(error));
     },           //finally
      () =>{
            //stop spinner

     }
   );
  }

  checkPasswordMatch(registerForm: NgForm){
    const values = registerForm.value;
    return values.password_retry !== '' && values.password !== values.password_retry
  }

}
