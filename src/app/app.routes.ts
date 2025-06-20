import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientCardComponent } from './components/client-card/client-card.component';

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
