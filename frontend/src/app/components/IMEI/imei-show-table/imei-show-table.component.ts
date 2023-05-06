import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';
import { TbUutname } from 'src/app/models/TbUutname.model';
import { a9522b_cnt } from 'src/app/models/a9522b_cnt.model';
import { a9523_cnt } from 'src/app/models/a9523_cnt.model';
import { a9522b_ext_cnt } from 'src/app/models/a9522b_ext_cnt.model';
import { a9522b_imei } from 'src/app/models/a9522b_imei.model';
import { a9523_imei } from 'src/app/models/a9523_imei.model';
import { a9522b_ext_imei } from 'src/app/models/a9522b_ext_imei.model';
import { imeiTemplate } from 'src/app/models/imeiTemplate.model';

import { TbUutprofile } from 'src/app/models/tbUutprofile.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { NgModel } from '@angular/forms';
import { CSVRecord } from 'src/app/models/CSVRecord.model';

import { MatButtonModule } from '@angular/material/button';


import { a9523_ext_cnt, a9523_ext_cntAll, a9523_ext_cntBy } from 'src/app/models/a9523_ext_cnt.model';
import { a9523_ext_imeiAll, a9523_ext_imeiBy, a9523_ext_imei } from 'src/app/models/a9523_ext_imei.model';

import { a9523mw_cnt, a9523mw_cntAll, a9523mw_cntBy } from 'src/app/models/a9523mw_cnt.model';
import { a9523mw_imeiAll, a9523mw_imeiBy, a9523mw_imei } from 'src/app/models/a9523mw_imei.model';

import { a9523mw_ext_cnt, a9523mw_ext_cntAll, a9523mw_ext_cntBy } from 'src/app/models/a9523mw_ext_cnt.model';
import { a9523mw_ext_imeiAll, a9523mw_ext_imeiBy, a9523mw_ext_imei } from 'src/app/models/a9523mw_ext_imei.model';

import { a9523ptt_cnt, a9523ptt_cntAll, a9523ptt_cntBy } from 'src/app/models/a9523ptt_cnt.model';
import { a9523ptt_imeiAll, a9523ptt_imeiBy, a9523ptt_imei } from 'src/app/models/a9523ptt_imei.model';

import { a9555a_cnt, a9555a_cntAll, a9555a_cntBy } from 'src/app/models/a9555a_cnt.model';
import { a9555a_imeiAll, a9555a_imeiBy, a9555a_imei } from 'src/app/models/a9555a_imei.model';

import { a9555a_ext_cnt, a9555a_ext_cntAll, a9555a_ext_cntBy } from 'src/app/models/a9555a_ext_cnt.model';
import { a9555a_ext_imeiAll, a9555a_ext_imeiBy, a9555a_ext_imei } from 'src/app/models/a9555a_ext_imei.model';

import { a9555a_gsa_cnt, a9555a_gsa_cntAll, a9555a_gsa_cntBy } from 'src/app/models/a9555a_gsa_cnt.model';
import { a9555a_gsa_imeiAll, a9555a_gsa_imeiBy, a9555a_gsa_imei } from 'src/app/models/a9555a_gsa_imei.model';

import { a9575_cnt, a9575_cntAll, a9575_cntBy } from 'src/app/models/a9575_cnt.model';
import { a9575_imeiAll, a9575_imeiBy, a9575_imei } from 'src/app/models/a9575_imei.model';

import { a9575_ext_cnt, a9575_ext_cntAll, a9575_ext_cntBy } from 'src/app/models/a9575_ext_cnt.model';
import { a9575_ext_imeiAll, a9575_ext_imeiBy, a9575_ext_imei } from 'src/app/models/a9575_ext_imei.model';

import { a9575e_cnt, a9575e_cntAll, a9575e_cntBy } from 'src/app/models/a9575e_cnt.model';
import { a9575e_imeiAll, a9575e_imeiBy, a9575e_imei } from 'src/app/models/a9575e_imei.model';

import { a9575e_ext_cnt, a9575e_ext_cntAll, a9575e_ext_cntBy } from 'src/app/models/a9575e_ext_cnt.model';
import { a9575e_ext_imeiAll, a9575e_ext_imeiBy, a9575e_ext_imei } from 'src/app/models/a9575e_ext_imei.model';

import { a9575gsa_cnt, a9575gsa_cntAll, a9575gsa_cntBy } from 'src/app/models/a9575gsa_cnt.model';
import { a9575gsa_imeiAll, a9575gsa_imeiBy, a9575gsa_imei } from 'src/app/models/a9575gsa_imei.model';

import { a9575ptt_cnt, a9575ptt_cntAll, a9575ptt_cntBy } from 'src/app/models/a9575ptt_cnt.model';
import { a9575ptt_imeiAll, a9575ptt_imeiBy, a9575ptt_imei } from 'src/app/models/a9575ptt_imei.model';

import { a9575ptt_ext_cnt, a9575ptt_ext_cntAll, a9575ptt_ext_cntBy } from 'src/app/models/a9575ptt_ext_cnt.model';
import { a9575ptt_ext_imeiAll, a9575ptt_ext_imeiBy, a9575ptt_ext_imei } from 'src/app/models/a9575ptt_ext_imei.model';

import { a9602_cnt, a9602_cntAll, a9602_cntBy } from 'src/app/models/a9602_cnt.model';
import { a9602_imeiAll, a9602_imeiBy, a9602_imei } from 'src/app/models/a9602_imei.model';

import { a9602n_ext_cnt, a9602n_ext_cntAll, a9602n_ext_cntBy } from 'src/app/models/a9602n_ext_cnt.model';
import { a9602n_ext_imeiAll, a9602n_ext_imeiBy, a9602n_ext_imei } from 'src/app/models/a9602n_ext_imei.model';

import { a9602r_cnt, a9602r_cntAll, a9602r_cntBy } from 'src/app/models/a9602r_cnt.model';
import { a9602r_imeiAll, a9602r_imeiBy, a9602r_imei } from 'src/app/models/a9602r_imei.model';

import { a9602sb_cnt, a9602sb_cntAll, a9602sb_cntBy } from 'src/app/models/a9602sb_cnt.model';
import { a9602sb_imeiAll, a9602sb_imeiBy, a9602sb_imei } from 'src/app/models/a9602sb_imei.model';

import { a9602sb_ext_cnt, a9602sb_ext_cntAll, a9602sb_ext_cntBy } from 'src/app/models/a9602sb_ext_cnt.model';
import { a9602sb_ext_imeiAll, a9602sb_ext_imeiBy, a9602sb_ext_imei } from 'src/app/models/a9602sb_ext_imei.model';

import { a9603_cnt, a9603_cntAll, a9603_cntBy } from 'src/app/models/a9603_cnt.model';
import { a9603_imeiAll, a9603_imeiBy, a9603_imei } from 'src/app/models/a9603_imei.model';

import { a9603r_cnt, a9603r_cntAll, a9603r_cntBy } from 'src/app/models/a9603r_cnt.model';
import { a9603r_imeiAll, a9603r_imeiBy, a9603r_imei } from 'src/app/models/a9603r_imei.model';

import { bcx_cnt, bcx_cntAll, bcx_cntBy } from 'src/app/models/bcx_cnt.model';
import { bcx_imeiAll, bcx_imeiBy, bcx_imei } from 'src/app/models/bcx_imei.model';

import { gdb_cnt, gdb_cntAll, gdb_cntBy } from 'src/app/models/gdb_cnt.model';
import { gdb_imeiAll, gdb_imeiBy, gdb_imei } from 'src/app/models/gdb_imei.model';

import { sfx_cnt, sfx_cntAll, sfx_cntBy } from 'src/app/models/sfx_cnt.model';
import { sfx_imeiAll, sfx_imeiBy, sfx_imei } from 'src/app/models/sfx_imei.model';


@Component({
  selector: 'app-imei-show-table',
  templateUrl: './imei-show-table.component.html',
  styleUrls: ['./imei-show-table.component.css']
})
export class IMEIShowTableComponent implements OnInit {



  mProductArrayX: imeiTemplate;
  // mProductArray: a9522b_cnt[] = null;
  // mProductArray2: a9522b_imei[] = null;
  // mProductArray3: a9522b_imei = null;
  mProductArray: any = null;
  mProductArray2: any = null;
  mProductArray3: any = null;
  testString: string = null;

  searchText1: string = null;
  searchText2: string = null;
  searchText3: string = null;
  searchText4: string = null;

  newIMEIText: string = "300025060001099";

  countLabel: string = "Count";
  imeiLabel: string = "IMEI";

  mSearchProductArray: a9522b_cnt[] = null;

  searchTextChanged = new Subject<string>();
  phrase: string = "";
  splitted2: string[];

  testText: string;
  id: string;

  CSVString: string;

  id2: string;

  serachByID1:boolean = false;

  public records: any[] = [];

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private localtion: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {


    this.activatedRoute.params.subscribe((params) => {

      this.feedData(params.id);
      this.id = params.id;
      this.networkService.tempString3 = this.id;


      this.searchText3 = "1";
      this.GetID();


      this.id2 = params.id2;

      if (this.id == "9522b") {
        this.countLabel = "9522b Count";
        this.imeiLabel = "9522b IMEI";
        console.log("9522b inside");
        return this.mProductArray2 as a9522b_imei[], this.mProductArray as a9522b_cnt[], this.mProductArray3 as a9522b_imei;

      }
      if (this.id == "9522b_ext") {
        this.countLabel = "9522b Ext Count";
        this.imeiLabel = "9522b Ext IMEI";
        return this.mProductArray2 as a9522b_ext_imei[], this.mProductArray3 as a9522b_ext_imei, this.mProductArray as a9522b_ext_cnt[];

      }

      if (this.id == "9523") {
        this.countLabel = "9523 Count";
        this.imeiLabel = "9523 IMEI";
        return this.mProductArray2 as a9523_imei[], this.mProductArray3 as a9523_imei, this.mProductArray as a9523_cnt[];

      }

      if (this.id == "9523_ext") {
        this.countLabel = "9523_ext Count";
        this.imeiLabel = "9523_ext IMEI";
        return this.mProductArray2 as a9523_ext_imei[], this.mProductArray3 as a9523_ext_imei, this.mProductArray as a9523_ext_cnt[];

      }

      if (this.id == "9523mw") {
        this.countLabel = "9523mw Count";
        this.imeiLabel = "9523mw IMEI";
        return this.mProductArray2 as a9523mw_imei[], this.mProductArray3 as a9523mw_imei, this.mProductArray as a9523mw_cnt[];

      }

      if (this.id == "9523mw_ext") {
        this.countLabel = "9523mw_ext Count";
        this.imeiLabel = "9523mw_ext IMEI";
        return this.mProductArray2 as a9523mw_ext_imei[], this.mProductArray3 as a9523mw_ext_imei, this.mProductArray as a9523mw_ext_cnt[];

      }

      if (this.id == "9523ptt") {
        this.countLabel = "9523ptt Count";
        this.imeiLabel = "9523ptt IMEI";
        return this.mProductArray2 as a9523ptt_imei[], this.mProductArray3 as a9523ptt_imei, this.mProductArray as a9523ptt_cnt[];

      }

      if (this.id == "9555a") {
        this.countLabel = "9555a Count";
        this.imeiLabel = "9555a IMEI";
        return this.mProductArray2 as a9555a_imei[], this.mProductArray3 as a9555a_imei, this.mProductArray as a9555a_cnt[];

      }

      if (this.id == "9555a_ext") {
        this.countLabel = "9555a_ext Count";
        this.imeiLabel = "9555a_ext IMEI";
        return this.mProductArray2 as a9555a_ext_imei[], this.mProductArray3 as a9555a_ext_imei, this.mProductArray as a9555a_ext_cnt[];

      }

      if (this.id == "9555a_gsa") {
        this.countLabel = "9555a_gsa Count";
        this.imeiLabel = "9555a_gsa IMEI";
        return this.mProductArray2 as a9555a_gsa_imei[], this.mProductArray3 as a9555a_gsa_imei, this.mProductArray as a9555a_gsa_cnt[];

      }

      if (this.id == "9575") {
        this.countLabel = "9575 Count";
        this.imeiLabel = "9575 IMEI";
        return this.mProductArray2 as a9575_imei[], this.mProductArray3 as a9575_imei, this.mProductArray as a9575_cnt[];

      }

      if (this.id == "9575_ext") {
        this.countLabel = "9575_ext Count";
        this.imeiLabel = "9575_ext IMEI";
        return this.mProductArray2 as a9575_ext_imei[], this.mProductArray3 as a9575_ext_imei, this.mProductArray as a9575_ext_cnt[];

      }

      if (this.id == "9575e") {
        this.countLabel = "9575e Count";
        this.imeiLabel = "9575e IMEI";
        return this.mProductArray2 as a9575e_imei[], this.mProductArray3 as a9575e_imei, this.mProductArray as a9575e_cnt[];

      }

      if (this.id == "9575e_ext") {
        this.countLabel = "9575e_ext Count";
        this.imeiLabel = "9575e_ext IMEI";
        return this.mProductArray2 as a9575e_ext_imei[], this.mProductArray3 as a9575e_ext_imei, this.mProductArray as a9575e_ext_cnt[];

      }

      if (this.id == "9575gsa") {
        this.countLabel = "9575gsa Count";
        this.imeiLabel = "9575gsa IMEI";
        return this.mProductArray2 as a9575gsa_imei[], this.mProductArray3 as a9575gsa_imei, this.mProductArray as a9575gsa_cnt[];

      }

      if (this.id == "9575ptt") {
        this.countLabel = "9575ptt Count";
        this.imeiLabel = "9575ptt IMEI";
        return this.mProductArray2 as a9575ptt_imei[], this.mProductArray3 as a9575ptt_imei, this.mProductArray as a9575ptt_cnt[];

      }

      if (this.id == "9575ptt_ext") {
        this.countLabel = "9575ptt_ext Count";
        this.imeiLabel = "9575ptt_ext IMEI";
        return this.mProductArray2 as a9575ptt_ext_imei[], this.mProductArray3 as a9575ptt_ext_imei, this.mProductArray as a9575ptt_ext_cnt[];

      }

      if (this.id == "9602") {
        this.countLabel = "9602 Count";
        this.imeiLabel = "9602 IMEI";
        return this.mProductArray2 as a9602_imei[], this.mProductArray3 as a9602_imei, this.mProductArray as a9602_cnt[];

      }


      if (this.id == "9602n_ext") {
        this.countLabel = "9602n_ext Count";
        this.imeiLabel = "9602n_ext IMEI";
        return this.mProductArray2 as a9602n_ext_imei[], this.mProductArray3 as a9602n_ext_imei, this.mProductArray as a9602n_ext_cnt[];

      }

      if (this.id == "9602r") {
        this.countLabel = "9602r Count";
        this.imeiLabel = "9602r IMEI";
        return this.mProductArray2 as a9602r_imei[], this.mProductArray3 as a9602r_imei, this.mProductArray as a9602r_cnt[];

      }

      if (this.id == "9602sb") {
        this.countLabel = "9602sb Count";
        this.imeiLabel = "9602sb IMEI";
        return this.mProductArray2 as a9602sb_imei[], this.mProductArray3 as a9602sb_imei, this.mProductArray as a9602sb_cnt[];

      }

      if (this.id == "9602sb_ext") {
        this.countLabel = "9602sb_ext Count";
        this.imeiLabel = "9602sb_ext IMEI";
        return this.mProductArray2 as a9602sb_ext_imei[], this.mProductArray3 as a9602sb_ext_imei, this.mProductArray as a9602sb_ext_cnt[];

      }

      if (this.id == "9603") {
        this.countLabel = "9603 Count";
        this.imeiLabel = "9603 IMEI";
        return this.mProductArray2 as a9603_imei[], this.mProductArray3 as a9603_imei, this.mProductArray as a9603_cnt[];

      }

      if (this.id == "9603r") {
        this.countLabel = "9603r Count";
        this.imeiLabel = "9603r IMEI";
        return this.mProductArray2 as a9603r_imei[], this.mProductArray3 as a9603r_imei, this.mProductArray as a9603r_cnt[];

      }

      if (this.id == "bcx") {
        this.countLabel = "bcx Count";
        this.imeiLabel = "bcx IMEI";
        return this.mProductArray2 as bcx_imei[], this.mProductArray3 as bcx_imei, this.mProductArray as bcx_cnt[];

      }

      if (this.id == "gdb") {
        this.countLabel = "gdb Count";
        this.imeiLabel = "gdb IMEI";
        return this.mProductArray2 as gdb_imei[], this.mProductArray3 as gdb_imei, this.mProductArray as gdb_cnt[];

      }

      if (this.id == "sfx") {
        this.countLabel = "sfx Count";
        this.imeiLabel = "sfx IMEI";
        return this.mProductArray2 as sfx_imei[], this.mProductArray3 as sfx_imei, this.mProductArray as sfx_cnt[];

      }


      if (this.id == "9523") {
        this.countLabel = "9523 Count";
        this.imeiLabel = "9523 IMEI";
        return this.mProductArray2 as a9523_imei[], this.mProductArray3 as a9523_imei, this.mProductArray as a9523_cnt[];

      }

      
    //  this.feedData(params.id);

    
    });

  }


  feedData(id: string) {


 

    if (id == "9522b") {
      this.networkService.Geta9522b_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {

              return item
            }
          )
        },
      );
    }
    else if (id == "9522b_ext") {
      this.networkService.Geta9522b_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9523") {
      this.networkService.Geta9523_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9523_ext") {
      this.networkService.Geta9523_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9523mw") {
      this.networkService.Geta9523mw_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9523mw_ext") {
      this.networkService.Geta9523mw_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9523ptt") {
      this.networkService.Geta9523ptt_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9555a") {
      this.networkService.Geta9555a_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9555a_ext") {
      this.networkService.Geta9555a_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9555a_gsa") {
      this.networkService.Geta9555a_gsa_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9575") {
      this.networkService.Geta9575_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9575_ext") {
      this.networkService.Geta9575_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9575e") {
      this.networkService.Geta9575e_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9575e_ext") {
      this.networkService.Geta9575e_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9575gsa") {
      this.networkService.Geta9575gsa_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9575ptt") {
      this.networkService.Geta9575ptt_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9575ptt_ext") {
      this.networkService.Geta9575ptt_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9602") {
      this.networkService.Geta9602_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9602n_ext") {
      this.networkService.Geta9602n_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9602r") {
      this.networkService.Geta9602r_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9602sb") {
      this.networkService.Geta9602sb_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9602sb_ext") {
      this.networkService.Geta9602sb_ext_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9603") {
      this.networkService.Geta9603_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "9603r") {
      this.networkService.Geta9603r_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "bcx") {
      this.networkService.Getbcx_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "gdb") {
      this.networkService.Getgdb_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
    else if (id == "sfx") {
      this.networkService.Getsfx_cntAll().subscribe(
        data => {
          this.mProductArray = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }



    console.log("this.mProductArray");
    console.log(this.mProductArray);



    this.searchText1 = this.networkService.tempString;


    if (this.networkService.clearFlag == "CLEAR") {
      this.mProductArray2 = null;
      this.networkService.tempString = "";
      this.searchText1 = "";

    } else {

    }

    this.networkService.clearFlag = "";

    this.GetSN(this.networkService.tempString);

  }

  getOutOfStock(): number {

    return 1150;
  }






  edit(id: number) {
    // console.log(id);
    this.router.navigate([`/IMEI/edit/${id.toString()}`])

  }

  getFile(id: number) {

    //  this.router.navigate([`/IMEI/edit/${id.toString()}`])
  }

  view(id: string) {
    this.router.navigate([`/stock/TbUutprofile/${id}`])
  }

  Add(id: string) {
    this.router.navigate([`/IMEI/create/${id}`])
  }


  GetID() {


    this.serachByID1 = true;
    if (this.id == "9522b") {
      this.networkService.Geta9522b_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );

    }
    else if (this.id == "9522b_ext") {
      this.networkService.Geta9522b_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9523") {
      this.networkService.Geta9523_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9523_ext") {
      this.networkService.Geta9523_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9523mw") {
      this.networkService.Geta9523mw_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9523mw_ext") {
      this.networkService.Geta9523mw_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9523ptt") {
      this.networkService.Geta9523ptt_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9555a_ext") {
      this.networkService.Geta9555a_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9555a_gsa") {
      this.networkService.Geta9555a_gsa_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9555a") {
      this.networkService.Geta9555a_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9575_ext") {
      this.networkService.Geta9575_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9575") {
      this.networkService.Geta9575_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9575e_ext") {
      this.networkService.Geta9575e_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9575e") {
      this.networkService.Geta9575e_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9575gsa") {
      this.networkService.Geta9575gsa_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9575ptt_ext") {
      this.networkService.Geta9575ptt_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9575ptt") {
      this.networkService.Geta9575ptt_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9602") {
      this.networkService.Geta9602_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9602n_ext") {
      this.networkService.Geta9602n_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9602r") {
      this.networkService.Geta9602r_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9602sb_ext") {
      this.networkService.Geta9602sb_ext_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9602sb") {
      this.networkService.Geta9602sb_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9603") {
      this.networkService.Geta9603_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "9603r") {
      this.networkService.Geta9603r_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "bcx") {
      this.networkService.Getbcx_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "gdb") {
      this.networkService.Getgdb_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }
    else if (this.id == "sfx") {
      this.networkService.Getsfx_imeiByID(this.searchText3).subscribe(
        data => {
          this.mProductArray2 = null;
          this.mProductArray3 = data.result;


        },
      );
    }


  }

  GetSN(text: string) {

    // let fruits: string[] = ['300025060003000', '300025060001000', '300025060002000'];
    //  let phrase: string = "CB0010&CB00FM&CB0BK4";

    //  let splitted: string[] = this.phrase.split("&");
    // console.log("before");
    // console.log(this.networkService.tempString);

    this.networkService.tempString = text;
    // console.log("GetSN");
    // console.log("After");
    // console.log(this.networkService.tempString);
    // console.log(this.networkService.tempString3);


    this.splitted2 = text.split(/\r?\n/g);
    //    this.searchText1.replace(/\r?\n/g, '&'); // returns 'Hello TypeScript'
    //    console.log(this.searchText1)
    // console.log(this.splitted2);
    // console.log(this.id);
    this.id = this.networkService.tempString3;
    // console.log(this.id);

    //    for (let [index,entry] of splitted2 ) {
    //    phrase = phrase  + entry + '&';  // 1, "string", false

    // console.log( index)

    //     }


    for (let i = 0; i < this.splitted2.length; i++) {

      if (i == this.splitted2.length - 1) {
        this.phrase = this.phrase + this.splitted2[i];
      }
      else {
        this.phrase = this.phrase + this.splitted2[i] + '&';
      }

    }

    // console.log("This.phrase")
    // console.log(this.phrase)
    // console.log(this.splitted2[0])

    if (this.id == "9522b") {
      //  console.log("Enter 9522b")
      if (this.splitted2[0].length > 6) {
        //   console.log("Length > 6")
        this.networkService.GetSN_9522b_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //    console.log(this.mProductArray2)

          },

        );
      }
      else {
        //   console.log("Length < 6")
        this.networkService.GetImei_9522b_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //       console.log(this.mProductArray2)
          },
        );

      }
    }
    else if (this.id == "9522b_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9522b_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9522b_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9523") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9523_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9523_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9523_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9523_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9523_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9523mw") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9523mw_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9523mw_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9523mw_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9523mw_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9523mw_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9523ptt") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9523ptt_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9523ptt_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9555a") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9555a_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9555a_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9555a_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9555a_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9555a_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9555a_gsa") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9555a_gsa_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9555a_gsa_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9575") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9575_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9575_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9575_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9575_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9575_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9575e") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9575e_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9575e_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9575e_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9575e_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9575e_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9575gsa") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9575gsa_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9575gsa_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9575ptt_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9575ptt_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9575ptt_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9575ptt") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9575ptt_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9575ptt_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9602") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9602_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9602_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9602n_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9602n_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9602n_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9602r") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9602r_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9602r_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9602sb_ext") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9602sb_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9602sb_ext_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9602sb") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9602sb_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9602sb_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9603") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9603_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9603_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "9603r") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_9603r_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_9603r_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "bcx") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_bcx_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_bcx_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "gdb") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_gdb_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_gdb_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    else if (this.id == "sfx") {
      //   console.log("Enter 9522b_ext")
      if (this.splitted2[0].length > 6) {
        this.networkService.GetSN_sfx_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }

            )
            //       console.log(this.mProductArray2);
          },

        );
      }
      else {
        this.networkService.GetImei_sfx_imei_Array(this.phrase).subscribe(
          data => {
            this.mProductArray2 = data.result.map(
              item => {
                return item
              }
            )
            //        console.log(this.mProductArray2);
          },
        );

      }
    }
    this.phrase = "";
    this.splitted2 = null;


  }


  GetSN_old() {

    if (this.searchText1.length > 6) {
      this.networkService.GetSN_9522b_imei(this.searchText1).subscribe(
        data => {
          this.mProductArray2 = data.result.map(
            item => {
              return item
            }
          )
        },
      );
    }
    else {
      this.networkService.GetImei_9522b_imei(this.searchText1).subscribe(
        data => {
          this.mProductArray2 = data.result.map(
            item => {
              return item
            }
          )
        },
      );

    }
  }

  uploadListener2($event: any): void {

    console.log('CSV2');

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);



      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);


      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    }
  }


  uploadListener($event: any): void {

    console.log('CSV');

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;

        console.log(csvData);
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        console.log(csvRecordsArray);


        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);

       
        this.searchText1 = "asd";

      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    }
  }

  getDataRecordsArrayFromCSVFile2(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.id = curruntRecord[0].trim();
        csvArr.push(csvRecord.id);
      }
    }

    this.testText = "";
    for (let i = 0; i < csvArr.length; i++) {

      if (i == csvArr.length - 1) {
        this.testText = this.testText + csvArr[i];
      }
      else {
        this.testText = this.testText + csvArr[i] + '\n';
      }

    }

    console.log(this.testText);

    //  this.GetSN(this.testText)
    return csvArr;
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.id = curruntRecord[0].trim();
        csvArr.push(csvRecord.id);
      }
    }

    this.testText = "";
    for (let i = 0; i < csvArr.length; i++) {

      if (i == csvArr.length - 1) {
        this.testText = this.testText + csvArr[i];
      }
      else {
        this.testText = this.testText + csvArr[i] + '\n';
      }

    }

    console.log(this.testText);

    this.GetSN(this.testText)
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  AddNewIMEI() {

    //  this.networkService.tempString = this.testText;
    this.splitted2 = this.testText.split(/\r?\n/g);
    //   this.id = this.networkService.tempString3;
    // console.log(this.splitted2);

    let a9575e_Test_Add_IMEI = new a9575e_imei();
    let latestRow: number = 5;

    console.log("Get Row");
    this.networkService.Geta9575e_imei_Row().subscribe(
      data => {
        //  alert(data.message);
        //  this.localtion.back();
        console.log(data);
      },
    );

    return;

    for (var val of this.splitted2) {
      console.log(val); // prints values: 10, 20, 30, 40

      a9575e_Test_Add_IMEI.imei = val;
      a9575e_Test_Add_IMEI.sn = "0";
      a9575e_Test_Add_IMEI.id9575e_imei = latestRow;
      a9575e_Test_Add_IMEI.remodel = "0";

      latestRow++;

      this.networkService.Adda9575e_imei(a9575e_Test_Add_IMEI).subscribe(
        data => {
          //  alert(data.message);
          //  this.localtion.back();
        },
      );

    }
  }


}
