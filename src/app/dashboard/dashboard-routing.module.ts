import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { DetailsPlansComponent } from './details-plans/details-plans.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'new',
    component: NewPlanComponent,
    data: {
      title: 'New Plan',
      isLogged: true
    },
  },
  {
    path: 'details',
    component: DetailsPlansComponent,
    data: {
      title: 'Details',
      isLogged: true
    }
  }




];

export const DashboardRouterModule = RouterModule.forChild(routes);