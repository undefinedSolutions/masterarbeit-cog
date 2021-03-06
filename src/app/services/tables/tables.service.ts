import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface InterfaceTable {
  caption: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  data$: BehaviorSubject<Array<InterfaceTable>> = new BehaviorSubject([{caption: '', id: ''}]);

  constructor() { }

  pushTable(newCaption: string, newId: string): void {
    if (!this.data$.value.some(el => el.id === newId)) {
      let oldData = this.data$.value
      oldData = oldData.filter(e => e.id !== '');
      oldData.push({
        caption: newCaption,
        id: newId
      })
      //oldData.sort((a, b) => a.id.localeCompare(b.id));
      this.data$.next(oldData);
    }
  }
}
