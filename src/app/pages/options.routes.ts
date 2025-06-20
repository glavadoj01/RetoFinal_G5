import { HomePageComponent } from "./home-page/home-page.component";
import { CreatePageComponent } from "./create-page/create-page.component";
import { DeletePageComponent } from "./delete-page/delete-page.component";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { Routes } from "@angular/router";

export const optionsRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'list',
        component: ListPageComponent
      },
      {
        path: 'create',
        component: CreatePageComponent
      },
      {
        path: 'delete',
        component: DeletePageComponent
      },
      {
        path: 'edit/:id',
        component: EditPageComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full' // <-- Esto es importante
      }
    ]
  }
]

export default optionsRoutes;
