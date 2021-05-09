import { ListSwiperComponent } from './list-swiper/list-swiper.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      breadcrumb: 'List'
    }
  },
  {
    path: 'list-swipper',
    component: ListSwiperComponent,
    data: {
      breadcrumb: 'List Swipper'
    }
  },
  {
    path: 'bookmarks',
    component: BookmarkComponent,
    data: {
      breadcrumb: 'Bookmarks'
    }
  },
  {
    path: 'details/:slug',
    component: DetailsComponent,
    data: {
      breadcrumb: 'Details'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
