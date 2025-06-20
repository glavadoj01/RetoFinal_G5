import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientCardComponent } from './components/client-card/client-card.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.component')
  },
  {
    path: 'client',

  },
];
