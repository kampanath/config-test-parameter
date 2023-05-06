import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TbUutname } from "src/app/models/TbUutname.model";
import { Location } from '@angular/common'
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { model2 } from "src/app/models/model2.model";
import { tbAteconfigFile } from 'src/app/models/tbAteconfigFile.model';
declare var require: any;
@Component({
  selector: 'app-profile-ate-create',
  templateUrl: './profile-ate-create.component.html',
  styleUrls: ['./profile-ate-create.component.css']
})
export class ProfileAteCreateComponent implements OnInit {

  mProduct: tbAteconfigFile = new tbAteconfigFile();
  imageSrc: string | ArrayBuffer = null;

  @ViewChild("fileInput", {static: false}) fileInput: ElementRef;
  

  fileReader: FileReader = new FileReader();
  checkSumTemp:string;
  fileName:string;


  constructor(
    private localtion: Location,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {

   
  }


  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }


  onChange(fileList: FileList): void {
      

    let file = fileList[0];
    let self = this;
    this.fileName = file.name;

    
    this.fileReader.onloadend = function(x) {   //callback of readAsText
     
      let fileContent: string | ArrayBuffer;
      fileContent = this.result;
      self.mProduct.configData = fileContent.toString();
      
    }

    this.fileReader.readAsText(file);
    
  }

  
  feedData(id: string) {


  }

  submit() {


      //String Not NULL
      if (this.mProduct.configType == null) {
        Swal.fire(
          'Error',
          'Config type can not be blank',
          'error'
        )
        return;
      }

        //String Not NULL
        if (this.mProduct.hardwareType == null) {
          Swal.fire(
            'Error',
            'Hardware type can not be blank',
            'error'
          )
          return;
        }

         //String Not NULL
         if (this.mProduct.configName == null) {
          Swal.fire(
            'Error',
            'config Name can not be blank',
            'error'
          )
          return;
        }

         //String Not NULL
         if (this.mProduct.configRevNo == null) {
          Swal.fire(
            'Error',
            'Config Rev No can not be blank',
            'error'
          )
          return;
        }

         //String Not NULL
         if (this.mProduct.configData == null) {
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

              //Boolean Not NULL
              if (this.mProduct.isActive == null) {
                Swal.fire(
                  'Error',
                  'Is Active can not be blank',
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
          
              this.checkSumTemp = this.mProduct.configData.replace(/\n/g, "\r\n");
              this.mProduct.configData = this.checkSumTemp;
              wrongHash = CryptoJS.SHA256(this.mProduct.configData);

          }
  
        this.mProduct.checkSum = wrongHash;

    this.networkService.AddtbAteconfigFile(this.mProduct).subscribe(
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
