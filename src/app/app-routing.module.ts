
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from '../app/shared/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    canActivateChild:[AuthGuard],
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: WelcomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: '**',
        component: NotFoundComponent,
        data:{
          title: '404',
          
        }
      }
    ]
 
  }
];


export const AppRoutingModule = RouterModule.forRoot(routes);
