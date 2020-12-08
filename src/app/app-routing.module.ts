import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component'
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NewPlanComponent } from './dashboard/new-plan/new-plan.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data:{
      title: 'Plans Dashboard'
    }
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard/new',
    component: NewPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
