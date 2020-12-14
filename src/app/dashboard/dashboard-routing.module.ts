import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPlanComponent } from './new-plan/new-plan.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'dashboard/new',
    component: NewPlanComponent,
    data: {
      title: 'New Plan',
      isLogged: true
    }
  },
  
];

export const DashboardRouterModule = RouterModule.forChild(routes);