import { Component, OnInit, Pipe, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Subject, Observable } from 'rxjs';
import { NetworkService } from 'src/app/services/network.service';
import { tbAteconfigFile } from 'src/app/models/tbAteconfigFile.model'
import { tbAteconfigFile2, tbAteconfigFile2BY } from 'src/app/models/tbAteconfigFile2.model'
import { tbAteconfig3File, tbAteconfigFile3BY } from 'src/app/models/tbAteconfigFile3.model'
declare var require: any
@Component({
  selector: 'app-profile-ate',
  templateUrl: './profile-ate.component.html',
  styleUrls: ['./profile-ate.component.css']
})


export class ProfileATEComponent implements OnInit {

  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;

  file: File | null = null;

  mProductArray: tbAteconfigFile[] = null;

  mProductArray2: tbAteconfigFile[] = null;

  mProductArrayForFilter: tbAteconfigFile[] = null;

  mSearchProductArray: tbAteconfigFile[] = null;

  mProductDropDown: tbAteconfigFile2[] = null;
  mProductDropDown2: tbAteconfig3File[] = null;

  searchTextChanged = new Subject<string>();
  filterSelected: string = "";
  filterSelected2: string = "";

  firstTimeFlag: boolean = true;

  stringArray1: tbAteconfigFile2[] = []
  stringArray2: tbAteconfig3File[] = []

  stringEmpty = new tbAteconfigFile2();
  stringEmpty2 = new tbAteconfig3File();

  configTypeFilter: string;
  hardwareTypeFilter: string;
  stringFilter: string;

  constructor(private router: Router, private networkService: NetworkService) { }

  ngOnInit() {

    //for default filter
    this.filterSelected = "CAL";
    this.filterSelected2 = "9522";
    this.configTypeFilter = this.filterSelected;
    this.hardwareTypeFilter = this.filterSelected2;
    
    this.stringEmpty.configType = "5";
    this.stringEmpty2.hardwareType = "4";

    this.stringArray1.push(this.stringEmpty);
    this.stringArray2.push(this.stringEmpty2);

    this.networkService.GettbAteconfigFileByConfigType().subscribe(
      data => {

        this.mProductDropDown2 = data.result.map(
          item => {
            this.stringArray2.push(item);
            return item
          }
        )

      },
    );


    this.feedData();
  }

  downloadConfigData(configData: string, configDataName: string) {


    var textFile = null;
    var data = new Blob([configData], { type: 'text/plain' });

    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    var fileName = configDataName
    var blobURL = URL.createObjectURL(data);

    //create new html link element 
    var link = document.createElement('a');
    link.download = fileName;
    link.href = blobURL
    link.click();   //click at new  link

  }


  feedData() {

    this.stringFilter = this.configTypeFilter + '&' + this.hardwareTypeFilter;
    this.networkService.GettbAteconfigFileAll(this.stringFilter).subscribe(
      data => {

        this.mProductArray2 = data.result.map(
          item => {
            return item
          }
        )

        this.mSearchProductArray = data.result;

        if (this.firstTimeFlag == true) {
          this.mProductArrayForFilter = data.result;
          this.mProductArray = data.result;
        }

      },
    );

    this.stringArray1.length = 0;

    this.networkService.GetTbAteconfigFileForFilterHardwareType(this.hardwareTypeFilter).subscribe(
      data => {
        this.mProductDropDown = data.result.map(
          item => {
            this.stringArray1.push(item);
            return item
          }
        )
      },
    );

    this.stringArray2.length = 0;

    this.networkService.GetTbAteconfigFileForFilterConfigType(this.configTypeFilter).subscribe(
      data => {
        this.mProductDropDown2 = data.result.map(
          item => {
            this.stringArray2.push(item);
            return item
          }
        )
      },
    );

  }

  clearFilter() {

    this.hardwareTypeFilter = undefined;
    this.configTypeFilter = undefined;
    this.stringArray1.length = 0;

    this.networkService.GetTbAteconfigFileForFilterHardwareType(this.hardwareTypeFilter).subscribe(
      data => {
        this.mProductDropDown = data.result.map(
          item => {
            this.stringArray1.push(item);
            return item
          }
        )

      },
    );

    this.stringArray2.length = 0;
    this.networkService.GetTbAteconfigFileForFilterConfigType(this.configTypeFilter).subscribe(
      data => {
        this.mProductDropDown2 = data.result.map(
          item => {
            this.stringArray2.push(item);
            return item
          }
        )

      },
    );

    this.filterSelected = "";
    this.filterSelected2 = "";

  }

  addNewProfile() {
    this.router.navigate(["/ProfileATE-create"])
  }

  edit(id: string) {
    this.router.navigate([`/ProfileATE-edit/${id}`])
  }


  Add(id: string) {
    this.router.navigate(["/ProfileATE-create"])
  }

  selectionChanged(event: any) {
    this.configTypeFilter = this.filterSelected;
    this.feedData();
  }

  selectionChanged2(event: any) {
    this.hardwareTypeFilter = this.filterSelected2;
    this.feedData();
  }


  delete(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.networkService.Deletemodel(id).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.feedData();
          },
        );
      }
    })
  }
}

