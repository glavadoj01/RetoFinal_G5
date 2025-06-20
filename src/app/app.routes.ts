import { Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/options.routes')
  },
  {
    path: 'clientes',
    component: ListPageComponent,
  },
  
];
