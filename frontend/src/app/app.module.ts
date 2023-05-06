import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { ChartsModule } from 'ng2-charts';

import {DatePipe} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authen/login/login.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from './services/jwt.interceptor';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ShopPaymentComponent } from './components/shop/shop-payment/shop-payment.component';
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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StockTbEquipmentAddComponent } from './components/stock/stock-tb-equipment-add/stock-tb-equipment-add.component';
import { MatButtonModule } from '@angular/material';
import { SNComponent } from './components/sn/sn.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule, MatDatepickerIntl} from '@angular/material/datepicker';
import {  MatIconModule } from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import { GoldBoardComponent } from './components/gold-board/gold-board.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { ModelComponent } from './components/model/model.component';
import { FWComponent } from './components/fw/fw.component';
import { PMComponent } from './components/pm/pm.component';
import { GoldBoardEditComponent } from './components/gold-board-edit/gold-board-edit.component';
import { GoldBoardCreateComponent } from './components/gold-board-create/gold-board-create.component';
import {MatSelectModule} from '@angular/material/select';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StockHomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    StockCreateComponent,
    StockEditComponent,
    ShopHomeComponent,
    ShopPaymentComponent,
    StockIrdCreateComponent,
    StockIrdEditComponent,
    HomeComponent,
    StockUUTStatusTypeComponent,
    StockTbProfileComponent,
    StockTbProfileDetailComponent,
    StockMysqlComponent,
    StockMysqlCreateComponent,
    StockMysqlEditComponent,
    StockTbUutnameComponent,
    StockTbUutprofileComponent,
    StockTbUutnameCreateComponent,
    StockTbUutprofileCreateComponent,
    StockTbUutnameEditComponent,
    StockTbUutprofileEditComponent,
    StockTbProfileEditComponent,
    StockTbProfileDetailEditComponent,
    StockTbProfileCreateComponent,
    StockTbProfileDetailCreateComponent,
    IMEIProductComponent,
    IMEISubProductComponent,
    IMEIShowTableComponent,
    ImeiEditComponent,
    ImeiCreateComponent,
    StockTbEquipmentComponent,
    StockTbEquipmentEditComponent,
    SNComponent,
    StockTbEquipmentAddComponent,
    GoldBoardComponent,
    FixtureComponent,
    ModelComponent,
    FWComponent,
    PMComponent,
    GoldBoardEditComponent,
    GoldBoardCreateComponent,
    ModelCreateComponent,
    ModelEditComponent,
    ProfileATEComponent,
    ProfileAteEditComponent,
    ProfileAteCreateComponent,
    AddIMEIComponent,
    EquipmentCalComponent,
    EquipmentCalEditComponent,
    EquipmentCreateComponent,
    ATECalibrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },DatePipe, MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }