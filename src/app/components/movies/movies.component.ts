import { Component, Input } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  @Input() movies: IMovie[] = []


}
