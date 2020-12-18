import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';

import { ReactiveFormsModule } from '@angular/forms';

import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';

import { SharedModule } from './shared/shared.module';

import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    UserModule,
    DashboardModule,
    
   
    
    // SharedModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
