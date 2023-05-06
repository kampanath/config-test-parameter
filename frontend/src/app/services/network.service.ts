import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login, Register } from '../models/user.model';
import { ProductAll, ProductBY, Product } from '../models/product.model';
import { IrdAll, Ird, IrdBY } from '../models/ird.model';
import { TbProfile, TbProfileAll, TbProfileBY } from '../models/tbprofile.model';
import { TbEquipment, TbEquipmentAll, TbEquipmentBY } from '../models/tbEquipment.model';
import { TbProfileDetail, TbProfileDetailBY, TbProfileDetailAll } from '../models/tbProfileDetail.model';
import { a9522b_cnt, a9522b_cntAll, a9522b_cntBy } from '../models/a9522b_cnt.model';
import { a9523_cnt, a9523_cntAll, a9523_cntBy } from '../models/a9523_cnt.model';
import { a9522b_ext_cnt, a9522b_ext_cntAll, a9522b_ext_cntBy } from '../models/a9522b_ext_cnt.model';
import { TbUutname, TbUutnameBy, TbUutnameAll } from '../models/TbUutname.model';
import { TbUutprofile, TbUutprofileBy, TbUutprofileAll } from '../models/tbUutprofile.model';
import { a9522b_imeiAll, a9522b_imeiBy, a9522b_imei } from '../models/a9522b_imei.model';
import { a9523_imeiAll, a9523_imeiBy, a9523_imei } from '../models/a9523_imei.model';
import { a9522b_ext_imeiAll, a9522b_ext_imeiBy, a9522b_ext_imei } from '../models/a9522b_ext_imei.model';

import { a9523_ext_cnt, a9523_ext_cntAll, a9523_ext_cntBy } from '../models/a9523_ext_cnt.model';
import { a9523_ext_imeiAll, a9523_ext_imeiBy, a9523_ext_imei } from '../models/a9523_ext_imei.model';

import { a9523mw_cnt, a9523mw_cntAll, a9523mw_cntBy } from '../models/a9523mw_cnt.model';
import { a9523mw_imeiAll, a9523mw_imeiBy, a9523mw_imei } from '../models/a9523mw_imei.model';

import { a9523mw_ext_cnt, a9523mw_ext_cntAll, a9523mw_ext_cntBy } from '../models/a9523mw_ext_cnt.model';
import { a9523mw_ext_imeiAll, a9523mw_ext_imeiBy, a9523mw_ext_imei } from '../models/a9523mw_ext_imei.model';

import { a9523ptt_cnt, a9523ptt_cntAll, a9523ptt_cntBy } from '../models/a9523ptt_cnt.model';
import { a9523ptt_imeiAll, a9523ptt_imeiBy, a9523ptt_imei } from '../models/a9523ptt_imei.model';

import { a9555a_cnt, a9555a_cntAll, a9555a_cntBy } from '../models/a9555a_cnt.model';
import { a9555a_imeiAll, a9555a_imeiBy, a9555a_imei } from '../models/a9555a_imei.model';

import { a9555a_ext_cnt, a9555a_ext_cntAll, a9555a_ext_cntBy } from '../models/a9555a_ext_cnt.model';
import { a9555a_ext_imeiAll, a9555a_ext_imeiBy, a9555a_ext_imei } from '../models/a9555a_ext_imei.model';

import { a9555a_gsa_cnt, a9555a_gsa_cntAll, a9555a_gsa_cntBy } from '../models/a9555a_gsa_cnt.model';
import { a9555a_gsa_imeiAll, a9555a_gsa_imeiBy, a9555a_gsa_imei } from '../models/a9555a_gsa_imei.model';

import { a9575_cnt, a9575_cntAll, a9575_cntBy } from '../models/a9575_cnt.model';
import { a9575_imeiAll, a9575_imeiBy, a9575_imei } from '../models/a9575_imei.model';

import { a9575_ext_cnt, a9575_ext_cntAll, a9575_ext_cntBy } from '../models/a9575_ext_cnt.model';
import { a9575_ext_imeiAll, a9575_ext_imeiBy, a9575_ext_imei } from '../models/a9575_ext_imei.model';

import { a9575e_cnt, a9575e_cntAll, a9575e_cntBy } from '../models/a9575e_cnt.model';
import { a9575e_imeiAll, a9575e_imeiBy, a9575e_imei } from '../models/a9575e_imei.model';

import { a9575e_ext_cnt, a9575e_ext_cntAll, a9575e_ext_cntBy } from '../models/a9575e_ext_cnt.model';
import { a9575e_ext_imeiAll, a9575e_ext_imeiBy, a9575e_ext_imei } from '../models/a9575e_ext_imei.model';

import { a9575gsa_cnt, a9575gsa_cntAll, a9575gsa_cntBy } from '../models/a9575gsa_cnt.model';
import { a9575gsa_imeiAll, a9575gsa_imeiBy, a9575gsa_imei } from '../models/a9575gsa_imei.model';

import { a9575ptt_cnt, a9575ptt_cntAll, a9575ptt_cntBy } from '../models/a9575ptt_cnt.model';
import { a9575ptt_imeiAll, a9575ptt_imeiBy, a9575ptt_imei } from '../models/a9575ptt_imei.model';

import { a9575ptt_ext_cnt, a9575ptt_ext_cntAll, a9575ptt_ext_cntBy } from '../models/a9575ptt_ext_cnt.model';
import { a9575ptt_ext_imeiAll, a9575ptt_ext_imeiBy, a9575ptt_ext_imei } from '../models/a9575ptt_ext_imei.model';

import { a9602_cnt, a9602_cntAll, a9602_cntBy } from '../models/a9602_cnt.model';
import { a9602_imeiAll, a9602_imeiBy, a9602_imei } from '../models/a9602_imei.model';

import { a9602n_ext_cnt, a9602n_ext_cntAll, a9602n_ext_cntBy } from '../models/a9602n_ext_cnt.model';
import { a9602n_ext_imeiAll, a9602n_ext_imeiBy, a9602n_ext_imei } from '../models/a9602n_ext_imei.model';

import { a9602r_cnt, a9602r_cntAll, a9602r_cntBy } from '../models/a9602r_cnt.model';
import { a9602r_imeiAll, a9602r_imeiBy, a9602r_imei } from '../models/a9602r_imei.model';

import { a9602sb_cnt, a9602sb_cntAll, a9602sb_cntBy } from '../models/a9602sb_cnt.model';
import { a9602sb_imeiAll, a9602sb_imeiBy, a9602sb_imei } from '../models/a9602sb_imei.model';

import { a9602sb_ext_cnt, a9602sb_ext_cntAll, a9602sb_ext_cntBy } from '../models/a9602sb_ext_cnt.model';
import { a9602sb_ext_imeiAll, a9602sb_ext_imeiBy, a9602sb_ext_imei } from '../models/a9602sb_ext_imei.model';

import { a9603_cnt, a9603_cntAll, a9603_cntBy } from '../models/a9603_cnt.model';
import { a9603_imeiAll, a9603_imeiBy, a9603_imei } from '../models/a9603_imei.model';

import { a9603r_cnt, a9603r_cntAll, a9603r_cntBy } from '../models/a9603r_cnt.model';
import { a9603r_imeiAll, a9603r_imeiBy, a9603r_imei } from '../models/a9603r_imei.model';

import { bcx_cnt, bcx_cntAll, bcx_cntBy } from '../models/bcx_cnt.model';
import { bcx_imeiAll, bcx_imeiBy, bcx_imei } from '../models/bcx_imei.model';

import { gdb_cnt, gdb_cntAll, gdb_cntBy } from '../models/gdb_cnt.model';
import { gdb_imeiAll, gdb_imeiBy, gdb_imei } from '../models/gdb_imei.model';

import { sfx_cnt, sfx_cntAll, sfx_cntBy } from '../models/sfx_cnt.model';
import { sfx_imeiAll, sfx_imeiBy, sfx_imei } from '../models/sfx_imei.model';

import { ate_gold_boardAll, ate_gold_boardBy, ate_gold_board } from '../models/ate_gold_board.model';
//import { model, modelAll, modelBY } from '../models/model.model';
import { model2, modelAll, modelBY } from '../models/model2.model';
import { model, modelAll1, modelBY1 } from '../models/model.model';

import { gettablenames, gettablenamesAll } from '../models/gettablenames.model';

import { euipmentCalMaxID, euipmentCalMaxIDBy } from '../models/euipmentCalMaxID.model';


import { tbAteconfigFile2, tbAteconfigFile2All, tbAteconfigFile2BY } from '../models/tbAteconfigFile2.model';
import { tbAteconfigFile, tbAteconfigFileAll, tbAteconfigFileBY } from '../models/tbAteconfigFile.model';
import { tbAteconfig3File, tbAteconfigFile3All, tbAteconfigFile3BY } from '../models/tbAteconfigFile3.model';

import { genericimei, genericimeiAll, genericimeiBy } from '../models/genericimei.model';
import { genericCheckDuplicate, genericCheckDuplicateAll, genericCheckDuplicateBy } from '../models/genericCheckDuplicate.model';

import { ate_equipment_cal, ate_equipment_calBy, ate_equipment_calAll } from '../models/ate_equipment_cal.model';
import { ate_equipment_cal_loc, ate_equipment_cal_locBy, ate_equipment_cal_locAll } from '../models/ate_equipment_cal_loc.model';
import { ate_equipment_cal_ateNo, ate_equipment_cal_ateNoBy , ate_equipment_cal_ateNoAll } from '../models/ate_equipment_cal_ateNo.model';

import { ateCalibration,ateCalibrationBy,ateCalibrationAll } from 'src/app/models/ateCalibration.model'
import { atecalibrationATEName, atecalibrationATENameBy ,atecalibrationATENameAll } from 'src/app/models/atecalibrationATEName.model'
import { atecalibrationFixtureName, atecalibrationFixtureNameBy ,atecalibrationFixtureNameAll } from 'src/app/models/atecalibrationFixtureName.model'

import { Ate_Equipment_cal222,Ate_Equipment_cal222By,Ate_Equipment_cal222All } from 'src/app/models/Ate_Equipment_cal222.model'



@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private hostURL = environment.baseAPIURL;
  private apiURL = `${this.hostURL}/api`;
  // -----------------------------------------------------
  private loginURL = `${this.apiURL}/auth/login`;
  private registerURL = `${this.apiURL}/auth/register`;
  private productURL = `${this.apiURL}/product`;
  private irdURL = `${this.apiURL}/ird`;
  private a9522b_cntURL = `${this.apiURL}/mysql`;
  private a9522b_ext_cntURL = `${this.apiURL}/a9522b_ext_cnt`;
  private a9523_cntURL = `${this.apiURL}/a9523_cnt`;
  private a9522b_imeiURL = `${this.apiURL}/a9522b_imei`;
  private a9523_imeiURL = `${this.apiURL}/a9523_imei`;
  private a9522b_ext_imeiURL = `${this.apiURL}/a9522b_ext_imei`;

  private a9523_ext_cntURL = `${this.apiURL}/a9523_ext_cnt`;
  private a9523_ext_imeiURL = `${this.apiURL}/a9523_ext_imei`;

  private a9523mw_cntURL = `${this.apiURL}/a9523mw_cnt`;
  private a9523mw_imeiURL = `${this.apiURL}/a9523mw_imei`;

  private a9523mw_ext_cntURL = `${this.apiURL}/a9523mw_ext_cnt`;
  private a9523mw_ext_imeiURL = `${this.apiURL}/a9523mw_ext_imei`;

  private a9523ptt_cntURL = `${this.apiURL}/a9523ptt_cnt`;
  private a9523ptt_imeiURL = `${this.apiURL}/a9523ptt_imei`;

  private a9555a_cntURL = `${this.apiURL}/a9555a_cnt`;
  private a9555a_imeiURL = `${this.apiURL}/a9555a_imei`;

  private a9555a_ext_cntURL = `${this.apiURL}/a9555a_ext_cnt`;
  private a9555a_ext_imeiURL = `${this.apiURL}/a9555a_ext_imei`;

  private a9555a_gsa_cntURL = `${this.apiURL}/a9555a_gsa_cnt`;
  private a9555a_gsa_imeiURL = `${this.apiURL}/a9555a_gsa_imei`;

  private a9575_cntURL = `${this.apiURL}/a9575_cnt`;
  private a9575_imeiURL = `${this.apiURL}/a9575_imei`;

  private a9575_ext_cntURL = `${this.apiURL}/a9575_ext_cnt`;
  private a9575_ext_imeiURL = `${this.apiURL}/a9575_ext_imei`;

  private a9575e_ext_cntURL = `${this.apiURL}/a9575e_ext_cnt`;
  private a9575e_ext_imeiURL = `${this.apiURL}/a9575e_ext_imei`;

  private a9575e_cntURL = `${this.apiURL}/a9575e_cnt`;
  private a9575e_imeiURL = `${this.apiURL}/a9575e_imei`;

  private a9575gsa_cntURL = `${this.apiURL}/a9575gsa_cnt`;
  private a9575gsa_imeiURL = `${this.apiURL}/a9575gsa_imei`;

  private a9575ptt_cntURL = `${this.apiURL}/a9575ptt_cnt`;
  private a9575ptt_imeiURL = `${this.apiURL}/a9575ptt_imei`;

  private a9575ptt_ext_cntURL = `${this.apiURL}/a9575ptt_ext_cnt`;
  private a9575ptt_ext_imeiURL = `${this.apiURL}/a9575ptt_ext_imei`;

  private a9602_cntURL = `${this.apiURL}/a9602_cnt`;
  private a9602_imeiURL = `${this.apiURL}/a9602_imei`;

  private a9602n_ext_cntURL = `${this.apiURL}/a9602n_ext_cnt`;
  private a9602n_ext_imeiURL = `${this.apiURL}/a9602n_ext_imei`;

  private a9602r_cntURL = `${this.apiURL}/a9602r_cnt`;
  private a9602r_imeiURL = `${this.apiURL}/a9602r_imei`;

  private a9602sb_cntURL = `${this.apiURL}/a9602sb_cnt`;
  private a9602sb_imeiURL = `${this.apiURL}/a9602sb_imei`;

  private a9602sb_ext_cntURL = `${this.apiURL}/a9602sb_ext_cnt`;
  private a9602sb_ext_imeiURL = `${this.apiURL}/a9602sb_ext_imei`;

  private a9603_cntURL = `${this.apiURL}/a9603_cnt`;
  private a9603_imeiURL = `${this.apiURL}/a9603_imei`;

  private a9603r_cntURL = `${this.apiURL}/a9603r_cnt`;
  private a9603r_imeiURL = `${this.apiURL}/a9603r_imei`;

  private bcx_cntURL = `${this.apiURL}/bcx_cnt`;
  private bcx_imeiURL = `${this.apiURL}/bcx_imei`;

  private gdb_cntURL = `${this.apiURL}/gdb_cnt`;
  private gdb_imeiURL = `${this.apiURL}/gdbImei`;

  private sfx_cntURL = `${this.apiURL}/sfx_cnt`;
  private sfx_imeiURL = `${this.apiURL}/sfx_imei`;

  private tbprofileURL = `${this.apiURL}/tbprofile`;
  private tbEquipmentURL = `${this.apiURL}/tbequipment`;
  private tbprofiledetailURL = `${this.apiURL}/tbprofiledetail`;

  private ate_gold_boardURL = `${this.apiURL}/ate_gold_board`;
  private modelURL = `${this.apiURL}/mode`;
  private modelURL2 = `${this.apiURL}/mode/report`;

  private tbAteconfigFileURL = `${this.apiURL}/tbAteconfigFile`;
  private tbAteconfigFileURL2 = `${this.apiURL}/tbAteconfigFile/report`;
  private tbAteconfigFileURL3 = `${this.apiURL}/tbAteconfigFile/report2`;

  private equipmentCalURL = `${this.apiURL}/equipmentCal`;
  private equipmentCalFilterLocURL = `${this.apiURL}/equipmentCal/getLocation`;
  private equipmentCalFilterAteNoURL = `${this.apiURL}/equipmentCal/getATE`;

  private tbUutnamelURL = `${this.apiURL}/TbUutname`;
  private tbUutprofileURL = `${this.apiURL}/TbUutprofile`;

  public productImageURL = `${this.apiURL}/product/images/`;
  private outOfStockURL = `${this.productURL}/count/out_of_stock`;
  private transactionURL = `${this.apiURL}/transaction`;

  private getTableNamesURL = `${this.apiURL}/generic`;
  private getIMEIGenericURL = `${this.apiURL}/generic/GetIMEIAllTable`;
  private getATECalToday = `${this.apiURL}/generic/ateCalAllToday`;
  private ATECalGetColumnATEName = `${this.apiURL}/generic/GetTbAteCalByATENameColumn`;
  private ATECalGetFixtureNameByATEName = `${this.apiURL}/generic/GetateCalFixtureNameByATEName`;

  public tempString = "CB0008";
  public tempString2: string[] = ["CB0008", "CB0008"];
  public tempString3 = "";
  public clearFlag = "";
  public test123 = null;

  public configDataTemp:string;
  
  constructor(private httpClient: HttpClient) { }
  login(user): Observable<Login> {
    return this.httpClient.post<Login>(this.loginURL, user);
  }

  register(user): Observable<Register> {
    return this.httpClient.post<Register>(this.registerURL, user);
  }

  getProductAll(): Observable<ProductAll> {
    return this.httpClient.get<ProductAll>(this.productURL);
  }

  GetIRDAll(): Observable<IrdAll> {
    return this.httpClient.get<IrdAll>(this.irdURL);
  }

  getProductBy(id: string): Observable<ProductBY> {
    return this.httpClient.get<ProductBY>(`${this.productURL}/${id}`);
  }

  getIrdBy(id: string): Observable<IrdBY> {
    return this.httpClient.get<IrdBY>(`${this.irdURL}/${id}`);
  }


  deleteProduct(id: string): Observable<ProductBY> {
    return this.httpClient.delete<ProductBY>(`${this.productURL}/${id}`);
  }

  deleteIrd(id: string): Observable<IrdBY> {
    return this.httpClient.delete<IrdBY>(`${this.irdURL}/${id}`);
  }

  addProduct(product: Product): Observable<ProductBY> {
    return this.httpClient.post<ProductBY>(this.productURL, this.makeForm(product));
  }

  addIrd(ird: Ird): Observable<IrdBY> {
    return this.httpClient.post<IrdBY>(this.irdURL, this.makeFormIrd(ird));
  }

  editProduct(product: Product, id: string): Observable<ProductBY> {
    return this.httpClient.put<ProductBY>(`${this.productURL}/${id}`, this.makeForm(product));
  }

  editIrd(ird: Ird, id: string): Observable<IrdBY> {
    return this.httpClient.put<IrdBY>(`${this.irdURL}/${id}`, this.makeFormIrd(ird));
  }


  /////////////////    generic   ///////////////////////////
  GetAllTableNames(): Observable<gettablenamesAll> {
    return this.httpClient.get<gettablenamesAll>(this.getTableNamesURL);
  }

  GetIMEILatestRow(id: string): Observable<genericimeiAll> {
    return this.httpClient.get<genericimeiAll>(`${this.getTableNamesURL}/GetIMEILatestRow/${id}`);
  }

  checkIMEIDuplicate(id: string): Observable<genericCheckDuplicateAll> {
    return this.httpClient.get<genericCheckDuplicateAll>(`${this.getTableNamesURL}/checkIMEIDuplicate/${id}`);
  }


  GetIMEIAllTable(id: string): Observable<genericimeiAll> {
    return this.httpClient.get<genericimeiAll>(`${this.getIMEIGenericURL}/${id}`);
  }


  AddGenericIMEI(model_: genericimei): Observable<genericimeiBy> {
    return this.httpClient.post<genericimeiBy>(this.getTableNamesURL, this.makeFormGenericIMEI(model_));
  }


  ateCalAllToday(id: string): Observable<ateCalibrationAll> {
    return this.httpClient.get<ateCalibrationAll>(`${this.getATECalToday}/${id}`);
  }

  GetTbAteCalByATENameColumn(): Observable<atecalibrationATENameAll> {
    return this.httpClient.get<atecalibrationATENameAll>(this.ATECalGetColumnATEName);
  }

  GetateCalFixtureNameByATEName(id:string): Observable<atecalibrationFixtureNameAll> {
    return this.httpClient.get<atecalibrationFixtureNameAll>(`${this.ATECalGetFixtureNameByATEName}/${id}`);
  }

  ////////////////////////////////////////////////////////

  /////////////////    Equipment Cal   ///////////////////////////
  GetequipmentCalAll(id: string): Observable<ate_equipment_calAll> {
    return this.httpClient.get<ate_equipment_calAll>(`${this.equipmentCalURL}/filter/${id}`);
  }

  GetequipmentCalForFilterLocation(id: string): Observable<ate_equipment_cal_ateNoAll> {
    return this.httpClient.get<ate_equipment_cal_ateNoAll>(`${this.equipmentCalURL}/filterLocation/${id}`);
  }
  
  GetequipmentCalForFilterATE_No(id: string): Observable<ate_equipment_cal_locAll> {
    return this.httpClient.get<ate_equipment_cal_locAll>(`${this.equipmentCalURL}/filterATE_No/${id}`);
  }

  GetequipmentCalByATE_No(): Observable<ate_equipment_cal_ateNoAll> {
    return this.httpClient.get<ate_equipment_cal_ateNoAll>(this.equipmentCalFilterAteNoURL);
  }

  GetequipmentCalByID2(): Observable<euipmentCalMaxIDBy> {
    return this.httpClient.get<euipmentCalMaxIDBy>(`${this.equipmentCalURL}/getMaxID`);
  }

  GetequipmentCalByLocation(): Observable<ate_equipment_cal_locAll> {
    return this.httpClient.get<ate_equipment_cal_locAll>(this.equipmentCalFilterLocURL);
  }

  GetequipmentCalByID(id: string): Observable<ate_equipment_calBy> {
    return this.httpClient.get<ate_equipment_calBy>(`${this.equipmentCalURL}/${id}`);
  }


  DeleteequipmentCal(id: string): Observable<ate_equipment_calBy> {
    return this.httpClient.delete<ate_equipment_calBy>(`${this.equipmentCalURL}/${id}`);
  }

  AddequipmentCal(ate_equipment_cal_: Ate_Equipment_cal222): Observable<ate_equipment_calBy> {
    return this.httpClient.post<ate_equipment_calBy>(this.equipmentCalURL, this.makeFormate_equipment_cal(ate_equipment_cal_));
  }

  EditequipmentCal(ate_equipment_cal_: Ate_Equipment_cal222, id: string): Observable<ate_equipment_calBy> {
    return this.httpClient.put<ate_equipment_calBy>(`${this.equipmentCalURL}/${id}`, this.makeFormate_equipment_cal(ate_equipment_cal_));
  }


  ////////////////////////////////////////////////////////////

  /////////////////    model   ///////////////////////////
  GetmodelAll(): Observable<modelAll> {
    return this.httpClient.get<modelAll>(this.modelURL);
  }

  GetmodelByHardwareType(): Observable<modelAll1> {
    return this.httpClient.get<modelAll1>(this.modelURL2);
  }

  GetmodelByID(id: string): Observable<modelBY> {
    return this.httpClient.get<modelBY>(`${this.modelURL}/${id}`);
  }


  Deletemodel(id: string): Observable<modelBY> {
    return this.httpClient.delete<modelBY>(`${this.modelURL}/${id}`);
  }

  Addmodel(model_: model2): Observable<modelBY> {
    return this.httpClient.post<modelBY>(this.modelURL, this.makeFormModel(model_));
  }

  Editmodel(model_: model2, id: string): Observable<modelBY> {
    return this.httpClient.put<modelBY>(`${this.modelURL}/${id}`, this.makeFormModel(model_));
  }

  ////////////////////////////////////////////////////////////

  /////////////////    tbAteconfigFile   ///////////////////////////
  GettbAteconfigFileAll(id: string): Observable<tbAteconfigFileAll> {
    return this.httpClient.get<tbAteconfigFileAll>(`${this.tbAteconfigFileURL}/filter/${id}`);
  }



  GetTbAteconfigFileForFilterConfigType(id: string): Observable<tbAteconfigFile3All> {
    return this.httpClient.get<tbAteconfigFile3All>(`${this.tbAteconfigFileURL}/filterConfigType/${id}`);
  }

  GetTbAteconfigFileForFilterHardwareType(id: string): Observable<tbAteconfigFile2All> {
    return this.httpClient.get<tbAteconfigFile2All>(`${this.tbAteconfigFileURL}/filterHardwareType/${id}`);
  }




  GettbAteconfigFileByHardwareType(): Observable<tbAteconfigFile2All> {
    return this.httpClient.get<tbAteconfigFile2All>(this.tbAteconfigFileURL2);
  }

  GettbAteconfigFileByConfigType(): Observable<tbAteconfigFile3All> {
    return this.httpClient.get<tbAteconfigFile3All>(this.tbAteconfigFileURL3);
  }

  GettbAteconfigFileByID(id: string): Observable<tbAteconfigFileBY> {
    return this.httpClient.get<tbAteconfigFileBY>(`${this.tbAteconfigFileURL}/${id}`);
  }


  DeletetbAteconfigFile(id: string): Observable<tbAteconfigFileBY> {
    return this.httpClient.delete<tbAteconfigFileBY>(`${this.tbAteconfigFileURL}/${id}`);
  }

  AddtbAteconfigFile(tbAteconfigFile_: tbAteconfigFile): Observable<tbAteconfigFileBY> {
    return this.httpClient.post<tbAteconfigFileBY>(this.tbAteconfigFileURL, this.makeFormtbAteconfigFile(tbAteconfigFile_));
  }
  TbAteconfgFile
  EdittbAteconfigFile(tbAteconfigFile_: tbAteconfigFile, id: string): Observable<tbAteconfigFileBY> {
    return this.httpClient.put<tbAteconfigFileBY>(`${this.tbAteconfigFileURL}/${id}`, this.makeFormtbAteconfigFile(tbAteconfigFile_));
  }

  ////////////////////////////////////////////////////////////


  /////////////////    tbprofile   ///////////////////////////
  GetTbProfileAll(): Observable<TbProfileAll> {
    return this.httpClient.get<TbProfileAll>(this.tbprofileURL);
  }

  GetTbProfileByID(id: string): Observable<TbProfileBY> {
    return this.httpClient.get<TbProfileBY>(`${this.tbprofileURL}/${id}`);
  }


  DeleteTbProfile(id: string): Observable<TbProfileBY> {
    return this.httpClient.delete<TbProfileBY>(`${this.tbprofileURL}/${id}`);
  }

  AddTbProfile(tbprofile: TbProfile): Observable<TbProfileBY> {
    return this.httpClient.post<TbProfileBY>(this.tbprofileURL, this.makeFormTbProfile(tbprofile));
  }

  EditTbProfile(tbprofile: TbProfile, id: string): Observable<TbProfileBY> {
    return this.httpClient.put<TbProfileBY>(`${this.tbprofileURL}/${id}`, this.makeFormTbProfile(tbprofile));
  }

  GetTbProfileByProfileID(id: string): Observable<TbProfileAll> {
    return this.httpClient.get<TbProfileAll>(`${this.tbprofileURL}/ByProfileID/${id}`);
  }

  ////////////////////////////////////////////////////////////

  /////////////////    tbEquipment   ///////////////////////////
  GetTbEquipmentAll(): Observable<TbEquipmentAll> {
    return this.httpClient.get<TbEquipmentAll>(this.tbEquipmentURL);
  }

  GetTbEquipmentByID(id: string): Observable<TbEquipmentBY> {
    return this.httpClient.get<TbEquipmentBY>(`${this.tbEquipmentURL}/${id}`);
  }


  DeleteTbEquipment(id: string): Observable<TbEquipmentBY> {
    return this.httpClient.delete<TbEquipmentBY>(`${this.tbEquipmentURL}/${id}`);
  }

  AddTbEquipment(tbEquipment: TbEquipment): Observable<TbEquipmentBY> {
    return this.httpClient.post<TbEquipmentBY>(this.tbEquipmentURL, this.makeFormTbEquipment(tbEquipment));
  }

  EditTbEquipment(tbEquipment: TbEquipment, id: string): Observable<TbEquipmentBY> {
    return this.httpClient.put<TbEquipmentBY>(`${this.tbEquipmentURL}/${id}`, this.makeFormTbEquipment(tbEquipment));
  }

  GetTbEquipmentByProfileID(id: string): Observable<TbEquipmentAll> {
    return this.httpClient.get<TbEquipmentAll>(`${this.tbEquipmentURL}/ByEquipmentID/${id}`);
  }

  ////////////////////////////////////////////////////////////


  /////////////////    tbprofiledetail   ///////////////////////////
  GetTbProfileDetailAll(): Observable<TbProfileDetailAll> {
    return this.httpClient.get<TbProfileDetailAll>(this.tbprofiledetailURL);
  }

  GetTbProfileDetailByID(id: string): Observable<TbProfileDetailBY> {
    return this.httpClient.get<TbProfileDetailBY>(`${this.tbprofiledetailURL}/${id}`);
  }


  DeleteTbProfileDetail(id: string): Observable<TbProfileDetailBY> {
    return this.httpClient.delete<TbProfileDetailBY>(`${this.tbprofiledetailURL}/${id}`);
  }

  AddTbProfileDetail(tbProfileDetail: TbProfileDetail): Observable<TbProfileDetailBY> {
    return this.httpClient.post<TbProfileDetailBY>(this.tbprofiledetailURL, this.makeFormTbProfileDetail(tbProfileDetail));
  }

  EditTbProfileDetail(tbProfileDetail: TbProfileDetail, id: string): Observable<TbProfileDetailBY> {
    return this.httpClient.put<TbProfileDetailBY>(`${this.tbprofiledetailURL}/${id}`, this.makeFormTbProfileDetail(tbProfileDetail));
  }

  GetTbProfileDetailByProfileID(id: string): Observable<TbProfileDetailAll> {
    return this.httpClient.get<TbProfileDetailAll>(`${this.tbprofiledetailURL}/ByProfileID/${id}`);
  }


  ////////////////////////////////////////////////////////////

  /////////////////    ate_goldBoard   ///////////////////////////
  Getate_gold_boardAll(): Observable<ate_gold_boardAll> {
    return this.httpClient.get<ate_gold_boardAll>(this.ate_gold_boardURL);
  }

  Getate_gold_boardBySN(id: string): Observable<ate_gold_boardBy> {
    return this.httpClient.get<ate_gold_boardBy>(`${this.ate_gold_boardURL}/${id}`);
  }


  Deleteate_gold_board(id: string): Observable<ate_gold_boardBy> {
    return this.httpClient.delete<ate_gold_boardBy>(`${this.ate_gold_boardURL}/${id}`);
  }

  Addate_gold_board(ate_gold_board_: ate_gold_board): Observable<ate_gold_boardBy> {
    return this.httpClient.post<ate_gold_boardBy>(this.ate_gold_boardURL, this.makeFormAte_gold_board(ate_gold_board_));
  }

  Editate_gold_board(ate_gold_board_: ate_gold_board, id: string): Observable<ate_gold_boardBy> {
    return this.httpClient.put<ate_gold_boardBy>(`${this.ate_gold_boardURL}/${id}`, this.makeFormAte_gold_board(ate_gold_board_));
  }



  ////////////////////////////////////////////////////////////


  /////////////////    TbUutname   ///////////////////////////
  GetTbUutnameAll(): Observable<TbUutnameAll> {
    return this.httpClient.get<TbUutnameAll>(this.tbUutnamelURL);
  }

  GetTbUutnameByID(id: string): Observable<TbUutnameBy> {
    return this.httpClient.get<TbUutnameBy>(`${this.tbUutnamelURL}/${id}`);
  }


  DeleteTbUutname(id: string): Observable<TbUutnameBy> {
    return this.httpClient.delete<TbUutnameBy>(`${this.tbUutnamelURL}/${id}`);
  }

  AddTbUutname(tbUutname: TbUutname): Observable<TbUutnameBy> {
    return this.httpClient.post<TbUutnameBy>(this.tbUutnamelURL, this.makeFormTbUutname(tbUutname));
  }

  EditTbUutname(tbUutname: TbUutname, id: string): Observable<TbUutnameBy> {
    return this.httpClient.put<TbUutnameBy>(`${this.tbUutnamelURL}/${id}`, this.makeFormTbUutname(tbUutname));
  }

  ////////////////////////////////////////////////////////////

  /////////////////    TbUutprofile   ///////////////////////////
  GetTbUutprofileAll(): Observable<TbUutprofileAll> {
    return this.httpClient.get<TbUutprofileAll>(this.tbUutprofileURL);
  }

  GetTbUutprofileByID(id: string): Observable<TbUutprofileBy> {
    return this.httpClient.get<TbUutprofileBy>(`${this.tbUutprofileURL}/${id}`);
  }

  GetTbUutprofileByUUTNameID(id: string): Observable<TbUutprofileAll> {
    return this.httpClient.get<TbUutprofileAll>(`${this.tbUutprofileURL}/ByUUTNameID/${id}`);
  }



  DeleteTbUutprofile(id: string): Observable<TbUutprofileBy> {
    return this.httpClient.delete<TbUutprofileBy>(`${this.tbUutprofileURL}/${id}`);
  }

  AddTbUutprofile(tbUutprofile: TbUutprofile): Observable<TbUutprofileBy> {
    return this.httpClient.post<TbUutprofileBy>(this.tbUutprofileURL, this.makeFormTbUutprofile(tbUutprofile));
  }

  EditTbUutprofile(tbUutprofile: TbUutprofile, id: string): Observable<TbUutprofileBy> {
    return this.httpClient.put<TbUutprofileBy>(`${this.tbUutprofileURL}/${id}`, this.makeFormTbUutprofile(tbUutprofile));
  }

  ////////////////////////////////////////////////////////////





  //////////////////////////////////// a9522b_cnt ///////////////////////////////////////////////////////


  Geta9522b_cntAll(): Observable<a9522b_cntAll> {
    return this.httpClient.get<a9522b_cntAll>(this.a9522b_cntURL);
  }

  Geta9522b_cntByID(id: string): Observable<a9522b_cntBy> {
    return this.httpClient.get<a9522b_cntBy>(`${this.a9522b_cntURL}/${id}`);
  }


  Deletea9522b_cnt(id: string): Observable<a9522b_cntBy> {
    return this.httpClient.delete<a9522b_cntBy>(`${this.a9522b_cntURL}/${id}`);
  }

  Adda9522b_cnt(a9522b_cnt_: a9522b_cnt): Observable<a9522b_cntBy> {
    return this.httpClient.post<a9522b_cntBy>(this.a9522b_cntURL, this.makeForma9522b_cnt(a9522b_cnt_));
  }

  Edita9522b_cnt(a9522b_cnt_: a9522b_cnt, id: string): Observable<a9522b_cntBy> {
    return this.httpClient.put<a9522b_cntBy>(`${this.a9522b_cntURL}/${id}`, this.makeForma9522b_cnt(a9522b_cnt_));
  }




  ////////////////////////////////////////////




  //////////////////////////////////// a9522b_ext_cnt ///////////////////////////////////////////////////////


  Geta9522b_ext_cntAll(): Observable<a9522b_ext_cntAll> {
    return this.httpClient.get<a9522b_ext_cntAll>(this.a9522b_ext_cntURL);
  }

  Geta9522b_ext_cntByID(id: string): Observable<a9522b_ext_cntBy> {
    return this.httpClient.get<a9522b_ext_cntBy>(`${this.a9522b_ext_cntURL}/${id}`);
  }


  Deletea9522b_ext_cnt(id: string): Observable<a9522b_ext_cntBy> {
    return this.httpClient.delete<a9522b_ext_cntBy>(`${this.a9522b_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////


  //////////////////////////////////// a9523_cnt ///////////////////////////////////////////////////////


  Geta9523_cntAll(): Observable<a9523_cntAll> {
    return this.httpClient.get<a9523_cntAll>(this.a9523_cntURL);
  }

  Geta9523_cntByID(id: string): Observable<a9523_cntBy> {
    return this.httpClient.get<a9523_cntBy>(`${this.a9523_cntURL}/${id}`);
  }


  Deletea9523_cnt(id: string): Observable<a9523_cntBy> {
    return this.httpClient.delete<a9523_cntBy>(`${this.a9523_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9523_ext_imei ///////////////////////////////////////////////////////


  Geta9523_ext_imeiAll(): Observable<a9523_ext_imeiAll> {
    return this.httpClient.get<a9523_ext_imeiAll>(this.a9523_ext_imeiURL);
  }

  Geta9523_ext_imeiByID(id: string): Observable<a9523_ext_imeiBy> {
    return this.httpClient.get<a9523_ext_imeiBy>(`${this.a9523_ext_imeiURL}/${id}`);
  }


  GetSN_9523_ext_imei(id: string): Observable<a9523_ext_imeiAll> {
    return this.httpClient.get<a9523_ext_imeiAll>(`${this.a9523_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9523_ext_imei(id: string): Observable<a9523_ext_imeiAll> {
    return this.httpClient.get<a9523_ext_imeiAll>(`${this.a9523_ext_imeiURL}/GetImei/${id}`);
  }

  GetImei_9523_ext_imei_Array(id: string): Observable<a9523_ext_imeiAll> {
    return this.httpClient.get<a9523_ext_imeiAll>(`${this.a9523_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9523_ext_imei_Array(id: string): Observable<a9523_ext_imeiAll> {
    return this.httpClient.get<a9523_ext_imeiAll>(`${this.a9523_ext_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9523_ext_imei(id: string): Observable<a9523_ext_imeiBy> {
    return this.httpClient.delete<a9523_ext_imeiBy>(`${this.a9523_ext_imeiURL}/${id}`);
  }

  Adda9523_ext_imei(a9523_ext_imei_: a9523_ext_imei): Observable<a9523_ext_imeiBy> {
    return this.httpClient.post<a9523_ext_imeiBy>(this.a9523_ext_imeiURL, this.makeForma9523_ext_imei(a9523_ext_imei_));
  }

  Edita9523_ext_imei(a9523_ext_imei_: a9523_ext_imei, id: string): Observable<a9523_ext_imeiBy> {
    return this.httpClient.put<a9523_ext_imeiBy>(`${this.a9523_ext_imeiURL}/${id}`, this.makeForma9523_ext_imei(a9523_ext_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9523mw_cnt ///////////////////////////////////////////////////////


  Geta9523mw_cntAll(): Observable<a9523mw_cntAll> {
    return this.httpClient.get<a9523mw_cntAll>(this.a9523mw_cntURL);
  }

  Geta9523mw_cntByID(id: string): Observable<a9523mw_cntBy> {
    return this.httpClient.get<a9523mw_cntBy>(`${this.a9523mw_cntURL}/${id}`);
  }


  Deletea9523mw_cnt(id: string): Observable<a9523mw_cntBy> {
    return this.httpClient.delete<a9523mw_cntBy>(`${this.a9523mw_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9523mw_ext_cnt ///////////////////////////////////////////////////////


  Geta9523mw_ext_cntAll(): Observable<a9523mw_ext_cntAll> {
    return this.httpClient.get<a9523mw_ext_cntAll>(this.a9523mw_ext_cntURL);
  }

  Geta9523mw_ext_cntByID(id: string): Observable<a9523mw_ext_cntBy> {
    return this.httpClient.get<a9523mw_ext_cntBy>(`${this.a9523mw_ext_cntURL}/${id}`);
  }


  Deletea9523mw_ext_cnt(id: string): Observable<a9523mw_ext_cntBy> {
    return this.httpClient.delete<a9523mw_ext_cntBy>(`${this.a9523mw_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9523mw_ext_imei ///////////////////////////////////////////////////////


  Geta9523mw_ext_imeiAll(): Observable<a9523mw_ext_imeiAll> {
    return this.httpClient.get<a9523mw_ext_imeiAll>(this.a9523mw_ext_imeiURL);
  }

  Geta9523mw_ext_imeiByID(id: string): Observable<a9523mw_ext_imeiBy> {
    return this.httpClient.get<a9523mw_ext_imeiBy>(`${this.a9523mw_ext_imeiURL}/${id}`);
  }


  GetSN_9523mw_ext_imei(id: string): Observable<a9523mw_ext_imeiAll> {
    return this.httpClient.get<a9523mw_ext_imeiAll>(`${this.a9523mw_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9523mw_ext_imei(id: string): Observable<a9523mw_ext_imeiAll> {
    return this.httpClient.get<a9523mw_ext_imeiAll>(`${this.a9523mw_ext_imeiURL}/GetImei/${id}`);
  }

  GetImei_9523mw_ext_imei_Array(id: string): Observable<a9523mw_ext_imeiAll> {
    return this.httpClient.get<a9523mw_ext_imeiAll>(`${this.a9523mw_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9523mw_ext_imei_Array(id: string): Observable<a9523mw_ext_imeiAll> {
    return this.httpClient.get<a9523mw_ext_imeiAll>(`${this.a9523mw_ext_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9523mw_ext_imei(id: string): Observable<a9523mw_ext_imeiBy> {
    return this.httpClient.delete<a9523mw_ext_imeiBy>(`${this.a9523mw_ext_imeiURL}/${id}`);
  }

  Adda9523mw_ext_imei(a9523mw_ext_imei_: a9523mw_ext_imei): Observable<a9523mw_ext_imeiBy> {
    return this.httpClient.post<a9523mw_ext_imeiBy>(this.a9523mw_ext_imeiURL, this.makeForma9523mw_ext_imei(a9523mw_ext_imei_));
  }

  Edita9523mw_ext_imei(a9523mw_ext_imei_: a9523mw_ext_imei, id: string): Observable<a9523mw_ext_imeiBy> {
    return this.httpClient.put<a9523mw_ext_imeiBy>(`${this.a9523mw_ext_imeiURL}/${id}`, this.makeForma9523mw_ext_imei(a9523mw_ext_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9523mw_imei ///////////////////////////////////////////////////////


  Geta9523mw_imeiAll(): Observable<a9523mw_imeiAll> {
    return this.httpClient.get<a9523mw_imeiAll>(this.a9523mw_imeiURL);
  }

  Geta9523mw_imeiByID(id: string): Observable<a9523mw_imeiBy> {
    return this.httpClient.get<a9523mw_imeiBy>(`${this.a9523mw_imeiURL}/${id}`);
  }


  GetSN_9523mw_imei(id: string): Observable<a9523mw_imeiAll> {
    return this.httpClient.get<a9523mw_imeiAll>(`${this.a9523mw_imeiURL}/GetSN/${id}`);
  }

  GetImei_9523mw_imei(id: string): Observable<a9523mw_imeiAll> {
    return this.httpClient.get<a9523mw_imeiAll>(`${this.a9523mw_imeiURL}/GetImei/${id}`);
  }

  GetImei_9523mw_imei_Array(id: string): Observable<a9523mw_imeiAll> {
    return this.httpClient.get<a9523mw_imeiAll>(`${this.a9523mw_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9523mw_imei_Array(id: string): Observable<a9523mw_imeiAll> {
    return this.httpClient.get<a9523mw_imeiAll>(`${this.a9523mw_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9523mw_imei(id: string): Observable<a9523mw_imeiBy> {
    return this.httpClient.delete<a9523mw_imeiBy>(`${this.a9523mw_imeiURL}/${id}`);
  }

  Adda9523mw_imei(a9523mw_imei_: a9523mw_imei): Observable<a9523mw_imeiBy> {
    return this.httpClient.post<a9523mw_imeiBy>(this.a9523mw_imeiURL, this.makeForma9523mw_imei(a9523mw_imei_));
  }

  Edita9523mw_imei(a9523mw_imei_: a9523mw_imei, id: string): Observable<a9523mw_imeiBy> {
    return this.httpClient.put<a9523mw_imeiBy>(`${this.a9523mw_imeiURL}/${id}`, this.makeForma9523mw_imei(a9523mw_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9523ptt_cnt ///////////////////////////////////////////////////////


  Geta9523ptt_cntAll(): Observable<a9523ptt_cntAll> {
    return this.httpClient.get<a9523ptt_cntAll>(this.a9523ptt_cntURL);
  }

  Geta9523ptt_cntByID(id: string): Observable<a9523ptt_cntBy> {
    return this.httpClient.get<a9523ptt_cntBy>(`${this.a9523ptt_cntURL}/${id}`);
  }


  Deletea9523ptt_cnt(id: string): Observable<a9523ptt_cntBy> {
    return this.httpClient.delete<a9523ptt_cntBy>(`${this.a9523ptt_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9523ptt_imei ///////////////////////////////////////////////////////


  Geta9523ptt_imeiAll(): Observable<a9523ptt_imeiAll> {
    return this.httpClient.get<a9523ptt_imeiAll>(this.a9523ptt_imeiURL);
  }

  Geta9523ptt_imeiByID(id: string): Observable<a9523ptt_imeiBy> {
    return this.httpClient.get<a9523ptt_imeiBy>(`${this.a9523ptt_imeiURL}/${id}`);
  }


  GetSN_9523ptt_imei(id: string): Observable<a9523ptt_imeiAll> {
    return this.httpClient.get<a9523ptt_imeiAll>(`${this.a9523ptt_imeiURL}/GetSN/${id}`);
  }

  GetImei_9523ptt_imei(id: string): Observable<a9523ptt_imeiAll> {
    return this.httpClient.get<a9523ptt_imeiAll>(`${this.a9523ptt_imeiURL}/GetImei/${id}`);
  }

  GetImei_9523ptt_imei_Array(id: string): Observable<a9523ptt_imeiAll> {
    return this.httpClient.get<a9523ptt_imeiAll>(`${this.a9523ptt_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9523ptt_imei_Array(id: string): Observable<a9523ptt_imeiAll> {
    return this.httpClient.get<a9523ptt_imeiAll>(`${this.a9523ptt_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9523ptt_imei(id: string): Observable<a9523ptt_imeiBy> {
    return this.httpClient.delete<a9523ptt_imeiBy>(`${this.a9523ptt_imeiURL}/${id}`);
  }

  Adda9523ptt_imei(a9523ptt_imei_: a9523ptt_imei): Observable<a9523ptt_imeiBy> {
    return this.httpClient.post<a9523ptt_imeiBy>(this.a9523ptt_imeiURL, this.makeForma9523ptt_imei(a9523ptt_imei_));
  }

  Edita9523ptt_imei(a9523ptt_imei_: a9523ptt_imei, id: string): Observable<a9523ptt_imeiBy> {
    return this.httpClient.put<a9523ptt_imeiBy>(`${this.a9523ptt_imeiURL}/${id}`, this.makeForma9523ptt_imei(a9523ptt_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9555a_cnt ///////////////////////////////////////////////////////


  Geta9555a_cntAll(): Observable<a9555a_cntAll> {
    return this.httpClient.get<a9555a_cntAll>(this.a9555a_cntURL);
  }

  Geta9555a_cntByID(id: string): Observable<a9555a_cntBy> {
    return this.httpClient.get<a9555a_cntBy>(`${this.a9555a_cntURL}/${id}`);
  }


  Deletea9555a_cnt(id: string): Observable<a9555a_cntBy> {
    return this.httpClient.delete<a9555a_cntBy>(`${this.a9555a_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9555a_ext_cnt ///////////////////////////////////////////////////////


  Geta9555a_ext_cntAll(): Observable<a9555a_ext_cntAll> {
    return this.httpClient.get<a9555a_ext_cntAll>(this.a9555a_ext_cntURL);
  }

  Geta9555a_ext_cntByID(id: string): Observable<a9555a_ext_cntBy> {
    return this.httpClient.get<a9555a_ext_cntBy>(`${this.a9555a_ext_cntURL}/${id}`);
  }


  Deletea9555a_ext_cnt(id: string): Observable<a9555a_ext_cntBy> {
    return this.httpClient.delete<a9555a_ext_cntBy>(`${this.a9555a_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9555a_ext_imei ///////////////////////////////////////////////////////


  Geta9555a_ext_imeiAll(): Observable<a9555a_ext_imeiAll> {
    return this.httpClient.get<a9555a_ext_imeiAll>(this.a9555a_ext_imeiURL);
  }

  Geta9555a_ext_imeiByID(id: string): Observable<a9555a_ext_imeiBy> {
    return this.httpClient.get<a9555a_ext_imeiBy>(`${this.a9555a_ext_imeiURL}/${id}`);
  }


  GetSN_9555a_ext_imei(id: string): Observable<a9555a_ext_imeiAll> {
    return this.httpClient.get<a9555a_ext_imeiAll>(`${this.a9555a_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9555a_ext_imei(id: string): Observable<a9555a_ext_imeiAll> {
    return this.httpClient.get<a9555a_ext_imeiAll>(`${this.a9555a_ext_imeiURL}/GetImei/${id}`);
  }

  GetImei_9555a_ext_imei_Array(id: string): Observable<a9555a_ext_imeiAll> {
    return this.httpClient.get<a9555a_ext_imeiAll>(`${this.a9555a_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9555a_ext_imei_Array(id: string): Observable<a9555a_ext_imeiAll> {
    return this.httpClient.get<a9555a_ext_imeiAll>(`${this.a9555a_ext_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9555a_ext_imei(id: string): Observable<a9555a_ext_imeiBy> {
    return this.httpClient.delete<a9555a_ext_imeiBy>(`${this.a9555a_ext_imeiURL}/${id}`);
  }

  Adda9555a_ext_imei(a9555a_ext_imei_: a9555a_ext_imei): Observable<a9555a_ext_imeiBy> {
    return this.httpClient.post<a9555a_ext_imeiBy>(this.a9555a_ext_imeiURL, this.makeForma9555a_ext_imei(a9555a_ext_imei_));
  }

  Edita9555a_ext_imei(a9555a_ext_imei_: a9555a_ext_imei, id: string): Observable<a9555a_ext_imeiBy> {
    return this.httpClient.put<a9555a_ext_imeiBy>(`${this.a9555a_ext_imeiURL}/${id}`, this.makeForma9555a_ext_imei(a9555a_ext_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9555a_gsa_cnt ///////////////////////////////////////////////////////


  Geta9555a_gsa_cntAll(): Observable<a9555a_gsa_cntAll> {
    return this.httpClient.get<a9555a_gsa_cntAll>(this.a9555a_gsa_cntURL);
  }

  Geta9555a_gsa_cntByID(id: string): Observable<a9555a_gsa_cntBy> {
    return this.httpClient.get<a9555a_gsa_cntBy>(`${this.a9555a_gsa_cntURL}/${id}`);
  }


  Deletea9555a_gsa_cnt(id: string): Observable<a9555a_gsa_cntBy> {
    return this.httpClient.delete<a9555a_gsa_cntBy>(`${this.a9555a_gsa_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9555a_gsa_imei ///////////////////////////////////////////////////////


  Geta9555a_gsa_imeiAll(): Observable<a9555a_gsa_imeiAll> {
    return this.httpClient.get<a9555a_gsa_imeiAll>(this.a9555a_gsa_imeiURL);
  }

  Geta9555a_gsa_imeiByID(id: string): Observable<a9555a_gsa_imeiBy> {
    return this.httpClient.get<a9555a_gsa_imeiBy>(`${this.a9555a_gsa_imeiURL}/${id}`);
  }


  GetSN_9555a_gsa_imei(id: string): Observable<a9555a_gsa_imeiAll> {
    return this.httpClient.get<a9555a_gsa_imeiAll>(`${this.a9555a_gsa_imeiURL}/GetSN/${id}`);
  }

  GetImei_9555a_gsa_imei(id: string): Observable<a9555a_gsa_imeiAll> {
    return this.httpClient.get<a9555a_gsa_imeiAll>(`${this.a9555a_gsa_imeiURL}/GetImei/${id}`);
  }

  GetImei_9555a_gsa_imei_Array(id: string): Observable<a9555a_gsa_imeiAll> {
    return this.httpClient.get<a9555a_gsa_imeiAll>(`${this.a9555a_gsa_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9555a_gsa_imei_Array(id: string): Observable<a9555a_gsa_imeiAll> {
    return this.httpClient.get<a9555a_gsa_imeiAll>(`${this.a9555a_gsa_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9555a_gsa_imei(id: string): Observable<a9555a_gsa_imeiBy> {
    return this.httpClient.delete<a9555a_gsa_imeiBy>(`${this.a9555a_gsa_imeiURL}/${id}`);
  }

  Adda9555a_gsa_imei(a9555a_gsa_imei_: a9555a_gsa_imei): Observable<a9555a_gsa_imeiBy> {
    return this.httpClient.post<a9555a_gsa_imeiBy>(this.a9555a_gsa_imeiURL, this.makeForma9555a_gsa_imei(a9555a_gsa_imei_));
  }

  Edita9555a_gsa_imei(a9555a_gsa_imei_: a9555a_gsa_imei, id: string): Observable<a9555a_gsa_imeiBy> {
    return this.httpClient.put<a9555a_gsa_imeiBy>(`${this.a9555a_gsa_imeiURL}/${id}`, this.makeForma9555a_gsa_imei(a9555a_gsa_imei_));
  }






  ////////////////////////////////////////////


  //////////////////////////////////// a9555a_imei ///////////////////////////////////////////////////////


  Geta9555a_imeiAll(): Observable<a9555a_imeiAll> {
    return this.httpClient.get<a9555a_imeiAll>(this.a9555a_imeiURL);
  }

  Geta9555a_imeiByID(id: string): Observable<a9555a_imeiBy> {
    return this.httpClient.get<a9555a_imeiBy>(`${this.a9555a_imeiURL}/${id}`);
  }


  GetSN_9555a_imei(id: string): Observable<a9555a_imeiAll> {
    return this.httpClient.get<a9555a_imeiAll>(`${this.a9555a_imeiURL}/GetSN/${id}`);
  }

  GetImei_9555a_imei(id: string): Observable<a9555a_imeiAll> {
    return this.httpClient.get<a9555a_imeiAll>(`${this.a9555a_imeiURL}/GetImei/${id}`);
  }

  GetImei_9555a_imei_Array(id: string): Observable<a9555a_imeiAll> {
    return this.httpClient.get<a9555a_imeiAll>(`${this.a9555a_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9555a_imei_Array(id: string): Observable<a9555a_imeiAll> {
    return this.httpClient.get<a9555a_imeiAll>(`${this.a9555a_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9555a_imei(id: string): Observable<a9555a_imeiBy> {
    return this.httpClient.delete<a9555a_imeiBy>(`${this.a9555a_imeiURL}/${id}`);
  }

  Adda9555a_imei(a9555a_imei_: a9555a_imei): Observable<a9555a_imeiBy> {
    return this.httpClient.post<a9555a_imeiBy>(this.a9555a_imeiURL, this.makeForma9555a_imei(a9555a_imei_));
  }

  Edita9555a_imei(a9555a_imei_: a9555a_imei, id: string): Observable<a9555a_imeiBy> {
    return this.httpClient.put<a9555a_imeiBy>(`${this.a9555a_imeiURL}/${id}`, this.makeForma9555a_imei(a9555a_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9575_cnt ///////////////////////////////////////////////////////


  Geta9575_cntAll(): Observable<a9575_cntAll> {
    return this.httpClient.get<a9575_cntAll>(this.a9575_cntURL);
  }

  Geta9575_cntByID(id: string): Observable<a9575_cntBy> {
    return this.httpClient.get<a9575_cntBy>(`${this.a9575_cntURL}/${id}`);
  }


  Deletea9575_cnt(id: string): Observable<a9575_cntBy> {
    return this.httpClient.delete<a9575_cntBy>(`${this.a9575_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9575_ext_cnt ///////////////////////////////////////////////////////


  Geta9575_ext_cntAll(): Observable<a9575_ext_cntAll> {
    return this.httpClient.get<a9575_ext_cntAll>(this.a9575_ext_cntURL);
  }

  Geta9575_ext_cntByID(id: string): Observable<a9575_ext_cntBy> {
    return this.httpClient.get<a9575_ext_cntBy>(`${this.a9575_ext_cntURL}/${id}`);
  }


  Deletea9575_ext_cnt(id: string): Observable<a9575_ext_cntBy> {
    return this.httpClient.delete<a9575_ext_cntBy>(`${this.a9575_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9575_ext_imei ///////////////////////////////////////////////////////


  Geta9575_ext_imeiAll(): Observable<a9575_ext_imeiAll> {
    return this.httpClient.get<a9575_ext_imeiAll>(this.a9575_ext_imeiURL);
  }

  Geta9575_ext_imeiByID(id: string): Observable<a9575_ext_imeiBy> {
    return this.httpClient.get<a9575_ext_imeiBy>(`${this.a9575_ext_imeiURL}/${id}`);
  }


  GetSN_9575_ext_imei(id: string): Observable<a9575_ext_imeiAll> {
    return this.httpClient.get<a9575_ext_imeiAll>(`${this.a9575_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9575_ext_imei(id: string): Observable<a9575_ext_imeiAll> {
    return this.httpClient.get<a9575_ext_imeiAll>(`${this.a9575_ext_imeiURL}/GetImei/${id}`);
  }

  GetImei_9575_ext_imei_Array(id: string): Observable<a9575_ext_imeiAll> {
    return this.httpClient.get<a9575_ext_imeiAll>(`${this.a9575_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9575_ext_imei_Array(id: string): Observable<a9575_ext_imeiAll> {
    return this.httpClient.get<a9575_ext_imeiAll>(`${this.a9575_ext_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9575_ext_imei(id: string): Observable<a9575_ext_imeiBy> {
    return this.httpClient.delete<a9575_ext_imeiBy>(`${this.a9575_ext_imeiURL}/${id}`);
  }

  Adda9575_ext_imei(a9575_ext_imei_: a9575_ext_imei): Observable<a9575_ext_imeiBy> {
    return this.httpClient.post<a9575_ext_imeiBy>(this.a9575_ext_imeiURL, this.makeForma9575_ext_imei(a9575_ext_imei_));
  }

  Edita9575_ext_imei(a9575_ext_imei_: a9575_ext_imei, id: string): Observable<a9575_ext_imeiBy> {
    return this.httpClient.put<a9575_ext_imeiBy>(`${this.a9575_ext_imeiURL}/${id}`, this.makeForma9575_ext_imei(a9575_ext_imei_));
  }






  ////////////////////////////////////////////


  //////////////////////////////////// a9575_imei ///////////////////////////////////////////////////////


  Geta9575_imeiAll(): Observable<a9575_imeiAll> {
    return this.httpClient.get<a9575_imeiAll>(this.a9575_imeiURL);
  }

  Geta9575_imeiByID(id: string): Observable<a9575_imeiBy> {
    return this.httpClient.get<a9575_imeiBy>(`${this.a9575_imeiURL}/${id}`);
  }


  GetSN_9575_imei(id: string): Observable<a9575_imeiAll> {
    return this.httpClient.get<a9575_imeiAll>(`${this.a9575_imeiURL}/GetSN/${id}`);
  }

  GetImei_9575_imei(id: string): Observable<a9575_imeiAll> {
    return this.httpClient.get<a9575_imeiAll>(`${this.a9575_imeiURL}/GetImei/${id}`);
  }

  GetImei_9575_imei_Array(id: string): Observable<a9575_imeiAll> {
    return this.httpClient.get<a9575_imeiAll>(`${this.a9575_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9575_imei_Array(id: string): Observable<a9575_imeiAll> {
    return this.httpClient.get<a9575_imeiAll>(`${this.a9575_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9575_imei(id: string): Observable<a9575_imeiBy> {
    return this.httpClient.delete<a9575_imeiBy>(`${this.a9575_imeiURL}/${id}`);
  }

  Adda9575_imei(a9575_imei_: a9575_imei): Observable<a9575_imeiBy> {
    return this.httpClient.post<a9575_imeiBy>(this.a9575_imeiURL, this.makeForma9575_imei(a9575_imei_));
  }

  Edita9575_imei(a9575_imei_: a9575_imei, id: string): Observable<a9575_imeiBy> {
    return this.httpClient.put<a9575_imeiBy>(`${this.a9575_imeiURL}/${id}`, this.makeForma9575_imei(a9575_imei_));
  }






  ////////////////////////////////////////////


  //////////////////////////////////// a9575e_cnt ///////////////////////////////////////////////////////


  Geta9575e_cntAll(): Observable<a9575e_cntAll> {
    return this.httpClient.get<a9575e_cntAll>(this.a9575e_cntURL);
  }

  Geta9575e_cntByID(id: string): Observable<a9575e_cntBy> {
    return this.httpClient.get<a9575e_cntBy>(`${this.a9575e_cntURL}/${id}`);
  }


  Deletea9575e_cnt(id: string): Observable<a9575e_cntBy> {
    return this.httpClient.delete<a9575e_cntBy>(`${this.a9575e_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9575e_ext_cnt ///////////////////////////////////////////////////////


  Geta9575e_ext_cntAll(): Observable<a9575e_ext_cntAll> {
    return this.httpClient.get<a9575e_ext_cntAll>(this.a9575e_ext_cntURL);
  }

  Geta9575e_ext_cntByID(id: string): Observable<a9575e_ext_cntBy> {
    return this.httpClient.get<a9575e_ext_cntBy>(`${this.a9575e_ext_cntURL}/${id}`);
  }


  Deletea9575e_ext_cnt(id: string): Observable<a9575e_ext_cntBy> {
    return this.httpClient.delete<a9575e_ext_cntBy>(`${this.a9575e_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9575e_ext_imei ///////////////////////////////////////////////////////


  Geta9575e_ext_imeiAll(): Observable<a9575e_ext_imeiAll> {
    return this.httpClient.get<a9575e_ext_imeiAll>(this.a9575e_ext_imeiURL);
  }

  Geta9575e_ext_imeiByID(id: string): Observable<a9575e_ext_imeiBy> {
    return this.httpClient.get<a9575e_ext_imeiBy>(`${this.a9575e_ext_imeiURL}/${id}`);
  }


  GetSN_9575e_ext_imei(id: string): Observable<a9575e_ext_imeiAll> {
    return this.httpClient.get<a9575e_ext_imeiAll>(`${this.a9575e_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9575e_ext_imei(id: string): Observable<a9575e_ext_imeiAll> {
    return this.httpClient.get<a9575e_ext_imeiAll>(`${this.a9575e_ext_imeiURL}/GetImei/${id}`);
  }

  GetImei_9575e_ext_imei_Array(id: string): Observable<a9575e_ext_imeiAll> {
    return this.httpClient.get<a9575e_ext_imeiAll>(`${this.a9575e_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9575e_ext_imei_Array(id: string): Observable<a9575e_ext_imeiAll> {
    return this.httpClient.get<a9575e_ext_imeiAll>(`${this.a9575e_ext_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9575e_ext_imei(id: string): Observable<a9575e_ext_imeiBy> {
    return this.httpClient.delete<a9575e_ext_imeiBy>(`${this.a9575e_ext_imeiURL}/${id}`);
  }

  Adda9575e_ext_imei(a9575e_ext_imei_: a9575e_ext_imei): Observable<a9575e_ext_imeiBy> {
    return this.httpClient.post<a9575e_ext_imeiBy>(this.a9575e_ext_imeiURL, this.makeForma9575e_ext_imei(a9575e_ext_imei_));
  }

  Edita9575e_ext_imei(a9575e_ext_imei_: a9575e_ext_imei, id: string): Observable<a9575e_ext_imeiBy> {
    return this.httpClient.put<a9575e_ext_imeiBy>(`${this.a9575e_ext_imeiURL}/${id}`, this.makeForma9575e_ext_imei(a9575e_ext_imei_));
  }






  ////////////////////////////////////////////


  //////////////////////////////////// a9575e_imei ///////////////////////////////////////////////////////




  Geta9575e_imei_Row(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.a9575e_imeiURL}/GetRow`);
  }

  Geta9575e_imeiAll(): Observable<a9575e_imeiAll> {
    return this.httpClient.get<a9575e_imeiAll>(this.a9575e_imeiURL);
  }

  Geta9575e_imeiByID(id: string): Observable<a9575e_imeiBy> {
    return this.httpClient.get<a9575e_imeiBy>(`${this.a9575e_imeiURL}/${id}`);
  }


  GetSN_9575e_imei(id: string): Observable<a9575e_imeiAll> {
    return this.httpClient.get<a9575e_imeiAll>(`${this.a9575e_imeiURL}/GetSN/${id}`);
  }

  GetImei_9575e_imei(id: string): Observable<a9575e_imeiAll> {
    return this.httpClient.get<a9575e_imeiAll>(`${this.a9575e_imeiURL}/GetImei/${id}`);
  }

  GetImei_9575e_imei_Array(id: string): Observable<a9575e_imeiAll> {
    return this.httpClient.get<a9575e_imeiAll>(`${this.a9575e_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9575e_imei_Array(id: string): Observable<a9575e_imeiAll> {
    return this.httpClient.get<a9575e_imeiAll>(`${this.a9575e_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9575e_imei(id: string): Observable<a9575e_imeiBy> {
    return this.httpClient.delete<a9575e_imeiBy>(`${this.a9575e_imeiURL}/${id}`);
  }

  Adda9575e_imei(a9575e_imei_: a9575e_imei): Observable<a9575e_imeiBy> {
    return this.httpClient.post<a9575e_imeiBy>(this.a9575e_imeiURL, this.makeForma9575e_imei(a9575e_imei_));
  }

  Edita9575e_imei(a9575e_imei_: a9575e_imei, id: string): Observable<a9575e_imeiBy> {
    return this.httpClient.put<a9575e_imeiBy>(`${this.a9575e_imeiURL}/${id}`, this.makeForma9575e_imei(a9575e_imei_));
  }






  ////////////////////////////////////////////


  //////////////////////////////////// a9575gsa_cnt ///////////////////////////////////////////////////////


  Geta9575gsa_cntAll(): Observable<a9575gsa_cntAll> {
    return this.httpClient.get<a9575gsa_cntAll>(this.a9575gsa_cntURL);
  }

  Geta9575gsa_cntByID(id: string): Observable<a9575gsa_cntBy> {
    return this.httpClient.get<a9575gsa_cntBy>(`${this.a9575gsa_cntURL}/${id}`);
  }


  Deletea9575gsa_cnt(id: string): Observable<a9575gsa_cntBy> {
    return this.httpClient.delete<a9575gsa_cntBy>(`${this.a9575gsa_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9575gsa_imei ///////////////////////////////////////////////////////


  Geta9575gsa_imeiAll(): Observable<a9575gsa_imeiAll> {
    return this.httpClient.get<a9575gsa_imeiAll>(this.a9575gsa_imeiURL);
  }

  Geta9575gsa_imeiByID(id: string): Observable<a9575gsa_imeiBy> {
    return this.httpClient.get<a9575gsa_imeiBy>(`${this.a9575gsa_imeiURL}/${id}`);
  }


  GetSN_9575gsa_imei(id: string): Observable<a9575gsa_imeiAll> {
    return this.httpClient.get<a9575gsa_imeiAll>(`${this.a9575gsa_imeiURL}/GetSN/${id}`);
  }

  GetImei_9575gsa_imei(id: string): Observable<a9575gsa_imeiAll> {
    return this.httpClient.get<a9575gsa_imeiAll>(`${this.a9575gsa_imeiURL}/GetImei/${id}`);
  }

  GetImei_9575gsa_imei_Array(id: string): Observable<a9575gsa_imeiAll> {
    return this.httpClient.get<a9575gsa_imeiAll>(`${this.a9575gsa_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9575gsa_imei_Array(id: string): Observable<a9575gsa_imeiAll> {
    return this.httpClient.get<a9575gsa_imeiAll>(`${this.a9575gsa_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9575gsa_imei(id: string): Observable<a9575gsa_imeiBy> {
    return this.httpClient.delete<a9575gsa_imeiBy>(`${this.a9575gsa_imeiURL}/${id}`);
  }

  Adda9575gsa_imei(a9575gsa_imei_: a9575gsa_imei): Observable<a9575gsa_imeiBy> {
    return this.httpClient.post<a9575gsa_imeiBy>(this.a9575gsa_imeiURL, this.makeForma9575gsa_imei(a9575gsa_imei_));
  }

  Edita9575gsa_imei(a9575gsa_imei_: a9575gsa_imei, id: string): Observable<a9575gsa_imeiBy> {
    return this.httpClient.put<a9575gsa_imeiBy>(`${this.a9575gsa_imeiURL}/${id}`, this.makeForma9575gsa_imei(a9575gsa_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9575ptt_cnt ///////////////////////////////////////////////////////


  Geta9575ptt_cntAll(): Observable<a9575ptt_cntAll> {
    return this.httpClient.get<a9575ptt_cntAll>(this.a9575ptt_cntURL);
  }

  Geta9575ptt_cntByID(id: string): Observable<a9575ptt_cntBy> {
    return this.httpClient.get<a9575ptt_cntBy>(`${this.a9575ptt_cntURL}/${id}`);
  }


  Deletea9575ptt_cnt(id: string): Observable<a9575ptt_cntBy> {
    return this.httpClient.delete<a9575ptt_cntBy>(`${this.a9575ptt_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9575ptt_ext_cnt ///////////////////////////////////////////////////////


  Geta9575ptt_ext_cntAll(): Observable<a9575ptt_ext_cntAll> {
    return this.httpClient.get<a9575ptt_ext_cntAll>(this.a9575ptt_ext_cntURL);
  }

  Geta9575ptt_ext_cntByID(id: string): Observable<a9575ptt_ext_cntBy> {
    return this.httpClient.get<a9575ptt_ext_cntBy>(`${this.a9575ptt_ext_cntURL}/${id}`);
  }


  Deletea9575ptt_ext_cnt(id: string): Observable<a9575ptt_ext_cntBy> {
    return this.httpClient.delete<a9575ptt_ext_cntBy>(`${this.a9575ptt_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9575ptt_ext_imei ///////////////////////////////////////////////////////


  Geta9575ptt_ext_imeiAll(): Observable<a9575ptt_ext_imeiAll> {
    return this.httpClient.get<a9575ptt_ext_imeiAll>(this.a9575ptt_ext_imeiURL);
  }

  Geta9575ptt_ext_imeiByID(id: string): Observable<a9575ptt_ext_imeiBy> {
    return this.httpClient.get<a9575ptt_ext_imeiBy>(`${this.a9575ptt_ext_imeiURL}/${id}`);
  }


  GetSN_9575ptt_ext_imei(id: string): Observable<a9575ptt_ext_imeiAll> {
    return this.httpClient.get<a9575ptt_ext_imeiAll>(`${this.a9575ptt_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9575ptt_ext_imei(id: string): Observable<a9575ptt_ext_imeiAll> {
    return this.httpClient.get<a9575ptt_ext_imeiAll>(`${this.a9575ptt_ext_imeiURL}/GetImei/${id}`);
  }

  GetImei_9575ptt_ext_imei_Array(id: string): Observable<a9575ptt_ext_imeiAll> {
    return this.httpClient.get<a9575ptt_ext_imeiAll>(`${this.a9575ptt_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9575ptt_ext_imei_Array(id: string): Observable<a9575ptt_ext_imeiAll> {
    return this.httpClient.get<a9575ptt_ext_imeiAll>(`${this.a9575ptt_ext_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9575ptt_ext_imei(id: string): Observable<a9575ptt_ext_imeiBy> {
    return this.httpClient.delete<a9575ptt_ext_imeiBy>(`${this.a9575ptt_ext_imeiURL}/${id}`);
  }

  Adda9575ptt_ext_imei(a9575ptt_ext_imei_: a9575ptt_ext_imei): Observable<a9575ptt_ext_imeiBy> {
    return this.httpClient.post<a9575ptt_ext_imeiBy>(this.a9575ptt_ext_imeiURL, this.makeForma9575ptt_ext_imei(a9575ptt_ext_imei_));
  }

  Edita9575ptt_ext_imei(a9575ptt_ext_imei_: a9575ptt_ext_imei, id: string): Observable<a9575ptt_ext_imeiBy> {
    return this.httpClient.put<a9575ptt_ext_imeiBy>(`${this.a9575ptt_ext_imeiURL}/${id}`, this.makeForma9575ptt_ext_imei(a9575ptt_ext_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9575ptt_imei ///////////////////////////////////////////////////////


  Geta9575ptt_imeiAll(): Observable<a9575ptt_imeiAll> {
    return this.httpClient.get<a9575ptt_imeiAll>(this.a9575ptt_imeiURL);
  }

  Geta9575ptt_imeiByID(id: string): Observable<a9575ptt_imeiBy> {
    return this.httpClient.get<a9575ptt_imeiBy>(`${this.a9575ptt_imeiURL}/${id}`);
  }


  GetSN_9575ptt_imei(id: string): Observable<a9575ptt_imeiAll> {
    return this.httpClient.get<a9575ptt_imeiAll>(`${this.a9575ptt_imeiURL}/GetSN/${id}`);
  }

  GetImei_9575ptt_imei(id: string): Observable<a9575ptt_imeiAll> {
    return this.httpClient.get<a9575ptt_imeiAll>(`${this.a9575ptt_imeiURL}/GetImei/${id}`);
  }

  GetImei_9575ptt_imei_Array(id: string): Observable<a9575ptt_imeiAll> {
    return this.httpClient.get<a9575ptt_imeiAll>(`${this.a9575ptt_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9575ptt_imei_Array(id: string): Observable<a9575ptt_imeiAll> {
    return this.httpClient.get<a9575ptt_imeiAll>(`${this.a9575ptt_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9575ptt_imei(id: string): Observable<a9575ptt_imeiBy> {
    return this.httpClient.delete<a9575ptt_imeiBy>(`${this.a9575ptt_imeiURL}/${id}`);
  }

  Adda9575ptt_imei(a9575ptt_imei_: a9575ptt_imei): Observable<a9575ptt_imeiBy> {
    return this.httpClient.post<a9575ptt_imeiBy>(this.a9575ptt_imeiURL, this.makeForma9575ptt_imei(a9575ptt_imei_));
  }

  Edita9575ptt_imei(a9575ptt_imei_: a9575ptt_imei, id: string): Observable<a9575ptt_imeiBy> {
    return this.httpClient.put<a9575ptt_imeiBy>(`${this.a9575ptt_imeiURL}/${id}`, this.makeForma9575ptt_imei(a9575ptt_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9602_cnt ///////////////////////////////////////////////////////


  Geta9602_cntAll(): Observable<a9602_cntAll> {
    return this.httpClient.get<a9602_cntAll>(this.a9602_cntURL);
  }

  Geta9602_cntByID(id: string): Observable<a9602_cntBy> {
    return this.httpClient.get<a9602_cntBy>(`${this.a9602_cntURL}/${id}`);
  }


  Deletea9602_cnt(id: string): Observable<a9602_cntBy> {
    return this.httpClient.delete<a9602_cntBy>(`${this.a9602_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9602_imei ///////////////////////////////////////////////////////


  Geta9602_imeiAll(): Observable<a9602_imeiAll> {
    return this.httpClient.get<a9602_imeiAll>(this.a9602_imeiURL);
  }

  Geta9602_imeiByID(id: string): Observable<a9602_imeiBy> {
    return this.httpClient.get<a9602_imeiBy>(`${this.a9602_imeiURL}/${id}`);
  }


  GetSN_9602_imei(id: string): Observable<a9602_imeiAll> {
    return this.httpClient.get<a9602_imeiAll>(`${this.a9602_imeiURL}/GetSN/${id}`);
  }

  GetImei_9602_imei(id: string): Observable<a9602_imeiAll> {
    return this.httpClient.get<a9602_imeiAll>(`${this.a9602_imeiURL}/GetImei/${id}`);
  }

  GetImei_9602_imei_Array(id: string): Observable<a9602_imeiAll> {
    return this.httpClient.get<a9602_imeiAll>(`${this.a9602_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9602_imei_Array(id: string): Observable<a9602_imeiAll> {
    return this.httpClient.get<a9602_imeiAll>(`${this.a9602_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9602_imei(id: string): Observable<a9602_imeiBy> {
    return this.httpClient.delete<a9602_imeiBy>(`${this.a9602_imeiURL}/${id}`);
  }

  Adda9602_imei(a9602_imei_: a9602_imei): Observable<a9602_imeiBy> {
    return this.httpClient.post<a9602_imeiBy>(this.a9602_imeiURL, this.makeForma9602_imei(a9602_imei_));
  }

  Edita9602_imei(a9602_imei_: a9602_imei, id: string): Observable<a9602_imeiBy> {
    return this.httpClient.put<a9602_imeiBy>(`${this.a9602_imeiURL}/${id}`, this.makeForma9602_imei(a9602_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9602n_ext_cnt ///////////////////////////////////////////////////////


  Geta9602n_ext_cntAll(): Observable<a9602n_ext_cntAll> {
    return this.httpClient.get<a9602n_ext_cntAll>(this.a9602n_ext_cntURL);
  }

  Geta9602n_ext_cntByID(id: string): Observable<a9602n_ext_cntBy> {
    return this.httpClient.get<a9602n_ext_cntBy>(`${this.a9602n_ext_cntURL}/${id}`);
  }


  Deletea9602n_ext_cnt(id: string): Observable<a9602n_ext_cntBy> {
    return this.httpClient.delete<a9602n_ext_cntBy>(`${this.a9602n_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9602n_ext_imei ///////////////////////////////////////////////////////


  Geta9602n_ext_imeiAll(): Observable<a9602n_ext_imeiAll> {
    return this.httpClient.get<a9602n_ext_imeiAll>(this.a9602n_ext_imeiURL);
  }

  Geta9602n_ext_imeiByID(id: string): Observable<a9602n_ext_imeiBy> {
    return this.httpClient.get<a9602n_ext_imeiBy>(`${this.a9602n_ext_imeiURL}/${id}`);
  }


  GetSN_9602n_ext_imei(id: string): Observable<a9602n_ext_imeiAll> {
    return this.httpClient.get<a9602n_ext_imeiAll>(`${this.a9602n_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9602n_ext_imei(id: string): Observable<a9602n_ext_imeiAll> {
    return this.httpClient.get<a9602n_ext_imeiAll>(`${this.a9602n_ext_imeiURL}/GetImei/${id}`);
  }

  GetImei_9602n_ext_imei_Array(id: string): Observable<a9602n_ext_imeiAll> {
    return this.httpClient.get<a9602n_ext_imeiAll>(`${this.a9602n_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9602n_ext_imei_Array(id: string): Observable<a9602n_ext_imeiAll> {
    return this.httpClient.get<a9602n_ext_imeiAll>(`${this.a9602n_ext_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9602n_ext_imei(id: string): Observable<a9602n_ext_imeiBy> {
    return this.httpClient.delete<a9602n_ext_imeiBy>(`${this.a9602n_ext_imeiURL}/${id}`);
  }

  Adda9602n_ext_imei(a9602n_ext_imei_: a9602n_ext_imei): Observable<a9602n_ext_imeiBy> {
    return this.httpClient.post<a9602n_ext_imeiBy>(this.a9602n_ext_imeiURL, this.makeForma9602n_ext_imei(a9602n_ext_imei_));
  }

  Edita9602n_ext_imei(a9602n_ext_imei_: a9602n_ext_imei, id: string): Observable<a9602n_ext_imeiBy> {
    return this.httpClient.put<a9602n_ext_imeiBy>(`${this.a9602n_ext_imeiURL}/${id}`, this.makeForma9602n_ext_imei(a9602n_ext_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9602r_cnt ///////////////////////////////////////////////////////


  Geta9602r_cntAll(): Observable<a9602r_cntAll> {
    return this.httpClient.get<a9602r_cntAll>(this.a9602r_cntURL);
  }

  Geta9602r_cntByID(id: string): Observable<a9602r_cntBy> {
    return this.httpClient.get<a9602r_cntBy>(`${this.a9602r_cntURL}/${id}`);
  }


  Deletea9602r_cnt(id: string): Observable<a9602r_cntBy> {
    return this.httpClient.delete<a9602r_cntBy>(`${this.a9602r_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9602r_imei ///////////////////////////////////////////////////////


  Geta9602r_imeiAll(): Observable<a9602r_imeiAll> {
    return this.httpClient.get<a9602r_imeiAll>(this.a9602r_imeiURL);
  }

  Geta9602r_imeiByID(id: string): Observable<a9602r_imeiBy> {
    return this.httpClient.get<a9602r_imeiBy>(`${this.a9602r_imeiURL}/${id}`);
  }


  GetSN_9602r_imei(id: string): Observable<a9602r_imeiAll> {
    return this.httpClient.get<a9602r_imeiAll>(`${this.a9602r_imeiURL}/GetSN/${id}`);
  }

  GetImei_9602r_imei(id: string): Observable<a9602r_imeiAll> {
    return this.httpClient.get<a9602r_imeiAll>(`${this.a9602r_imeiURL}/GetImei/${id}`);
  }

  GetImei_9602r_imei_Array(id: string): Observable<a9602r_imeiAll> {
    return this.httpClient.get<a9602r_imeiAll>(`${this.a9602r_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9602r_imei_Array(id: string): Observable<a9602r_imeiAll> {
    return this.httpClient.get<a9602r_imeiAll>(`${this.a9602r_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9602r_imei(id: string): Observable<a9602r_imeiBy> {
    return this.httpClient.delete<a9602r_imeiBy>(`${this.a9602r_imeiURL}/${id}`);
  }

  Adda9602r_imei(a9602r_imei_: a9602r_imei): Observable<a9602r_imeiBy> {
    return this.httpClient.post<a9602r_imeiBy>(this.a9602r_imeiURL, this.makeForma9602r_imei(a9602r_imei_));
  }

  Edita9602r_imei(a9602r_imei_: a9602r_imei, id: string): Observable<a9602r_imeiBy> {
    return this.httpClient.put<a9602r_imeiBy>(`${this.a9602r_imeiURL}/${id}`, this.makeForma9602r_imei(a9602r_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9602sb_cnt ///////////////////////////////////////////////////////


  Geta9602sb_cntAll(): Observable<a9602sb_cntAll> {
    return this.httpClient.get<a9602sb_cntAll>(this.a9602sb_cntURL);
  }

  Geta9602sb_cntByID(id: string): Observable<a9602sb_cntBy> {
    return this.httpClient.get<a9602sb_cntBy>(`${this.a9602sb_cntURL}/${id}`);
  }


  Deletea9602sb_cnt(id: string): Observable<a9602sb_cntBy> {
    return this.httpClient.delete<a9602sb_cntBy>(`${this.a9602sb_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9602sb_ext_cnt ///////////////////////////////////////////////////////


  Geta9602sb_ext_cntAll(): Observable<a9602sb_ext_cntAll> {
    return this.httpClient.get<a9602sb_ext_cntAll>(this.a9602sb_ext_cntURL);
  }

  Geta9602sb_ext_cntByID(id: string): Observable<a9602sb_ext_cntBy> {
    return this.httpClient.get<a9602sb_ext_cntBy>(`${this.a9602sb_ext_cntURL}/${id}`);
  }


  Deletea9602sb_ext_cnt(id: string): Observable<a9602sb_ext_cntBy> {
    return this.httpClient.delete<a9602sb_ext_cntBy>(`${this.a9602sb_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9602sb_ext_imei ///////////////////////////////////////////////////////


  Geta9602sb_ext_imeiAll(): Observable<a9602sb_ext_imeiAll> {
    return this.httpClient.get<a9602sb_ext_imeiAll>(this.a9602sb_ext_imeiURL);
  }

  Geta9602sb_ext_imeiByID(id: string): Observable<a9602sb_ext_imeiBy> {
    return this.httpClient.get<a9602sb_ext_imeiBy>(`${this.a9602sb_ext_imeiURL}/${id}`);
  }


  GetSN_9602sb_ext_imei(id: string): Observable<a9602sb_ext_imeiAll> {
    return this.httpClient.get<a9602sb_ext_imeiAll>(`${this.a9602sb_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9602sb_ext_imei(id: string): Observable<a9602sb_ext_imeiAll> {
    return this.httpClient.get<a9602sb_ext_imeiAll>(`${this.a9602sb_ext_imeiURL}/GetImei/${id}`);
  }

  GetImei_9602sb_ext_imei_Array(id: string): Observable<a9602sb_ext_imeiAll> {
    return this.httpClient.get<a9602sb_ext_imeiAll>(`${this.a9602sb_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9602sb_ext_imei_Array(id: string): Observable<a9602sb_ext_imeiAll> {
    return this.httpClient.get<a9602sb_ext_imeiAll>(`${this.a9602sb_ext_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9602sb_ext_imei(id: string): Observable<a9602sb_ext_imeiBy> {
    return this.httpClient.delete<a9602sb_ext_imeiBy>(`${this.a9602sb_ext_imeiURL}/${id}`);
  }

  Adda9602sb_ext_imei(a9602sb_ext_imei_: a9602sb_ext_imei): Observable<a9602sb_ext_imeiBy> {
    return this.httpClient.post<a9602sb_ext_imeiBy>(this.a9602sb_ext_imeiURL, this.makeForma9602sb_ext_imei(a9602sb_ext_imei_));
  }

  Edita9602sb_ext_imei(a9602sb_ext_imei_: a9602sb_ext_imei, id: string): Observable<a9602sb_ext_imeiBy> {
    return this.httpClient.put<a9602sb_ext_imeiBy>(`${this.a9602sb_ext_imeiURL}/${id}`, this.makeForma9602sb_ext_imei(a9602sb_ext_imei_));
  }






  ////////////////////////////////////////////



  //////////////////////////////////// a9602sb_imei ///////////////////////////////////////////////////////


  Geta9602sb_imeiAll(): Observable<a9602sb_imeiAll> {
    return this.httpClient.get<a9602sb_imeiAll>(this.a9602sb_imeiURL);
  }

  Geta9602sb_imeiByID(id: string): Observable<a9602sb_imeiBy> {
    return this.httpClient.get<a9602sb_imeiBy>(`${this.a9602sb_imeiURL}/${id}`);
  }


  GetSN_9602sb_imei(id: string): Observable<a9602sb_imeiAll> {
    return this.httpClient.get<a9602sb_imeiAll>(`${this.a9602sb_imeiURL}/GetSN/${id}`);
  }

  GetImei_9602sb_imei(id: string): Observable<a9602sb_imeiAll> {
    return this.httpClient.get<a9602sb_imeiAll>(`${this.a9602sb_imeiURL}/GetImei/${id}`);
  }

  GetImei_9602sb_imei_Array(id: string): Observable<a9602sb_imeiAll> {
    return this.httpClient.get<a9602sb_imeiAll>(`${this.a9602sb_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9602sb_imei_Array(id: string): Observable<a9602sb_imeiAll> {
    return this.httpClient.get<a9602sb_imeiAll>(`${this.a9602sb_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9602sb_imei(id: string): Observable<a9602sb_imeiBy> {
    return this.httpClient.delete<a9602sb_imeiBy>(`${this.a9602sb_imeiURL}/${id}`);
  }

  Adda9602sb_imei(a9602sb_imei_: a9602sb_imei): Observable<a9602sb_imeiBy> {
    return this.httpClient.post<a9602sb_imeiBy>(this.a9602sb_imeiURL, this.makeForma9602sb_imei(a9602sb_imei_));
  }

  Edita9602sb_imei(a9602sb_imei_: a9602sb_imei, id: string): Observable<a9602sb_imeiBy> {
    return this.httpClient.put<a9602sb_imeiBy>(`${this.a9602sb_imeiURL}/${id}`, this.makeForma9602sb_imei(a9602sb_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9603_cnt ///////////////////////////////////////////////////////


  Geta9603_cntAll(): Observable<a9603_cntAll> {
    return this.httpClient.get<a9603_cntAll>(this.a9603_cntURL);
  }

  Geta9603_cntByID(id: string): Observable<a9603_cntBy> {
    return this.httpClient.get<a9603_cntBy>(`${this.a9603_cntURL}/${id}`);
  }


  Deletea9603_cnt(id: string): Observable<a9603_cntBy> {
    return this.httpClient.delete<a9603_cntBy>(`${this.a9603_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// a9603_imei ///////////////////////////////////////////////////////


  Geta9603_imeiAll(): Observable<a9603_imeiAll> {
    return this.httpClient.get<a9603_imeiAll>(this.a9603_imeiURL);
  }

  Geta9603_imeiByID(id: string): Observable<a9603_imeiBy> {
    return this.httpClient.get<a9603_imeiBy>(`${this.a9603_imeiURL}/${id}`);
  }


  GetSN_9603_imei(id: string): Observable<a9603_imeiAll> {
    return this.httpClient.get<a9603_imeiAll>(`${this.a9603_imeiURL}/GetSN/${id}`);
  }

  GetImei_9603_imei(id: string): Observable<a9603_imeiAll> {
    return this.httpClient.get<a9603_imeiAll>(`${this.a9603_imeiURL}/GetImei/${id}`);
  }

  GetImei_9603_imei_Array(id: string): Observable<a9603_imeiAll> {
    return this.httpClient.get<a9603_imeiAll>(`${this.a9603_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9603_imei_Array(id: string): Observable<a9603_imeiAll> {
    return this.httpClient.get<a9603_imeiAll>(`${this.a9603_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9603_imei(id: string): Observable<a9603_imeiBy> {
    return this.httpClient.delete<a9603_imeiBy>(`${this.a9603_imeiURL}/${id}`);
  }

  Adda9603_imei(a9603_imei_: a9603_imei): Observable<a9603_imeiBy> {
    return this.httpClient.post<a9603_imeiBy>(this.a9603_imeiURL, this.makeForma9603_imei(a9603_imei_));
  }

  Edita9603_imei(a9603_imei_: a9603_imei, id: string): Observable<a9603_imeiBy> {
    return this.httpClient.put<a9603_imeiBy>(`${this.a9603_imeiURL}/${id}`, this.makeForma9603_imei(a9603_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9603r_cnt ///////////////////////////////////////////////////////


  Geta9603r_cntAll(): Observable<a9603r_cntAll> {
    return this.httpClient.get<a9603r_cntAll>(this.a9603r_cntURL);
  }

  Geta9603r_cntByID(id: string): Observable<a9603r_cntBy> {
    return this.httpClient.get<a9603r_cntBy>(`${this.a9603r_cntURL}/${id}`);
  }


  Deletea9603r_cnt(id: string): Observable<a9603r_cntBy> {
    return this.httpClient.delete<a9603r_cntBy>(`${this.a9603r_cntURL}/${id}`);
  }




  ////////////////////////////////////////////


  //////////////////////////////////// a9603r_imei ///////////////////////////////////////////////////////


  Geta9603r_imeiAll(): Observable<a9603r_imeiAll> {
    return this.httpClient.get<a9603r_imeiAll>(this.a9603r_imeiURL);
  }

  Geta9603r_imeiByID(id: string): Observable<a9603r_imeiBy> {
    return this.httpClient.get<a9603r_imeiBy>(`${this.a9603r_imeiURL}/${id}`);
  }


  GetSN_9603r_imei(id: string): Observable<a9603r_imeiAll> {
    return this.httpClient.get<a9603r_imeiAll>(`${this.a9603r_imeiURL}/GetSN/${id}`);
  }

  GetImei_9603r_imei(id: string): Observable<a9603r_imeiAll> {
    return this.httpClient.get<a9603r_imeiAll>(`${this.a9603r_imeiURL}/GetImei/${id}`);
  }

  GetImei_9603r_imei_Array(id: string): Observable<a9603r_imeiAll> {
    return this.httpClient.get<a9603r_imeiAll>(`${this.a9603r_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9603r_imei_Array(id: string): Observable<a9603r_imeiAll> {
    return this.httpClient.get<a9603r_imeiAll>(`${this.a9603r_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9603r_imei(id: string): Observable<a9603r_imeiBy> {
    return this.httpClient.delete<a9603r_imeiBy>(`${this.a9603r_imeiURL}/${id}`);
  }

  Adda9603r_imei(a9603r_imei_: a9603r_imei): Observable<a9603r_imeiBy> {
    return this.httpClient.post<a9603r_imeiBy>(this.a9603r_imeiURL, this.makeForma9603r_imei(a9603r_imei_));
  }

  Edita9603r_imei(a9603r_imei_: a9603r_imei, id: string): Observable<a9603r_imeiBy> {
    return this.httpClient.put<a9603r_imeiBy>(`${this.a9603r_imeiURL}/${id}`, this.makeForma9603r_imei(a9603r_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// bcx_cnt ///////////////////////////////////////////////////////


  Getbcx_cntAll(): Observable<bcx_cntAll> {
    return this.httpClient.get<bcx_cntAll>(this.bcx_cntURL);
  }

  Getbcx_cntByID(id: string): Observable<bcx_cntBy> {
    return this.httpClient.get<bcx_cntBy>(`${this.bcx_cntURL}/${id}`);
  }


  Deletebcx_cnt(id: string): Observable<bcx_cntBy> {
    return this.httpClient.delete<bcx_cntBy>(`${this.bcx_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// bcx_imei ///////////////////////////////////////////////////////


  Getbcx_imeiAll(): Observable<bcx_imeiAll> {
    return this.httpClient.get<bcx_imeiAll>(this.bcx_imeiURL);
  }

  Getbcx_imeiByID(id: string): Observable<bcx_imeiBy> {
    return this.httpClient.get<bcx_imeiBy>(`${this.bcx_imeiURL}/${id}`);
  }


  GetSN_bcx_imei(id: string): Observable<bcx_imeiAll> {
    return this.httpClient.get<bcx_imeiAll>(`${this.bcx_imeiURL}/GetSN/${id}`);
  }

  GetImei_bcx_imei(id: string): Observable<bcx_imeiAll> {
    return this.httpClient.get<bcx_imeiAll>(`${this.bcx_imeiURL}/GetImei/${id}`);
  }

  GetImei_bcx_imei_Array(id: string): Observable<bcx_imeiAll> {
    return this.httpClient.get<bcx_imeiAll>(`${this.bcx_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_bcx_imei_Array(id: string): Observable<bcx_imeiAll> {
    return this.httpClient.get<bcx_imeiAll>(`${this.bcx_imeiURL}/GetSNArray/${id}`);
  }


  Deletebcx_imei(id: string): Observable<bcx_imeiBy> {
    return this.httpClient.delete<bcx_imeiBy>(`${this.bcx_imeiURL}/${id}`);
  }

  Addbcx_imei(bcx_imei_: bcx_imei): Observable<bcx_imeiBy> {
    return this.httpClient.post<bcx_imeiBy>(this.bcx_imeiURL, this.makeFormbcx_imei(bcx_imei_));
  }

  Editbcx_imei(bcx_imei_: bcx_imei, id: string): Observable<bcx_imeiBy> {
    return this.httpClient.put<bcx_imeiBy>(`${this.bcx_imeiURL}/${id}`, this.makeFormbcx_imei(bcx_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// gdb_cnt ///////////////////////////////////////////////////////


  Getgdb_cntAll(): Observable<gdb_cntAll> {
    return this.httpClient.get<gdb_cntAll>(this.gdb_cntURL);
  }

  Getgdb_cntByID(id: string): Observable<gdb_cntBy> {
    return this.httpClient.get<gdb_cntBy>(`${this.gdb_cntURL}/${id}`);
  }


  Deletegdb_cnt(id: string): Observable<gdb_cntBy> {
    return this.httpClient.delete<gdb_cntBy>(`${this.gdb_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// gdb_imei ///////////////////////////////////////////////////////


  Getgdb_imeiAll(): Observable<gdb_imeiAll> {
    return this.httpClient.get<gdb_imeiAll>(this.gdb_imeiURL);
  }

  Getgdb_imeiByID(id: string): Observable<gdb_imeiBy> {
    return this.httpClient.get<gdb_imeiBy>(`${this.gdb_imeiURL}/${id}`);
  }


  GetSN_gdb_imei(id: string): Observable<gdb_imeiAll> {
    return this.httpClient.get<gdb_imeiAll>(`${this.gdb_imeiURL}/GetSN/${id}`);
  }

  GetImei_gdb_imei(id: string): Observable<gdb_imeiAll> {
    return this.httpClient.get<gdb_imeiAll>(`${this.gdb_imeiURL}/GetImei/${id}`);
  }

  GetImei_gdb_imei_Array(id: string): Observable<gdb_imeiAll> {
    return this.httpClient.get<gdb_imeiAll>(`${this.gdb_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_gdb_imei_Array(id: string): Observable<gdb_imeiAll> {
    return this.httpClient.get<gdb_imeiAll>(`${this.gdb_imeiURL}/GetSNArray/${id}`);
  }


  Deletegdb_imei(id: string): Observable<gdb_imeiBy> {
    return this.httpClient.delete<gdb_imeiBy>(`${this.gdb_imeiURL}/${id}`);
  }

  Addgdb_imei(gdb_imei_: gdb_imei): Observable<gdb_imeiBy> {
    return this.httpClient.post<gdb_imeiBy>(this.gdb_imeiURL, this.makeFormgdb_imei(gdb_imei_));
  }

  Editgdb_imei(gdb_imei_: gdb_imei, id: string): Observable<gdb_imeiBy> {
    return this.httpClient.put<gdb_imeiBy>(`${this.gdb_imeiURL}/${id}`, this.makeFormgdb_imei(gdb_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// sfx_cnt ///////////////////////////////////////////////////////


  Getsfx_cntAll(): Observable<sfx_cntAll> {
    return this.httpClient.get<sfx_cntAll>(this.sfx_cntURL);
  }

  Getsfx_cntByID(id: string): Observable<sfx_cntBy> {
    return this.httpClient.get<sfx_cntBy>(`${this.sfx_cntURL}/${id}`);
  }


  Deletesfx_cnt(id: string): Observable<sfx_cntBy> {
    return this.httpClient.delete<sfx_cntBy>(`${this.sfx_cntURL}/${id}`);
  }




  ////////////////////////////////////////////

  //////////////////////////////////// sfx_imei ///////////////////////////////////////////////////////


  Getsfx_imeiAll(): Observable<sfx_imeiAll> {
    return this.httpClient.get<sfx_imeiAll>(this.sfx_imeiURL);
  }

  Getsfx_imeiByID(id: string): Observable<sfx_imeiBy> {
    return this.httpClient.get<sfx_imeiBy>(`${this.sfx_imeiURL}/${id}`);
  }


  GetSN_sfx_imei(id: string): Observable<sfx_imeiAll> {
    return this.httpClient.get<sfx_imeiAll>(`${this.sfx_imeiURL}/GetSN/${id}`);
  }

  GetImei_sfx_imei(id: string): Observable<sfx_imeiAll> {
    return this.httpClient.get<sfx_imeiAll>(`${this.sfx_imeiURL}/GetImei/${id}`);
  }

  GetImei_sfx_imei_Array(id: string): Observable<sfx_imeiAll> {
    return this.httpClient.get<sfx_imeiAll>(`${this.sfx_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_sfx_imei_Array(id: string): Observable<sfx_imeiAll> {
    return this.httpClient.get<sfx_imeiAll>(`${this.sfx_imeiURL}/GetSNArray/${id}`);
  }


  Deletesfx_imei(id: string): Observable<sfx_imeiBy> {
    return this.httpClient.delete<sfx_imeiBy>(`${this.sfx_imeiURL}/${id}`);
  }

  Addsfx_imei(sfx_imei_: sfx_imei): Observable<sfx_imeiBy> {
    return this.httpClient.post<sfx_imeiBy>(this.sfx_imeiURL, this.makeFormsfx_imei(sfx_imei_));
  }

  Editsfx_imei(sfx_imei_: sfx_imei, id: string): Observable<sfx_imeiBy> {
    return this.httpClient.put<sfx_imeiBy>(`${this.sfx_imeiURL}/${id}`, this.makeFormsfx_imei(sfx_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9523_ext_cnt ///////////////////////////////////////////////////////


  Geta9523_ext_cntAll(): Observable<a9523_ext_cntAll> {
    return this.httpClient.get<a9523_ext_cntAll>(this.a9523_ext_cntURL);
  }

  Geta9523_ext_cntByID(id: string): Observable<a9523_ext_cntBy> {
    return this.httpClient.get<a9523_ext_cntBy>(`${this.a9523_ext_cntURL}/${id}`);
  }


  Deletea9523_ext_cnt(id: string): Observable<a9523_ext_cntBy> {
    return this.httpClient.delete<a9523_ext_cntBy>(`${this.a9523_ext_cntURL}/${id}`);
  }




  ////////////////////////////////////////////


  //////////////////////////////////// a9522b_imei ///////////////////////////////////////////////////////


  Geta9522b_imeiAll(): Observable<a9522b_imeiAll> {
    return this.httpClient.get<a9522b_imeiAll>(this.a9522b_imeiURL);
  }

  Geta9522b_imeiByID(id: string): Observable<a9522b_imeiBy> {
    return this.httpClient.get<a9522b_imeiBy>(`${this.a9522b_imeiURL}/${id}`);
  }


  GetSN_9522b_imei(id: string): Observable<a9522b_imeiAll> {
    return this.httpClient.get<a9522b_imeiAll>(`${this.a9522b_imeiURL}/GetSN/${id}`);
  }

  GetImei_9522b_imei(id: string): Observable<a9522b_imeiAll> {
    return this.httpClient.get<a9522b_imeiAll>(`${this.a9522b_imeiURL}/GetImei/${id}`);
  }

  GetImei_9522b_imei_Array(id: string): Observable<a9522b_imeiAll> {
    return this.httpClient.get<a9522b_imeiAll>(`${this.a9522b_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9522b_imei_Array(id: string): Observable<a9522b_imeiAll> {
    return this.httpClient.get<a9522b_imeiAll>(`${this.a9522b_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9522b_imei(id: string): Observable<a9522b_imeiBy> {
    return this.httpClient.delete<a9522b_imeiBy>(`${this.a9522b_imeiURL}/${id}`);
  }

  Adda9522b_imei(a9522b_imei_: a9522b_imei): Observable<a9522b_imeiBy> {
    return this.httpClient.post<a9522b_imeiBy>(this.a9522b_imeiURL, this.makeForma9522b_imei(a9522b_imei_));
  }

  Edita9522b_imei(a9522b_imei_: a9522b_imei, id: string): Observable<a9522b_imeiBy> {
    return this.httpClient.put<a9522b_imeiBy>(`${this.a9522b_imeiURL}/${id}`, this.makeForma9522b_imei(a9522b_imei_));
  }






  ////////////////////////////////////////////

  //////////////////////////////////// a9523_imei ///////////////////////////////////////////////////////


  Geta9523_imeiAll(): Observable<a9523_imeiAll> {
    return this.httpClient.get<a9523_imeiAll>(this.a9523_imeiURL);
  }

  Geta9523_imeiByID(id: string): Observable<a9523_imeiBy> {
    return this.httpClient.get<a9523_imeiBy>(`${this.a9523_imeiURL}/${id}`);
  }


  GetSN_9523_imei(id: string): Observable<a9523_imeiAll> {
    return this.httpClient.get<a9523_imeiAll>(`${this.a9523_imeiURL}/GetSN/${id}`);
  }

  GetImei_9523_imei(id: string): Observable<a9523_imeiAll> {
    return this.httpClient.get<a9523_imeiAll>(`${this.a9523_imeiURL}/GetImei/${id}`);
  }

  GetImei_9523_imei_Array(id: string): Observable<a9523_imeiAll> {
    return this.httpClient.get<a9523_imeiAll>(`${this.a9523_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9523_imei_Array(id: string): Observable<a9523_imeiAll> {
    return this.httpClient.get<a9523_imeiAll>(`${this.a9523_imeiURL}/GetSNArray/${id}`);
  }


  Deletea9523_imei(id: string): Observable<a9523_imeiBy> {
    return this.httpClient.delete<a9523_imeiBy>(`${this.a9523_imeiURL}/${id}`);
  }

  Adda9523_imei(a9523_imei_: a9523_imei): Observable<a9523_imeiBy> {
    return this.httpClient.post<a9523_imeiBy>(this.a9523_imeiURL, this.makeForma9523_imei(a9523_imei_));
  }

  Edita9523_imei(a9523_imei_: a9523_imei, id: string): Observable<a9523_imeiBy> {
    return this.httpClient.put<a9523_imeiBy>(`${this.a9523_imeiURL}/${id}`, this.makeForma9523_imei(a9523_imei_));
  }






  ////////////////////////////////////////////


  //////////////////////////////////// a9522b_ext_imei ///////////////////////////////////////////////////////

  GetImei_9522b_ext_imei_Array(id: string): Observable<a9522b_ext_imeiAll> {
    return this.httpClient.get<a9522b_ext_imeiAll>(`${this.a9522b_ext_imeiURL}/GetImeiArray/${id}`);
  }

  GetSN_9522b_ext_imei_Array(id: string): Observable<a9522b_ext_imeiAll> {
    return this.httpClient.get<a9522b_ext_imeiAll>(`${this.a9522b_ext_imeiURL}/GetSNArray/${id}`);
  }

  Geta9522b_ext_imeiAll(): Observable<a9522b_ext_imeiAll> {
    return this.httpClient.get<a9522b_ext_imeiAll>(this.a9522b_ext_imeiURL);
  }

  Geta9522b_ext_imeiByID(id: string): Observable<a9522b_ext_imeiBy> {
    return this.httpClient.get<a9522b_ext_imeiBy>(`${this.a9522b_ext_imeiURL}/${id}`);
  }


  GetSN_9522b_ext_imei(id: string): Observable<a9522b_ext_imeiAll> {
    return this.httpClient.get<a9522b_ext_imeiAll>(`${this.a9522b_ext_imeiURL}/GetSN/${id}`);
  }

  GetImei_9522b_ext_imei(id: string): Observable<a9522b_ext_imeiAll> {
    return this.httpClient.get<a9522b_ext_imeiAll>(`${this.a9522b_ext_imeiURL}/GetImei/${id}`);
  }


  Deletea9522b_ext_imei(id: string): Observable<a9522b_ext_imeiBy> {
    return this.httpClient.delete<a9522b_ext_imeiBy>(`${this.a9522b_ext_imeiURL}/${id}`);
  }

  Adda9522b_ext_imei(a9522b_ext_imei_: a9522b_ext_imei): Observable<a9522b_ext_imeiBy> {
    return this.httpClient.post<a9522b_ext_imeiBy>(this.a9522b_ext_imeiURL, this.makeForma9522b_ext_imei(a9522b_ext_imei_));
  }

  Edita9522b_ext_imei(a9522b_ext_imei_: a9522b_ext_imei, id: string): Observable<a9522b_ext_imeiBy> {
    return this.httpClient.put<a9522b_ext_imeiBy>(`${this.a9522b_ext_imeiURL}/${id}`, this.makeForma9522b_ext_imei(a9522b_ext_imei_));
  }






  ////////////////////////////////////////////


  makeForm(product: Product): any {
    var formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price.toString());
    formData.append("stock", product.stock.toString());
    formData.append("image", product.image);
    return formData;
  }

  makeFormIrd(ird: Ird): any {
    var formData = new FormData();
    formData.append("uutstatusTypeName", ird.uutstatusTypeName);
    formData.append("uutstatusTypeDesc", ird.uutstatusTypeDesc);
    return formData;
  }


  makeFormModel(model_: model2): any {
    var formData = new FormData();

    if (model_.model_No == null) {
      formData.append("Model_No", "");
    } else {
      formData.append("Model_No", model_.model_No);

    }

    if (model_.model_Name == null) {
      formData.append("Model_Name", "");
    } else {
      formData.append("Model_Name", model_.model_Name);

    }


    if (model_.hardware_Type == null) {
      formData.append("Hardware_Type", "");
    } else {
      formData.append("Hardware_Type", model_.hardware_Type);

    }

    if (model_.kB_Kit == null) {
      formData.append("KB_Kit", "");
    } else {
      formData.append("KB_Kit", model_.kB_Kit);

    }

    if (model_.cal_Type == null) {
      formData.append("Cal_Type", "");
    } else {
      formData.append("Cal_Type", model_.cal_Type);

    }

    if (model_.sn_Type == null) {
      formData.append("Sn_Type", "");
    } else {
      formData.append("Sn_Type", model_.sn_Type);

    }

    if (model_.eerroM_Size == null) {
      formData.append("EERROM_Size", "");
    } else {
      formData.append("EERROM_Size", model_.eerroM_Size);

    }

    if (model_.flash_Size == null) {
      formData.append("Flash_Size", "");
    } else {
      formData.append("Flash_Size", model_.flash_Size);

    }

    if (model_.boot_Code_Ver == null) {
      formData.append("Boot_Code_Ver", "");
    } else {
      formData.append("Boot_Code_Ver", model_.boot_Code_Ver);

    }

    if (model_.cP_Ver == null) {
      formData.append("CP_Ver", "");
    } else {
      formData.append("CP_Ver", model_.cP_Ver);

    }


    if (model_.modem_Ver == null) {
      formData.append("Modem_Ver", "");
    } else {
      formData.append("Modem_Ver", model_.modem_Ver);

    }


    if (model_.vocoder == null) {
      formData.append("Vocoder", "");
    } else {
      formData.append("Vocoder", model_.vocoder);

    }

    if (model_.eeproM_Ver == null) {
      formData.append("EEPROM_Ver", "");
    } else {
      formData.append("EEPROM_Ver", model_.eeproM_Ver);

    }

    if (model_.model_Type == null) {
      formData.append("Model_Type", "");
    } else {
      formData.append("Model_Type", model_.model_Type);

    }

    if (model_.model_Select == null) {
      formData.append("Model_Select", "");
    } else {
      formData.append("Model_Select", model_.model_Select);

    }

    if (model_.gateway == null) {
      formData.append("Gateway", "");
    } else {
      formData.append("Gateway", model_.gateway);

    }

    if (model_.sequence_File == null) {
      formData.append("Sequence_File", "");
    } else {
      formData.append("Sequence_File", model_.sequence_File);

    }



    if (model_.configuration_Revision == null) {
      formData.append("Configuration_Revision", "");
    } else {
      formData.append("Configuration_Revision", model_.configuration_Revision);

    }

    if (model_.isGold == null) {
      formData.append("isGold", "");
    } else {
      formData.append("isGold", model_.isGold.toString());

    }

    if (model_.test_Spec_Fix_Version == null) {
      formData.append("Test_Spec_Fix_Version", "");
    } else {
      formData.append("Test_Spec_Fix_Version", model_.test_Spec_Fix_Version);

    }

    if (model_.main_board_kit == null) {
      formData.append("main_board_kit", "");
    } else {
      formData.append("main_board_kit", model_.main_board_kit);

    }

    if (model_.hardwarE_VERSION == null) {
      formData.append("HARDWARE_VERSION", "");
    } else {
      formData.append("HARDWARE_VERSION", model_.hardwarE_VERSION);

    }

    if (model_.modeL_INDENTIFICATION == null) {
      formData.append("MODEL_INDENTIFICATION", "");
    } else {
      formData.append("MODEL_INDENTIFICATION", model_.modeL_INDENTIFICATION);

    }

    console.log("formData Out")
    console.log(formData)


    return formData;
  }

  makeFormTbProfile(tbprofile: TbProfile): any {
    var formData = new FormData();

    if (tbprofile.profileName == null) {
      formData.append("profileName", "");
    } else {
      formData.append("profileName", tbprofile.profileName);

    }

    if (tbprofile.profileDesc == null) {
      formData.append("profileDesc", "");
    } else {
      formData.append("profileDesc", tbprofile.profileDesc);

    }


    if (tbprofile.profileReqDocNo == null) {
      formData.append("profileReqDocNo", "");
    } else {
      formData.append("profileReqDocNo", tbprofile.profileReqDocNo);

    }

    if (tbprofile.profileVersion == null) {
      formData.append("profileVersion", "");
    } else {
      formData.append("profileVersion", tbprofile.profileVersion);

    }

    if (tbprofile.calid == null) {
      formData.append("calid", "");
    } else {
      formData.append("calid", tbprofile.calid.toString());

    }

    if (tbprofile.isActive == null) {
      formData.append("isActive", "");
    } else {
      formData.append("isActive", tbprofile.isActive.toString());

    }

    if (tbprofile.remark == null) {
      formData.append("remark", "");
    } else {
      formData.append("remark", tbprofile.remark);

    }

    return formData;
  }

  makeFormtbAteconfigFile(tbAteconfigFile_: tbAteconfigFile): any {
    var formData = new FormData();



    if (tbAteconfigFile_.stationId == null) {
      formData.append("stationId", "");

    } else {
      formData.append("stationId", tbAteconfigFile_.stationId.toString());
    }


    if (tbAteconfigFile_.configType == null) {
      formData.append("configType", "");

    } else {
      formData.append("configType", tbAteconfigFile_.configType);
    }




    if (tbAteconfigFile_.hardwareType == null) {
      formData.append("hardwareType", "");

    } else {
      formData.append("hardwareType", tbAteconfigFile_.hardwareType);
    }

    //
    if (tbAteconfigFile_.userId == null) {
      formData.append("userId", "");

    } else {
      formData.append("userId", tbAteconfigFile_.userId.toString());
    }


    /*
         //DateTIme
         if (tbAteconfigFile_.dateModify  == null) {
          formData.append("DateModify ", "");
        } else {
          formData.append("DateModify ", tbAteconfigFile_.dateModify .toDateString());
        }
    
        //DateTIme
        if (tbAteconfigFile_.dateRelease   == null) {
          formData.append("DateRelease  ", "");
        } else {
          formData.append("DateRelease  ", tbAteconfigFile_.dateRelease  .toDateString());
        }
        */

    //String
    if (tbAteconfigFile_.configName == null) {
      formData.append("configName", "");

    } else {
      formData.append("configName", tbAteconfigFile_.configName);
    }

    //String
    if (tbAteconfigFile_.configRevNo == null) {
      formData.append("configRevNo", "");

    } else {
      formData.append("configRevNo", tbAteconfigFile_.configRevNo);
    }




    //String
    if (tbAteconfigFile_.configData == null) {
      formData.append("configData", "");

    } else {
      formData.append("configData", tbAteconfigFile_.configData);
    }



    //String
    if (tbAteconfigFile_.checkSum == null) {
      formData.append("checkSum", "");

    } else {
      formData.append("checkSum", tbAteconfigFile_.checkSum);
    }

    //String
    if (tbAteconfigFile_.testLimitNote == null) {
      formData.append("testLimitNote", "");

    } else {
      formData.append("testLimitNote", tbAteconfigFile_.testLimitNote);
    }

    //Boolean
    if (tbAteconfigFile_.isActive == null) {
      formData.append("isActive", "");

    } else {
      formData.append("isActive", tbAteconfigFile_.isActive.toString());
    }



    return formData;
  }


  makeFormTbEquipment(tbequipment: TbEquipment): any {
    var formData = new FormData();

    //String Not NULL
    formData.append("equipName", tbequipment.equipName);

    //String
    if (tbequipment.equipManufact == null) {
      formData.append("equipManufact", "");

    } else {
      formData.append("equipManufact", tbequipment.equipManufact);
    }

    //String
    if (tbequipment.equipModel == null) {
      formData.append("equipModel", "");

    } else {
      formData.append("equipModel", tbequipment.equipModel);
    }

    //String
    if (tbequipment.equipModelNo == null) {
      formData.append("equipModelNo", "");

    } else {
      formData.append("equipModelNo", tbequipment.equipModelNo);
    }

    //String
    if (tbequipment.equipSerialNo == null) {
      formData.append("equipSerialNo", "");

    } else {
      formData.append("equipSerialNo", tbequipment.equipSerialNo);
    }

    //String
    if (tbequipment.equipDeviceId == null) {
      formData.append("equipDeviceId", "");

    } else {
      formData.append("equipDeviceId", tbequipment.equipDeviceId);
    }

    //String
    if (tbequipment.equipIrdassetNo == null) {
      formData.append("equipIrdassetNo", "");

    } else {
      formData.append("equipIrdassetNo", tbequipment.equipIrdassetNo);
    }

    //Boolean
    if (tbequipment.equipIsCal == null) {
      formData.append("equipIsCal", "");

    } else {
      formData.append("equipIsCal", tbequipment.equipIsCal.toString());
    }

    //DateTIme
    if (tbequipment.equipCaldue == null) {
      formData.append("equipCaldue", "");
    } else {
      formData.append("equipCaldue", tbequipment.equipCaldue.toDateString());
    }

    //Number
    if (tbequipment.stationId == null) {
      formData.append("stationId", "");
    } else {
      formData.append("stationId", tbequipment.stationId.toString());

    }

    //String
    if (tbequipment.equipOwner == null) {
      formData.append("equipOwner", "");

    } else {
      formData.append("equipOwner", tbequipment.equipOwner);
    }

    //Boolean
    if (tbequipment.isActive == null) {
      formData.append("isActive", "");

    } else {
      formData.append("isActive", tbequipment.isActive.toString());
    }

    //String
    if (tbequipment.remark == null) {
      formData.append("remark", "");

    } else {
      formData.append("remark", tbequipment.remark);
    }



    return formData;
  }

  makeFormTbProfileDetail(tbProfileDetail: TbProfileDetail): any {
    var formData = new FormData();

    if (tbProfileDetail.profileId == null) {
      formData.append("profileId", "");

    } else {
      formData.append("profileId", tbProfileDetail.profileId.toString());
    }

    if (tbProfileDetail.detailSqNo == null) {
      formData.append("detailSqNo", "");

    } else {
      formData.append("detailSqNo", tbProfileDetail.detailSqNo.toString());
    }

    if (tbProfileDetail.detailTestName == null) {
      formData.append("detailTestName", "");

    } else {
      formData.append("detailTestName", tbProfileDetail.detailTestName);
    }

    if (tbProfileDetail.detailDesc == null) {
      formData.append("detailDesc", "");

    } else {
      formData.append("detailDesc", tbProfileDetail.detailDesc);
    }


    if (tbProfileDetail.detailLsl == null) {
      formData.append("detailLsl", "");

    } else {
      formData.append("detailLsl", tbProfileDetail.detailLsl.toString());
    }

    if (tbProfileDetail.detailUsl == null) {
      formData.append("detailUsl", "");

    } else {
      formData.append("detailUsl", tbProfileDetail.detailUsl.toString());
    }

    if (tbProfileDetail.detailUom == null) {
      formData.append("detailUom", "");

    } else {
      formData.append("detailUom", tbProfileDetail.detailUom);
    }

    if (tbProfileDetail.detailReqSection == null) {
      formData.append("detailReqSection", "");

    } else {
      formData.append("detailReqSection", tbProfileDetail.detailReqSection);
    }

    if (tbProfileDetail.detailCategory == null) {
      formData.append("detailCategory", "");

    } else {
      formData.append("detailCategory", tbProfileDetail.detailCategory);
    }

    if (tbProfileDetail.detailOption == null) {
      formData.append("detailOption", "");

    } else {
      formData.append("detailOption", tbProfileDetail.detailOption);
    }

    if (tbProfileDetail.detailCmaoption == null) {
      formData.append("detailCmaoption", "");

    } else {
      formData.append("detailCmaoption", tbProfileDetail.detailCmaoption);
    }

    if (tbProfileDetail.detailDebugoption == null) {
      formData.append("detailDebugoption", "");

    } else {
      formData.append("detailDebugoption", tbProfileDetail.detailDebugoption);
    }


    if (tbProfileDetail.isActive == null) {
      formData.append("isActive", "");

    } else {
      formData.append("isActive", tbProfileDetail.isActive.toString());
    }

    return formData;
  }

  makeFormTbUutname(tbUutname: TbUutname): any {
    var formData = new FormData();

    if (tbUutname.uutname == null) {
      formData.append("uutname", "");
    } else {
      formData.append("uutname", tbUutname.uutname);

    }

    if (tbUutname.uutdesc == null) {
      formData.append("uutdesc", "");
    } else {
      formData.append("uutdesc", tbUutname.uutdesc);

    }

    if (tbUutname.modelId == null) {
      formData.append("modelId", "");
    } else {
      formData.append("modelId", tbUutname.modelId.toString());

    }

    if (tbUutname.factoryId == null) {
      formData.append("factoryId", "");
    } else {
      formData.append("factoryId", tbUutname.factoryId.toString());

    }


    if (tbUutname.pfsWorkSt == null) {
      formData.append("pfsWorkSt", "");
    } else {
      formData.append("pfsWorkSt", tbUutname.pfsWorkSt);

    }

    if (tbUutname.pfsOp == null) {
      formData.append("pfsOp", "");
    } else {
      formData.append("pfsOp", tbUutname.pfsOp);

    }


    formData.append("CALRequire", tbUutname.calrequire.toString());
    if (tbUutname.calcycle == null) {
      formData.append("CALCycle", "");
    } else {
      formData.append("CALCycle", tbUutname.calcycle.toString());

    }

    if (tbUutname.goldTestRequire == null) {
      formData.append("GoldTestRequire", "");
    } else {
      formData.append("GoldTestRequire", tbUutname.goldTestRequire.toString());

    }

    if (tbUutname.isActive == null) {
      formData.append("isActive", "");
    } else {
      formData.append("isActive", tbUutname.isActive.toString());

    }

    return formData;
  }


  makeFormTbUutprofile(tbUutprofile: TbUutprofile): any {
    var formData = new FormData();


    if (tbUutprofile.profileId == null) {
      formData.append("profileID", "");
    } else {
      formData.append("profileID", tbUutprofile.profileId.toString());

    }

    if (tbUutprofile.uutnameId == null) {
      formData.append("uutnameId", "");
    } else {
      formData.append("uutnameId", tbUutprofile.uutnameId.toString());

    }

    if (tbUutprofile.revId == null) {
      formData.append("RevID", "");
    } else {
      formData.append("RevID", tbUutprofile.revId.toString());

    }

    if (tbUutprofile.stationId == null) {
      formData.append("stationID", "");
    } else {
      formData.append("stationID", tbUutprofile.stationId.toString());

    }

    if (tbUutprofile.fixtureId == null) {
      formData.append("fixtureID", "");
    } else {
      formData.append("fixtureID", tbUutprofile.fixtureId.toString());

    }

    if (tbUutprofile.isActive == null) {
      formData.append("isActive", "");
    } else {
      formData.append("isActive", tbUutprofile.isActive.toString());

    }

    if (tbUutprofile.remark == null) {
      formData.append("Remark", "");
    } else {
      formData.append("Remark", tbUutprofile.remark);

    }

    return formData;
  }



  //////////////////////////////////////////// Generic IMEI //////////////////////////////////////////////////////



  
  makeFormGenericIMEI(model_: genericimei): any {
    var formData = new FormData();

    if (model_.id == null) {
      formData.append("id", "");
    } else {
      formData.append("id", model_.id.toString());

    }

    if (model_.imei == null) {
      formData.append("imei", "");
    } else {
      formData.append("imei", model_.imei);

    }

    if (model_.sn == null) {
      formData.append("sn", "");
    } else {
      formData.append("sn", model_.sn);

    }

    if (model_.remodel == null) {
      formData.append("remodel", "");
    } else {
      formData.append("remodel", model_.remodel);

    }

    return formData;
  }
  ////////////////////////////////////////////   MySQL  /////////////////////////////////////////////////////////

  makeForma9522b_cnt(a9522b_cnt_: a9522b_cnt): any {
    var formData = new FormData();

    formData.append("cnt_val", a9522b_cnt_.cnt_val);

    return formData;
  }

  makeForma9523_cnt(a9523_cnt_: a9523_cnt): any {
    var formData = new FormData();

    formData.append("cnt_val", a9523_cnt_.cnt_val);

    return formData;
  }



  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////   a9522b_imei  /////////////////////////////////////////////////////////
  makeForma9522b_imei(a9522b_imei_: a9522b_imei): any {
    var formData = new FormData();

    formData.append("imei", a9522b_imei_.imei);
    formData.append("sn", a9522b_imei_.sn);
    formData.append("remodel", a9522b_imei_.remodel);

    return formData;
  }

  makeForma9523_imei(a9523_imei_: a9523_imei): any {
    var formData = new FormData();

    formData.append("imei", a9523_imei_.imei);
    formData.append("sn", a9523_imei_.sn);
    formData.append("remodel", a9523_imei_.remodel);

    return formData;
  }

  makeFormsfx_imei(sfx_imei_: sfx_imei): any {
    var formData = new FormData();

    formData.append("imei", sfx_imei_.imei);
    formData.append("sn", sfx_imei_.sn);
    formData.append("remodel", sfx_imei_.remodel);

    return formData;
  }

  makeFormgdb_imei(gdb_imei_: gdb_imei): any {
    var formData = new FormData();

    formData.append("imei", gdb_imei_.imei);
    formData.append("sn", gdb_imei_.sn);
    formData.append("remodel", gdb_imei_.remodel);
    formData.append("psk", gdb_imei_.psk);
    formData.append("terminal", gdb_imei_.terminal);

    return formData;
  }


  makeFormbcx_imei(bcx_imei_: bcx_imei): any {
    var formData = new FormData();

    formData.append("imei", bcx_imei_.imei);
    formData.append("sn", bcx_imei_.sn);
    formData.append("remodel", bcx_imei_.remodel);
    formData.append("mac_addr", bcx_imei_.mac_addr);

    return formData;
  }



  makeForma9603r_imei(a9603r_imei_: a9603r_imei): any {
    var formData = new FormData();

    formData.append("imei", a9603r_imei_.imei);
    formData.append("sn", a9603r_imei_.sn);
    formData.append("remodel", a9603r_imei_.remodel);

    return formData;
  }


  makeForma9603_imei(a9603_imei_: a9603_imei): any {
    var formData = new FormData();

    formData.append("imei", a9603_imei_.imei);
    formData.append("sn", a9603_imei_.sn);
    formData.append("remodel", a9603_imei_.remodel);

    return formData;
  }

  makeForma9602sb_imei(a9602sb_imei_: a9602sb_imei): any {
    var formData = new FormData();

    formData.append("imei", a9602sb_imei_.imei);
    formData.append("sn", a9602sb_imei_.sn);
    formData.append("remodel", a9602sb_imei_.remodel);

    return formData;
  }

  makeForma9602sb_ext_imei(a9602sb_ext_imei_: a9602sb_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9602sb_ext_imei_.imei);
    formData.append("sn", a9602sb_ext_imei_.sn);
    formData.append("remodel", a9602sb_ext_imei_.remodel);

    return formData;
  }


  makeForma9602r_imei(a9602r_imei_: a9602r_imei): any {
    var formData = new FormData();

    formData.append("imei", a9602r_imei_.imei);
    formData.append("sn", a9602r_imei_.sn);
    formData.append("remodel", a9602r_imei_.remodel);

    return formData;
  }


  makeForma9602n_ext_imei(a9602n_ext_imei_: a9602n_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9602n_ext_imei_.imei);
    formData.append("sn", a9602n_ext_imei_.sn);
    formData.append("remodel", a9602n_ext_imei_.remodel);

    return formData;
  }

  makeForma9602_imei(a9602_imei_: a9602_imei): any {
    var formData = new FormData();

    formData.append("imei", a9602_imei_.imei);
    formData.append("sn", a9602_imei_.sn);
    formData.append("remodel", a9602_imei_.remodel);

    return formData;
  }

  makeForma9575ptt_imei(a9575ptt_imei_: a9575ptt_imei): any {
    var formData = new FormData();

    formData.append("imei", a9575ptt_imei_.imei);
    formData.append("sn", a9575ptt_imei_.sn);
    formData.append("remodel", a9575ptt_imei_.remodel);

    return formData;
  }



  makeForma9575ptt_ext_imei(a9575ptt_ext_imei_: a9575ptt_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9575ptt_ext_imei_.imei);
    formData.append("sn", a9575ptt_ext_imei_.sn);
    formData.append("remodel", a9575ptt_ext_imei_.remodel);

    return formData;
  }

  makeForma9575gsa_imei(a9575gsa_imei_: a9575gsa_imei): any {
    var formData = new FormData();

    formData.append("imei", a9575gsa_imei_.imei);
    formData.append("sn", a9575gsa_imei_.sn);
    formData.append("remodel", a9575gsa_imei_.remodel);

    return formData;
  }


  makeForma9575e_imei(a9575e_imei_: a9575e_imei): any {
    var formData = new FormData();

    formData.append("id9575e_imei", a9575e_imei_.id9575e_imei.toString());
    formData.append("imei", a9575e_imei_.imei);
    formData.append("sn", a9575e_imei_.sn);
    formData.append("remodel", a9575e_imei_.remodel);

    return formData;
  }



  makeForma9575e_ext_imei(a9575e_ext_imei_: a9575e_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9575e_ext_imei_.imei);
    formData.append("sn", a9575e_ext_imei_.sn);
    formData.append("remodel", a9575e_ext_imei_.remodel);

    return formData;
  }


  makeForma9575_imei(a9575_imei_: a9575_imei): any {
    var formData = new FormData();

    formData.append("imei", a9575_imei_.imei);
    formData.append("sn", a9575_imei_.sn);
    formData.append("remodel", a9575_imei_.remodel);

    return formData;
  }

  makeForma9575_ext_imei(a9575_ext_imei_: a9575_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9575_ext_imei_.imei);
    formData.append("sn", a9575_ext_imei_.sn);
    formData.append("remodel", a9575_ext_imei_.remodel);

    return formData;
  }

  makeForma9555a_imei(a9555a_imei_: a9555a_imei): any {
    var formData = new FormData();

    formData.append("imei", a9555a_imei_.imei);
    formData.append("sn", a9555a_imei_.sn);
    formData.append("remodel", a9555a_imei_.remodel);

    return formData;
  }

  makeForma9555a_gsa_imei(a9555a_gsa_imei_: a9555a_gsa_imei): any {
    var formData = new FormData();

    formData.append("imei", a9555a_gsa_imei_.imei);
    formData.append("sn", a9555a_gsa_imei_.sn);
    formData.append("remodel", a9555a_gsa_imei_.remodel);

    return formData;
  }

  makeForma9555a_ext_imei(a9555a_ext_imei_: a9555a_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9555a_ext_imei_.imei);
    formData.append("sn", a9555a_ext_imei_.sn);
    formData.append("remodel", a9555a_ext_imei_.remodel);

    return formData;
  }

  makeForma9523ptt_imei(a9523ptt_imei_: a9523ptt_imei): any {
    var formData = new FormData();

    formData.append("imei", a9523ptt_imei_.imei);
    formData.append("sn", a9523ptt_imei_.sn);
    formData.append("remodel", a9523ptt_imei_.remodel);

    return formData;
  }

  makeForma9523mw_imei(a9523mw_imei_: a9523mw_imei): any {
    var formData = new FormData();

    formData.append("imei", a9523mw_imei_.imei);
    formData.append("sn", a9523mw_imei_.sn);
    formData.append("remodel", a9523mw_imei_.remodel);

    return formData;
  }

  makeForma9523mw_ext_imei(a9523mw_ext_imei_: a9523mw_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9523mw_ext_imei_.imei);
    formData.append("sn", a9523mw_ext_imei_.sn);
    formData.append("remodel", a9523mw_ext_imei_.remodel);

    return formData;
  }

  makeForma9523_ext_imei(a9523_ext_imei_: a9523_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9523_ext_imei_.imei);
    formData.append("sn", a9523_ext_imei_.sn);
    formData.append("remodel", a9523_ext_imei_.remodel);

    return formData;
  }


  makeForma9522b_ext_imei(a9522b_ext_imei_: a9522b_ext_imei): any {
    var formData = new FormData();

    formData.append("imei", a9522b_ext_imei_.imei);
    formData.append("sn", a9522b_ext_imei_.sn);
    formData.append("remodel", a9522b_ext_imei_.remodel);

    return formData;
  }

  makeFormAte_gold_board(ate_gold_board_: ate_gold_board): any {
    var formData = new FormData();

    formData.append("serial_no", ate_gold_board_.serial_no);
    formData.append("model_no", ate_gold_board_.model_no);


    return formData;
  }

  makeFormate_equipment_cal(ate_equipment_cal_: Ate_Equipment_cal222): any {
    var formData = new FormData();


    console.log("formData Parameter")
    console.log(ate_equipment_cal_)

    if (ate_equipment_cal_.equipment_Name == null) {
      formData.append("Equipment_Name", "");

    } else {
      formData.append("Equipment_Name", ate_equipment_cal_.equipment_Name);
    }
 

    if (ate_equipment_cal_.model == null) {
      formData.append("model", "XXXXX");

    } else {
   
      formData.append("model", ate_equipment_cal_.model);
   
    }
/*
    if (ate_equipment_cal_.model == null) {
      formData.append("Model", "");

    } else {
      formData.append("Model", ate_equipment_cal_.model);
    }
*/

    if (ate_equipment_cal_.serial_No == null) {
      formData.append("Serial_No", "");

    } else {
      formData.append("Serial_No", ate_equipment_cal_.serial_No);
    }

    if (ate_equipment_cal_.manufacturer == null) {
      formData.append("Manufacturer", "");

    } else {
      formData.append("Manufacturer", ate_equipment_cal_.manufacturer);
    }

    //String
    if (ate_equipment_cal_.atE_No == null) {
      formData.append("ATE_No", "");
    } else {
      formData.append("ATE_No", ate_equipment_cal_.atE_No);
    }

    //String
    if (ate_equipment_cal_.location == null) {
      formData.append("Location", "");
    } else {
      formData.append("Location", ate_equipment_cal_.location);
    }

    //String
    if (ate_equipment_cal_.asset_No == null) {
      formData.append("Asset_No", "");

    } else {
      formData.append("Asset_No", ate_equipment_cal_.asset_No);
    }

    
    console.log("ate_equipment_cal_.last_Cal_Date");
    console.log(ate_equipment_cal_.last_Cal_Date);

    console.log("ate_equipment_cal_.next_Cal_Due_Date");
    console.log(ate_equipment_cal_.next_Cal_Due_Date);
   // console.log(ate_equipment_cal_.last_Cal_Date.toISOString());
   // console.log(ate_equipment_cal_.last_Cal_Date.toUTCString());
   // console.log(ate_equipment_cal_.last_Cal_Date.toLocaleDateString());
  //  console.log(ate_equipment_cal_.last_Cal_Date.toLocaleString());


    //Date
    if (ate_equipment_cal_.last_Cal_Date == null) {
      formData.append("Last_Cal_Date", "");

    } else {
      formData.append("Last_Cal_Date", ate_equipment_cal_.last_Cal_Date.toISOString().split('T')[0]);
   
    }

    //Date
    if (ate_equipment_cal_.next_Cal_Due_Date == null) {
      formData.append("Next_Cal_Due_Date", "");

    } else {
        formData.append("Next_Cal_Due_Date", ate_equipment_cal_.next_Cal_Due_Date.toISOString().split('T')[0]);
     
    }
   

    //string
    if (ate_equipment_cal_.cal_Cycle == null) {
      formData.append("Cal_Cycle", "");

    } else {
      formData.append("Cal_Cycle", ate_equipment_cal_.cal_Cycle.toString());
    }

    //String
    if (ate_equipment_cal_.remark == null) {
      formData.append("Remark", "");

    } else {
      formData.append("Remark", ate_equipment_cal_.remark);
    }

    console.log("formData Out")
    console.log(formData)

    return formData;
  }

}
