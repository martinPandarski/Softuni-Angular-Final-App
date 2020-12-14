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



@NgModule({
  declarations: [DashboardComponent, NewPlanComponent],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule,
    FormsModule,
    DashboardRouterModule
    
  ],
  providers: [DashboardService],
  entryComponents: [NewPlanComponent]

})
export class DashboardModule { }
