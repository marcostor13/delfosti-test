import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterState } from '../../states/filter.state';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(
    private filterState: FilterState
  ) { }

  onClickPremiere() {
    this.filterState.set({
      isPremiere: true
    })
  }
  onClickAllMovies() {
    this.filterState.set({})
  }

}
