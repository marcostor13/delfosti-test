import { FilterState } from './../../states/filter.state';
import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres/genres.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { IFilter } from '../../interfaces/filter.interface';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatSelectModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit {

  genres: string[] = []
  keyword: string = ''
  genre: string = ''


  constructor(
    private genresService: GenresService,
    private filterState: FilterState
  ) { }

  ngOnInit(): void {
    this.getGenres()
  }

  getGenres() {
    this.genresService.getAllGenres().subscribe(response => {
      this.genres = response.genres
    })
  }

  onChangeFilters() {
    const filters = {} as IFilter
    if (this.keyword) filters.keyword = this.keyword
    if (this.genre && this.genre !== 'Todos') filters.genre = this.genre
    this.filterState.set(filters)
  }
}
