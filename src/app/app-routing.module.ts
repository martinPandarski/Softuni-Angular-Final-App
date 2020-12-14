
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    
    children:[
      {
        path: '',
        component: WelcomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'profile',
        
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'dashboard',
       
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '**',
        component: NotFoundComponent,
        data:{
          title: '404'
        }
      }
    ]
 
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
