import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface InterfaceFigures {
  caption: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class FiguresService {
  data$: BehaviorSubject<Array<InterfaceFigures>> = new BehaviorSubject([{caption: '', id: 0}]);

  constructor() { }

  pushFigure(newCaption: string, newId: number): void {
    if (!this.data$.value.some(el => el.id === newId)) {
      let oldData = this.data$.value
      oldData = oldData.filter(e => e.id !== 0);
      oldData.push({
        caption: newCaption,
        id: newId
      })
      //oldData.sort((a, b) => a.id.localeCompare(b.id));
      this.data$.next(oldData);
    }
  }
}
