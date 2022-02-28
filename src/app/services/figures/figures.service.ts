import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface InterfaceFigures {
  caption: string;
  id: string;
  sort: number;
}

@Injectable({
  providedIn: 'root'
})
export class FiguresService {
  data$: BehaviorSubject<Array<InterfaceFigures>> = new BehaviorSubject([{caption: '', id: '', sort: 0}]);

  constructor() { }

  pushFigure(newCaption: string, newId: string, newSort: number): void {
    if (!this.data$.value.some(el => el.id === newId)) {
      let oldData = this.data$.value
      oldData = oldData.filter(e => e.id !== '');
      oldData.push({
        caption: newCaption,
        id: newId,
        sort: newSort
      })
      //oldData.sort((a, b) => a.id.localeCompare(b.id));
      this.data$.next(oldData);
    }
  }
}
