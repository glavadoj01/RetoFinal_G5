import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientCardComponent } from './components/client-card/client-card.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'client',
    component: ClientCardComponent
  },
  {
    path: '',
    redirectTo: 'home',
  },
];
