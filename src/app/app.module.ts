import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { HomeUserComponent } from './FrontOffice/home-user/home-user.component';
import { FooterUserComponent } from './FrontOffice/footer-user/footer-user.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';
import { SignINUserComponent } from './FrontOffice/sign-in-user/sign-in-user.component';
import { SignUPUserComponent } from './FrontOffice/sign-up-user/sign-up-user.component';
import { FormsModule } from '@angular/forms';
import { ClientHomeComponent } from './FrontOffice/client-home/client-home.component';
import { ManagerHomeComponent } from './FrontOffice/manager-home/manager-home.component';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateUserComponent,
    HomeUserComponent,
    FooterUserComponent,
    HeaderUserComponent,
    SignINUserComponent,
    SignUPUserComponent,
    ClientHomeComponent,
    ManagerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
