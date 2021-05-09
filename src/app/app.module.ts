import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { MatButtonModule } from '@angular/material/button';
import { ListSwiperComponent } from './features/movies/list-swiper/list-swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxUsefulSwiperModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
