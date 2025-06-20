import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

export const routes: Routes = [
  {
    path: 'client',
    loadChildren: () => import('./pages/options.routes'),
  },
//   {
//     path: '',
//     redirectTo: 'home',
//   },
  {
    path: 'clientes',
    component: ListPageComponent,
  },
  
];
