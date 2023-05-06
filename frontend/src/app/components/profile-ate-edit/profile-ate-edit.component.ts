import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*import { TbUutname } from 'src/app/models/tbUutname.model';*/
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { tbAteconfigFile } from 'src/app/models/tbAteconfigFile.model';
import sha256 from 'crypto-js/sha256';
declare var require: any;

@Component({
  selector: 'app-profile-ate-edit',
  templateUrl: './profile-ate-edit.component.html',
  styleUrls: ['./profile-ate-edit.component.css']
})
export class ProfileAteEditComponent implements OnInit {

  mProduct: tbAteconfigFile = null;

  @ViewChild("fileInput", {static: false}) fileInput: ElementRef;
  

 fileName:string;

  public myVar:string;

  checkSumTemp:string;
   
   fileReader: FileReader = new FileReader();

   public configDataTextarea:string;

  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    onClickFileInputButton(): void {
      this.fileInput.nativeElement.click();
    }

     onChange(fileList: FileList): void {
      

      let file = fileList[0];
      let self = this;
      this.fileName = file.name;
      console.log("FIle Nameeeeeeeeeeeeeeee");
      console.log(this.fileName);

      this.fileReader.onloadend = function(x) {   //callback of readAsText
       
        let fileContent: string | ArrayBuffer;
        fileContent = this.result;
        self.mProduct.configData = fileContent.toString();
        
      }

      this.fileReader.readAsText(file);
      
    }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {

      console.log(params.id)
      this.feedData(params.id);

    });
  }

  feedData(id: string) {


    this.networkService.GettbAteconfigFileByID(id).subscribe(
      data => {

        this.mProduct = data.result
        this.checkSumTemp = this.mProduct.checkSum; //sha256
      },
    );


  }




  submit() {


       //String Not NULL
       if (this.mProduct.configType.replace(/\s/g, "") == "") {
        Swal.fire(
          'Error',
          'Config type can not be blank',
          'error'
        )
        return;
      }

        //String Not NULL
        if (this.mProduct.hardwareType.replace(/\s/g, "") == "") {
          Swal.fire(
            'Error',
            'Hardware type can not be blank',
            'error'
          )
          return;
        }

         //String Not NULL
         if (this.mProduct.configName.replace(/\s/g, "") == "") {
          Swal.fire(
            'Error',
            'config Name can not be blank',
            'error'
          )
          return;
        }

         //String Not NULL
         if (this.mProduct.configRevNo.replace(/\s/g, "") == "") {
          Swal.fire(
            'Error',
            'Config Rev No can not be blank',
            'error'
          )
          return;
        }

         //String Not NULL
         if (this.mProduct.configData.replace(/\s/g, "") == "") {
          Swal.fire(
            'Error',
            'Config Data can not be blank',
            'error'
          )
          return;
        }

          //Number Not NULL
          if (this.mProduct.userId == null) {
            Swal.fire(
              'Error',
              'User ID can not be blank',
              'error'
            )
            return;
          }

          //Boolean Not Null
        if( this.mProduct.isActive.toString() != "true" && this.mProduct.isActive.toString() != "false" )
        {
          Swal.fire(
            'Error',
            'Is Active value can be only "true" or "false"',
            'error'
          )
          return;
        }

        //sha256
        var CryptoJS = require('crypto-js')
        var wrongHash = CryptoJS.SHA256(this.mProduct.configData);

        if(this.fileReader.result == null) {      //not upload
          console.log(`checkSumTemp = ${this.checkSumTemp}`)
          console.log(`wrongHash = ${wrongHash}`)

          if(this.checkSumTemp == wrongHash) {     
           

          }
          else      //user edited config data in browser
          {
            this.checkSumTemp = this.mProduct.configData.replace(/\n/g, "\r\n");
            this.mProduct.configData = this.checkSumTemp;
            wrongHash = CryptoJS.SHA256(this.mProduct.configData);
            
          }

        }


    this.mProduct.checkSum = wrongHash

    this.networkService.EdittbAteconfigFile(this.mProduct, this.mProduct.configId.toString()).subscribe(
      data => {

        Swal.fire(
          'successfully',
          'Data has been saved',
          'success'
        )
        //  alert(data.message);
        this.localtion.back();
      },
    );
  }

  cancel() {
    this.localtion.back();
  }

  


}