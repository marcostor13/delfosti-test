import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../constants/endpoint.constant';
import { IMovie } from '../../interfaces/movie.interface';
import { Observable } from 'rxjs';
import { IFilter } from '../../interfaces/filter.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  endpoints = Endpoints

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.endpoints.movies)
  }

  getKeys(filters: IFilter) {
    return Object.keys(filters)
  }

  getMoviesWithFilters(filters: IFilter, allMovies: IMovie[]) {
    const keys = this.getKeys(filters)
    let response: IMovie[] = []
    if (keys.indexOf('isPremiere') > -1) {
      response = [...response, ...allMovies.filter(movie => movie.isPremiere === filters.isPremiere)]
    }
    if (keys.indexOf('keyword') > -1) {
      response = [...response, ...allMovies.filter(movie => movie.title.toLowerCase().indexOf(filters.keyword?.toLowerCase() || '') > -1)]
    }
    if (keys.indexOf('genre') > -1) {
      response = [...response, ...allMovies.filter(movie => movie.genre.toLowerCase() === filters.genre?.toLowerCase())]
    }
    if (keys.length === 0) {
      response = [...allMovies]
    }
    return response
  }
}
