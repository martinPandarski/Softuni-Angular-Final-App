import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewPlanComponent } from './dashboard/new-plan/new-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    // DashboardComponent,
    // RegisterComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
