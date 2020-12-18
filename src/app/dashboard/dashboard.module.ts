import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { DashboardService } from './dashboard.service';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { DashboardRouterModule } from './dashboard-routing.module';
import { DetailsPlansComponent } from './details-plans/details-plans.component';



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
  exports:[DashboardComponent, DetailsPlansComponent]
  //entryComponents: [NewPlanComponent]

})
export class DashboardModule { }
