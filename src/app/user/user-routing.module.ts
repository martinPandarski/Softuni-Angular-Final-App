import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    canActivateChild: [AuthGuard],
    children:[
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          isLogged: false,
          title: 'REGISTER USER'
        },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          isLogged: false,
          title: 'USER LOGIN'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          isLogged: true,
          title: 'USER PROFILE'
        }
      }
    ]
  }
  
];

export const UserRoutingModule = RouterModule.forChild(routes);