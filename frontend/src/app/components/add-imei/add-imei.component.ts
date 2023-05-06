import { Component, OnInit, Pipe, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinct } from 'rxjs/operators';
import { NetworkService } from 'src/app/services/network.service';
import { TbEquipment } from 'src/app/models/tbEquipment.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { NgModel } from '@angular/forms';
import { model2 } from 'src/app/models/model2.model';
import { MatSelectModule } from '@angular/material/select';
import { model } from 'src/app/models/model.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { gettablenames, gettablenamesAll } from 'src/app/models/getTableNames.model'
import { genericimei, genericimeiAll, genericimeiBy } from 'src/app/models/genericimei.model'
import { genericCheckDuplicate, genericCheckDuplicateAll, genericCheckDuplicateBy } from 'src/app/models/genericCheckDuplicate.model'



import { tbAteconfigFile } from 'src/app/models/tbAteconfigFile.model'
import { tbAteconfigFile2, tbAteconfigFile2BY } from 'src/app/models/tbAteconfigFile2.model'
import { tbAteconfig3File, tbAteconfigFile3BY } from 'src/app/models/tbAteconfigFile3.model'
import { CSVRecord } from 'src/app/models/CSVRecord.model';
import * as XLSX from 'xlsx';
import { arrayToHash } from '@fullcalendar/core/util/object';
type AOA = any[][];

declare var require: any
@Component({
  selector: 'app-add-imei',
  templateUrl: './add-imei.component.html',
  styleUrls: ['./add-imei.component.css']
})


export class AddIMEIComponent implements OnInit {

  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;

  file: File | null = null;

  textAreaString: string = "Status";

  mProducTableNames: gettablenames[] = null;
  mProductArray: tbAteconfigFile[] = null;

  private hostURL = environment.baseAPIURL;
  private apiURL = `${this.hostURL}/api`;
  private getTableNamesURL = `${this.apiURL}/generic`;

  mProductGenericIMEICheckDuplicate: genericCheckDuplicate[] = null;

  mProducGenericIMEI: genericimei[] = null;
  mProducGenericIMEILatestRow: genericimei[] = null;
  mProducGenericIMEILatestRowSingle: number = 0;

  mProductArray2: tbAteconfigFile[] = null;

  mProductArrayForFilter: tbAteconfigFile[] = null;

  mSearchProductArray: tbAteconfigFile[] = null;

  mProductDropDown: tbAteconfigFile2[] = null;
  mProductDropDown2: tbAteconfig3File[] = null;

  foods: string[] = ["aaaa", "bbbb"]

  searchTextChanged = new Subject<string>();
  filterSelected: string = "";
  filterSelected2: string = "";

  testText: string;

  firstTimeFlag: boolean = true;

  stringArray1: gettablenames[] = []
  stringArray2: gettablenames[] = []

  stringArrayTableNames: gettablenames[];

  stringEmpty = new gettablenames();
  stringEmpty2 = new gettablenames();

  configTypeFilter: string;
  hardwareTypeFilter: string;
  stringFilter: string;

  textTestDownload: string = "ZZXXX"

  csvIMEIRowCount: number;


  IMEI_ArrayFromExcel: string[] = [];

  IMEIArrayFromExcel: string[][];

  constructor(private router: Router, private networkService: NetworkService,private httpClient: HttpClient) { }

  ngOnInit() {

    this.stringEmpty.tables_in_pk20 = "";
    this.stringEmpty2.tables_in_pk20 = "";

    this.stringArray1.push(this.stringEmpty);
    this.stringArray2.push(this.stringEmpty2);

    /*
    this.networkService.GetAllTableNames().subscribe(
      data => {

        this.mProducTableNames = data.result.map(
          item => {
            if (item.tables_in_pk20.search("_ext") < 0) {
              this.stringArray1.push(item);
              this.stringArray2.push(item);

            }

            return item
          }
        )

      },
    );
      */

    this.feedData();

  }


  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();

  }

  onChangeFileInput(ev): void {


    let IMEIArrayFromExcel3: string[][];
    IMEIArrayFromExcel3 = [];

    let textArea = document.getElementById('statusText');

    this.textAreaString = "";


    this.IMEI_ArrayFromExcel.length = 0;
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    this.file = ev.target.files[0];
    console.log("file name ");
    this.textAreaString = "Please Wait..." + "\n";
    this.textAreaString += "File name : " + this.file.name + "\n";
    console.log("after file name ");


    reader.onload = (ev) => {

      console.log("reader onload");
      const data = reader.result;

      console.log("before workbook");
      workBook = XLSX.read(data, { type: 'binary' });


      //Find how many worksheet in file
      let sheetCount: number = 0;
      let countEnd: boolean = false;

      console.log("first sheet name");

      var first_sheet_name = workBook.SheetNames[0];

      console.log("worksheet");
      var worksheet = workBook.Sheets[first_sheet_name];

      console.log("while");
      while (!countEnd) {

        first_sheet_name = workBook.SheetNames[sheetCount];
        if (first_sheet_name == undefined) {
          countEnd = true;
        }

        sheetCount++;
      }

      let count: number = 0;

      console.log(" before Initialize");
      while (count < (sheetCount - 1)) {
        IMEIArrayFromExcel3[count] = [];
        count++;
      }

      console.log("after sheet count");

      console.log("sheetCount");
      console.log(sheetCount);
      sheetCount--;

      console.log("sheetCount");
      console.log(sheetCount);

      this.textAreaString += "Total sheet : " + sheetCount + "\n";
      this.textAreaString += "File name : " + this.file.name + "\n";

      console.log("after total sheet");
      let NoIMEIFound: boolean = false;

      count = 0;
      //loop through all sheet and collect all imei 
      while (count < sheetCount) {
        console.log("count");
        console.log(count);
        first_sheet_name = workBook.SheetNames[count];
        worksheet = workBook.Sheets[first_sheet_name];
        this.textAreaString += "sheet name : " + first_sheet_name + '\n';

        //-------------------- Read Cell --------------------------------------//

        var address_of_cell = 'D1';
        var address_of_cell_start = 'D1';

        var rowCount: number = 1;
        var rowCount2: number = 1;
        var rowIMEIStart: number = 0;
        var IMEIFound: boolean = false;

        var IMEIcount: number;


        //Find first IMEI cell
        //read column D search for "|"
        while (IMEIFound == false) {

          /* Find desired cell */
          var desired_cell = worksheet[address_of_cell];

          /* Get the value */
          var desired_value = (desired_cell ? desired_cell.v : undefined);


          if (desired_value == "|") {
            IMEIFound = true;
            address_of_cell_start = address_of_cell;

          }

          rowCount++;

          rowCount2 = rowCount;

          address_of_cell = 'D' + rowCount.toString();



          if (rowCount2 > 20) {
            //Error Not Found IMEI

            Swal.fire(
              'Error',
              'Not Found IMEI In sheet',
              'error')

            console.log("Refresh");
            this.router.navigate(["/AddIMEI"])
            return;

          }

        }//find first IMEI on column D

        this.textAreaString += "first IMEI cell : " + address_of_cell + '\n';



        if (rowCount2 > 20) {
          //Error Not Found IMEI

          return;

        }

        //Now Move to column C to get IMEI
        rowCount--;

        address_of_cell = 'D' + rowCount.toString();

        IMEIFound = true;

        let IMEIcounter: number = 0

        while (IMEIFound == true) {


          /* Find desired cell */
          var desired_cell = worksheet[address_of_cell];

          /* Get the value */
          var desired_value = (desired_cell ? desired_cell.v : undefined);


          if (desired_value == "|") {
            address_of_cell = 'C' + rowCount.toString();
            /* Find desired cell */
            var desired_cell = worksheet[address_of_cell];

            /* Get the value */
            var desired_value = (desired_cell ? desired_cell.v : undefined);

                this.IMEI_ArrayFromExcel.push(desired_value);
            //     this.IMEIArrayFromExcel[count].push(desired_value);
            IMEIArrayFromExcel3[count][IMEIcounter] = desired_value;


            this.textAreaString += "Read IMEI from cell : " + address_of_cell + " => " + desired_value + '\n';

            this.checkIMEI();

            rowCount++;
            IMEIcounter++;

            address_of_cell = 'D' + rowCount.toString();

          }
          else {
            IMEIFound = false;
          }

        }//read IMEI on column C

        IMEIcount = this.IMEI_ArrayFromExcel.length;

        this.csvIMEIRowCount = IMEIcount;


        //-------------------- Read Cell --------------------------------------//

        count++;
      }//loop sheet, COLLECT IMEI into array


      console.log("ENd1");
      console.log(rowCount);
      if (rowCount2 > 20) {
        //Error Not Found IMEI
        console.log("Row Count > 20 ");
        return;

      }


      //------------------Check duplicate IMEI from file ----------------------------------------//
      /*
            
            this.textAreaString += "Check Duplicate IMEI in file " + '\n';
      
              let countArray : number = 0;
              let count12 : number = 0
              let found : string = "";
              let foundTemp : string = "";
            while (count12 < sheetCount ) {
              countArray = 0;
              while(countArray < IMEIArrayFromExcel3[count12].length )
              {
                foundTemp = IMEIArrayFromExcel3[count12].find(element => element == IMEIArrayFromExcel3[count12][countArray]);
                if(foundTemp != undefined)
                {
                  foundTemp += " ";
                  found += foundTemp ;
                }
      
                countArray++;
      
              }
              count12++;
            }
      
            this.textAreaString += "Duplicate IMEI : " + found + '\n';
            console.log(found);
            */
      console.log("Before Concat");
      let count12: number = 0

      let tempArray2 = [];

      while (count12 < sheetCount) {
        tempArray2 = tempArray2.concat(IMEIArrayFromExcel3[count12]);
        count12++;
      }
      console.log("Concat");
      console.log(tempArray2);

      console.log("Check Duplicate Array");
      let tempArray = new Set(tempArray2);

      console.log(tempArray.size !== tempArray2.length);

      console.log("temp Array size");
      console.log(tempArray.size);


      if (tempArray.size !== tempArray2.length) {
        //Error Not Found IMEI

        Swal.fire(
          'Error',
          'Duplicate IMEI In Excel File !',
          'error')

        console.log("Refresh");
        return;

      }

      //------------------- End Check duplicate IMEI from file ----------------------------------//



      //===========================  Check Duplicate On Table ===================================//




      //>>>>>>>>>>>>>.....>>>>>>>>>>>>   Create parameter string to send to back end <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   tablename +& + array[0] + & + array[1] + & + ....    <<<<<<<<<<<<<<<<<<<<

      let indexTempArray2: number = 0;
      let countMAXSent: number = 0;

      while (indexTempArray2 < tempArray2.length) 
      {
            countMAXSent = 0;
            let checkDuplicateIMEIParameter: string = this.configTypeFilter + "&";                           // "9575e_imei&3000250600010GG";
            let IsCheckDuplicateTable: boolean = false;

            while ((indexTempArray2 < tempArray2.length) && (countMAXSent < 500)) 
            {

                if ( (indexTempArray2 != tempArray2.length - 1) && ( countMAXSent < 499  )  ) {
                  checkDuplicateIMEIParameter = checkDuplicateIMEIParameter + tempArray2[indexTempArray2] + "&";
                  indexTempArray2++;

                } else {
                  checkDuplicateIMEIParameter = checkDuplicateIMEIParameter + tempArray2[indexTempArray2];
                  indexTempArray2++;
                }

                countMAXSent++;
            }
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> end create parameter string <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

            console.log("parameter String");
            console.log(checkDuplicateIMEIParameter);

           
           
            this.httpClient.get<genericCheckDuplicateAll>(`${this.getTableNamesURL}/checkIMEIDuplicate/${checkDuplicateIMEIParameter}`).toPromise().then(result=>{

              this.mProductGenericIMEICheckDuplicate = result.result.map(
                item => {


                  return item
                }
              )// end map

              console.log("this.mProductGenericIMEICheckDuplicate lenght");
              console.log(this.mProductGenericIMEICheckDuplicate.length);

              console.log("this.mProductGenericIMEICheckDuplicate");
              console.log(this.mProductGenericIMEICheckDuplicate);


              if (this.mProductGenericIMEICheckDuplicate.length > 0) {

                Swal.fire(
                  'Error',
                  'Duplicate IMEI From IMEI In Excel File With Table !',
                  'error')
                return;
              }else
              {
                Swal.fire(
                  'successfully',
                  'IMEI has been added',
                  'success'
                )
              }
                return result
            }) // end premise
            
  
            /*
            this.networkService.checkIMEIDuplicate(checkDuplicateIMEIParameter).subscribe(
              data => {
                console.log("Inside Subscribe");
                this.mProductGenericIMEICheckDuplicate = null;
                this.mProductGenericIMEICheckDuplicate = data.result.map(
                  item => {


                    return item
                  }
                )

                console.log("this.mProductGenericIMEICheckDuplicate lenght");
                console.log(this.mProductGenericIMEICheckDuplicate.length);

                if (this.mProductGenericIMEICheckDuplicate.length > 0) {

                  Swal.fire(
                    'Error',
                    'Duplicate IMEI From IMEI In Excel File With Table !',
                    'error')

                  return;

                }
              },

            ); //CheckDuplicateIMEI
              */
      }//end while


      //////////////////////////// End Check Duplicate On Table //////////////////////////////////



      //===========================  Add IMEI ===================================//



      ///////////////////////////// End Add IMEI /////////////////////////////////



      //---------------------------- Finish ----------------------------------//

     


      //////////////////////////// End finish ////////////////////////////////////

    } //reader on load

    reader.readAsBinaryString(this.file);



  }

  checkIMEI(): void {


  }

  scrollBOttom() {

    /*
        console.log("Add generic IMEI");
        let test789: genericimei = new genericimei();
        test789.id = 11;
        test789.imei = "300415040806577";
        test789.sn = "0";
        test789.remodel = "0";
    
        this.networkService.AddGenericIMEI(test789).subscribe(
          data => {
    
            Swal.fire(
              'successfully',
              'Data has been saved',
              'success'
            )
          },
        );
    */

    let textArea = document.getElementById('statusText');
    this.textAreaString += document.getElementById('statusText').id + "RRRR" + '\n';

    textArea.scrollTop = textArea.scrollHeight;





  }

  feedData() {

    this.stringFilter = this.configTypeFilter + '&' + this.hardwareTypeFilter;

    this.networkService.GetIMEILatestRow(this.filterSelected).subscribe(
      data => {

        this.mProducGenericIMEILatestRow = data.result.map(
          item => {

            console.log("sa");
            console.log(item);
            return item
          }
        )

        this.mProducGenericIMEILatestRowSingle = this.mProducGenericIMEILatestRow[0].id;
      },
    );




    this.stringArray1.length = 0;
    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetAllTableNames().subscribe(
      data => {

        this.mProducTableNames = data.result.map(
          item => {

            if (item.tables_in_pk20.search("_ext") < 0) {
              this.stringArray1.push(item);

            }
            //  this.stringArray1.push(item);
            return item
          }
        )


        //        this.getOutOfStock();
      },
    );

    this.stringArray2.length = 0;


  }

  clearFilter() {
    console.log("sa");
    this.hardwareTypeFilter = undefined;
    this.configTypeFilter = undefined;
    /*--------------------------------------------------------------*/

    console.log("9999999999999");
    this.stringArray1.length = 0;
    //   this.networkService.getProductAll().subscribe(
    this.networkService.GetAllTableNames().subscribe(
      data => {
        //    console.log(JSON.stringify(data));
        //      this.mProductArray = data.result;
        //    console.log(this.mProductArray);
        //     console.log(JSON.stringify(this.mProductArray));
        this.mProducTableNames = data.result.map(
          item => {
            //     item.isGold = "a"
            if (item.tables_in_pk20.search("_ext") < 0) {
              this.stringArray1.push(item);
              this.stringArray2.push(item);

            }


            return item
          }
        )
        //        this.getOutOfStock();
      },
    );


    /*----------------------------------------------------------------*/

    /*--------------------------------------------------------------*/

    this.stringArray2.length = 0;
    /*
        //   this.networkService.getProductAll().subscribe(
        this.networkService.GetTbAteconfigFileForFilterConfigType(this.configTypeFilter).subscribe(
          data => {
            //    console.log(JSON.stringify(data));
            //      this.mProductArray = data.result;
            //    console.log(this.mProductArray);
            //     console.log(JSON.stringify(this.mProductArray));
            this.mProductDropDown2 = data.result.map(
              item => {
                //     item.isGold = "a"
                //   console.log(item);
                //                  var image = item.image;
                //               if (image != null) {
                //              item.image = this.networkService.productImageURL + item.image
                //              }
                this.stringArray2.push(item);
                return item
              }
            )
            //        this.getOutOfStock();
          },
        );
        */

    /*----------------------------------------------------------------*/

  }

  addNewProfile() {
    this.router.navigate(["/ProfileATE-create"])
    // this.router.navigate([`/stock/tbEquipment-edit/${id}`])
  }

  getOutOfStock(): number {

    return 1150;
  }

  edit(id: string) {
    this.router.navigate([`/ProfileATE-edit/${id}`])
    // this.router.navigate([`/stock/tbEquipment-edit/${id}`])
  }


  Add(id: string) {
    this.router.navigate(["/ProfileATE-create"])
    //  this.router.navigate([`/stock/tbEquipment-create/${id}`])
  }

 





  selectionChanged(event: any) {
    // console.log("PPPPPPPPPPPPPPPP");

    this.configTypeFilter = this.filterSelected;


    /*
        this.mProductArray = this.mProductArray2.filter(
          product => {
          
            return product.configType.endsWith(this.filterSelected)
        
          }


        );

    */

    this.feedData();

  }




  delete(id: string) {
    //async
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

        // this.networkService.deleteProduct(id).subscribe(
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
        //delete product from webapi
      }
    })


  }

}

