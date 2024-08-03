import { Injectable } from '@angular/core';
import { Endpoints } from '../../constants/endpoint.constant';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IGenre } from '../../interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  endpoints = Endpoints

  constructor(
    private http: HttpClient
  ) { }

  getAllGenres(): Observable<IGenre> {
    return this.http.get<IGenre>(this.endpoints.genres).pipe(
      map(response => {
        response.genres.unshift('Todos')
        return response
      })
    )
  }
}
