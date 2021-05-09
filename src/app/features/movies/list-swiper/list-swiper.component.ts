import { MoviesService } from './../../../core/services/movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-list-swiper',
  templateUrl: './list-swiper.component.html',
  styleUrls: ['./list-swiper.component.scss']
})
export class ListSwiperComponent implements OnInit {

  
  data = [];
  genres = Object.keys(genreType);

  config: SwiperOptions = {
    speed: 400,
    spaceBetween: 30,
    autoHeight: true,
    direction: 'horizontal',
    slidesPerView: 5,
    scrollbar: false,
    pagination: false,
    navigation: false,
    // mousewheel: true,
    loop: true,
  };


  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.list().subscribe(
      (res: any) => {
        this.data = res.movies;
      },
      err => {
        console.log('=====err======');
      }
    )
  }

}

export type GenreType = "action" | "adventure" | "biography" | "comedy" | "crime"
  | "drama" | "history" | "mystery" | "scifi" | "sport" | "thriller";

export const genreType = {
  action: "action" as GenreType,
  adventure: "adventure" as GenreType,
  biography: "biography" as GenreType,
  comedy: "comedy" as GenreType,
  crime: "crime" as GenreType,
  drama: "drama" as GenreType,
  history: "history" as GenreType,
  mystery: "mystery" as GenreType,
  scifi: "scifi" as GenreType,
  sport: "sport" as GenreType,
  thriller: "thriller" as GenreType,
};