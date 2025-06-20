import { HomePageComponent } from "./home-page/home-page.component";
import { CreatePageComponent } from "./create-page/create-page.component";
import { DeletePageComponent } from "./delete-page/delete-page.component";
import { EditPageComponent } from "./edit-page/edit-page.component";

export const optionRoutes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'list',
        component: HomePageComponent
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
      }
    ]
  }
]

export default optionRoutes;
