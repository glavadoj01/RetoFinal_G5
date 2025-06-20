import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
<<<<<<< HEAD
    loadComponent: () => import('./components/home/home.component')
  },
  {
    path: 'client',

=======
    loadComponent: () => import('./pages/home-page/home-page.module')
  },
  {
    path: 'client',
    loadComponent: () => import('./components/client-card/client-card.component')
  },
  {
    path: '',
    redirectTo: 'home',
>>>>>>> 53721c4 (More pages)
  },
];
