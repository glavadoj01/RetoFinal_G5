import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'client',
    loadChildren: () => import('./pages/options.routes'),
  },
  {
    path: '',
    redirectTo: 'home',
  },
];
