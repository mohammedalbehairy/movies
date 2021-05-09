import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MatCardModule } from '@angular/material/card';
import { MoviesRoutingModule } from './movies-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { BookmarkComponent } from './bookmark/bookmark.component';



@NgModule({
  declarations: [ListComponent, DetailsComponent, BookmarkComponent],
  imports: [
    CommonModule,
    MatCardModule,
    NgxUsefulSwiperModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
