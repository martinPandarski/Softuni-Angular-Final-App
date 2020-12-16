import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { DashboardService } from './dashboard.service';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { RouterModule } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DashboardRouterModule } from './dashboard-routing.module';
import { DetailsPlansComponent } from './details-plans/details-plans.component';
import {MatRadioButton} from '@angular/material/radio'



@NgModule({
  declarations: [DashboardComponent, NewPlanComponent, DetailsPlansComponent],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule,
    FormsModule,
    DashboardRouterModule,
    
  ],
  providers: [DashboardService],
  entryComponents: [NewPlanComponent]

})
export class DashboardModule { }
