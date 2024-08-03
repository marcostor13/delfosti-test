import { Component, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { IMovie } from '../../interfaces/movie.interface';
import { MoviesComponent } from '../../components/movies/movies.component';
import { FilterState } from '../../states/filter.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnDestroy {

  movies: IMovie[] = []
  moviesTmp: IMovie[] = []
  subscription!: Subscription

  constructor(
    private moviesService: MoviesService,
    private filterState: FilterState
  ) { }

  ngOnInit(): void {
    this.getMovies()
    this.getFilters()
  }

  getFilters() {
    this.subscription = this.filterState.get().subscribe(filters => {
      this.movies = this.moviesService.getMoviesWithFilters(filters, this.moviesTmp)
    })
  }

  getMovies() {
    this.moviesService.getAllMovies().subscribe(movies => {
      this.movies = movies
      this.moviesTmp = movies
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
