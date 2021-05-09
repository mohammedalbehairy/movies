import { IMovie } from './../../interfaces/movie.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`/movies`);
  }

  getMovies(query?: string): Observable<{ movies: IMovie[] }> {
    let params = new HttpParams();
    params = query ? params.append('q', query) : null;

    return this.http.get<{ movies: IMovie[] }>(`/movies`, { params });
  }
}
