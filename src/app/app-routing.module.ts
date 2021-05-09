import { WrapperComponent } from './core/layout/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full'
      },
      {
        path: 'movies',
        data: {
          breadcrumb: 'Movies'
        },
        loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
