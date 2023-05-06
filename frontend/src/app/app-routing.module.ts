import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authen/login/login.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { StockIrdCreateComponent } from './components/stock/stock-ird-create/stock-ird-create.component';
import { StockIrdEditComponent } from './components/stock/stock-ird-edit/stock-ird-edit.component';
import { HomeComponent } from './components/home/home/home.component';
import { StockUUTStatusTypeComponent } from './components/stock/stock-uutstatus-type/stock-uutstatus-type.component';
import { StockTbProfileComponent } from './components/stock/stock-tb-profile/stock-tb-profile.component';
import { StockTbProfileDetailComponent } from './components/stock/stock-tb-profile-detail/stock-tb-profile-detail.component';
import { StockMysqlComponent } from './components/stock/stock-mysql/stock-mysql.component';
import { StockMysqlCreateComponent } from './components/stock/stock-mysql-create/stock-mysql-create.component';
import { StockMysqlEditComponent } from './components/stock/stock-mysql-edit/stock-mysql-edit.component';
import { StockTbUutnameComponent } from './components/stock/stock-tb-uutname/stock-tb-uutname.component';
import { StockTbUutprofileComponent } from './components/stock/stock-tb-uutprofile/stock-tb-uutprofile.component';
import { StockTbUutnameCreateComponent } from './components/stock/stock-tb-uutname-create/stock-tb-uutname-create.component';
import { StockTbUutprofileCreateComponent } from './components/stock/stock-tb-uutprofile-create/stock-tb-uutprofile-create.component';
import { StockTbUutnameEditComponent } from './components/stock/stock-tb-uutname-edit/stock-tb-uutname-edit.component';
import { StockTbUutprofileEditComponent } from './components/stock/stock-tb-uutprofile-edit/stock-tb-uutprofile-edit.component';
import { StockTbProfileEditComponent } from './components/stock/stock-tb-profile-edit/stock-tb-profile-edit.component';
import { StockTbProfileDetailEditComponent } from './components/stock/stock-tb-profile-detail-edit/stock-tb-profile-detail-edit.component';
import { StockTbProfileCreateComponent } from './components/stock/stock-tb-profile-create/stock-tb-profile-create.component';
import { StockTbProfileDetailCreateComponent } from './components/stock/stock-tb-profile-detail-create/stock-tb-profile-detail-create.component';
import { IMEIProductComponent } from './components/IMEI/imei-product/imei-product.component';
import { IMEISubProductComponent } from './components/IMEI/imei-sub-product/imei-sub-product.component';
import { IMEIShowTableComponent } from './components/IMEI/imei-show-table/imei-show-table.component';
import { ImeiEditComponent } from './components/IMEI/imei-edit/imei-edit.component';
import { ImeiCreateComponent } from './components/IMEI/imei-create/imei-create.component';
import { StockTbEquipmentComponent } from './components/stock/stock-tb-equipment/stock-tb-equipment.component';
import { StockTbEquipmentEditComponent } from './components/stock/stock-tb-equipment-edit/stock-tb-equipment-edit.component';
import { SNComponent } from './components/sn/sn.component';
import { StockTbEquipmentAddComponent } from './components/stock/stock-tb-equipment-add/stock-tb-equipment-add.component';
import { GoldBoardComponent } from './components/gold-board/gold-board.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { ModelComponent } from './components/model/model.component';
import { FWComponent } from './components/fw/fw.component';
import { PMComponent } from './components/pm/pm.component';
import { GoldBoardEditComponent } from './components/gold-board-edit/gold-board-edit.component';
import { GoldBoardCreateComponent } from './components/gold-board-create/gold-board-create.component';
import { ModelCreateComponent } from './components/model-create/model-create.component';
import { ModelEditComponent } from './components/model-edit/model-edit.component';
import { ProfileATEComponent } from './components/profile-ate/profile-ate.component';
import { ProfileAteEditComponent } from './components/profile-ate-edit/profile-ate-edit.component';
import { ProfileAteCreateComponent } from './components/profile-ate-create/profile-ate-create.component';
import { AddIMEIComponent } from './components/add-imei/add-imei.component';
import { EquipmentCalComponent } from './components/equipment-cal/equipment-cal.component';
import { EquipmentCalEditComponent } from './components/equipment-cal-edit/equipment-cal-edit.component';
import { EquipmentCreateComponent } from './components/equipment-create/equipment-create.component';
import { ATECalibrationComponent } from './components/atecalibration/atecalibration.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'stock', children: [
      { path: '', component: StockHomeComponent },
      { path: 'Product', component: StockHomeComponent },
      { path: 'create', component: StockCreateComponent },
      { path: 'edit/:id', component: StockEditComponent },
      { path: 'ird-create', component: StockIrdCreateComponent },
      { path: 'ird-edit/:id', component: StockIrdEditComponent },
      { path: 'UUTStatusType', component: StockUUTStatusTypeComponent },
      { path: 'tbProfile/:id', component: StockTbProfileComponent },
      { path: 'tbProfileDetail/:id', component: StockTbProfileDetailComponent },
      { path: 'mySQL', component: StockMysqlComponent },
      { path: 'mySQL-create', component: StockMysqlCreateComponent },
      { path: 'mySQL-edit/:id', component: StockMysqlEditComponent },
      { path: 'TbUutname', component: StockTbUutnameComponent },
      { path: 'TbUutname-create/:id', component: StockTbUutnameCreateComponent },
      { path: 'TbUutname-edit/:id', component: StockTbUutnameEditComponent },
      { path: 'TbUutprofile/:id', component: StockTbUutprofileComponent },
      { path: 'TbUutprofile-create/:id', component: StockTbUutprofileCreateComponent },
      { path: 'TbUutprofile-edit/:id', component: StockTbUutprofileEditComponent },
      { path: 'tbProfile-edit/:id', component: StockTbProfileEditComponent },
      { path: 'tbProfile-create/:id', component: StockTbProfileCreateComponent },
      { path: 'tbProfileDetail-edit/:id', component: StockTbProfileDetailEditComponent },
      { path: 'tbProfileDetail-create/:id', component: StockTbProfileDetailCreateComponent },
      { path: 'tbEquipment', component: StockTbEquipmentComponent },
      { path: 'tbEquipment-edit/:id', component: StockTbEquipmentEditComponent },
      { path: 'tbEquipment-create/:id', component: StockTbEquipmentAddComponent }
    ]
  },
  { path: 'IMEI', children: [
      { path: 'Product', component: IMEIProductComponent },
      { path: 'SubProduct/:id', component: IMEISubProductComponent },
      { path: 'ShowTable/:id/:id2', component: IMEIShowTableComponent },
      { path: 'edit/:id', component: ImeiEditComponent },
      { path: 'create/:id', component: ImeiCreateComponent }
   ]
  },
  { path: 'shop', component: ShopHomeComponent },
  { path: 'sn', component: SNComponent },
  { path: 'goldBoard', component: GoldBoardComponent },
  { path: 'goldBoardEdit/:id', component: GoldBoardEditComponent },
  { path: 'goldBoardCreate/:id', component: GoldBoardCreateComponent },
  { path: 'fixture', component: FixtureComponent },
  { path: 'model', component: ModelComponent },
  { path: 'model-edit/:id', component: ModelEditComponent },
  { path: 'model-create/:id', component: ModelCreateComponent },
  { path: 'fw', component: FWComponent },
  { path: 'pm', component: PMComponent },
  { path: 'ProfileATE', component: ProfileATEComponent },
  { path: 'ProfileATE-edit/:id', component: ProfileAteEditComponent },
  { path: 'ProfileATE-create', component: ProfileAteCreateComponent },
  { path: 'AddIMEI', component: AddIMEIComponent },
  { path: 'EquipmentCal', component: EquipmentCalComponent },
  { path: 'EquipmentCalEdit/:id', component: EquipmentCalEditComponent },
  { path: 'EquipmentCalCreate', component: EquipmentCreateComponent },
  { path: 'ATECalibration', component: ATECalibrationComponent },

  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }