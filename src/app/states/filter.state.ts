import { Injectable, WritableSignal, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { Observable } from 'rxjs'
import { IFilter } from '../interfaces/filter.interface'

@Injectable()
export class FilterState {
  filters: WritableSignal<IFilter> = signal({} as IFilter)
  filters$: Observable<IFilter> = toObservable(this.filters)

  constructor() { }

  set(value: IFilter) {
    this.filters.update(l => (l = value))
  }

  get() {
    return this.filters$
  }

  getValue() {
    return this.filters()
  }
}
