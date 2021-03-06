import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface InterfaceContent {
  h: number;
  headline: string;
  id: number;
  number: string;
  type: string;
}


@Injectable({
  providedIn: 'root'
})
export class TocService {
  data$: BehaviorSubject<Array<InterfaceContent>> = new BehaviorSubject([{headline: '', id: 0, h: 0, number: '', type: 'roman'}]);

  constructor() { }

  pushContent(newH: number, newHeadline: string, newId: number, newNumber: string, newType = 'number'): void {
    if (!this.data$.value.some(el => el.id === newId)) {
      let oldData = this.data$.value
      oldData = oldData.filter(e => e.id !== 0);
      oldData.push({
        h: newH,
        headline: newHeadline,
        id: newId,
        number: newNumber,
        type: newType
      })
      //oldData.sort((a, b) => a.id.localeCompare(b.id));
      this.data$.next(oldData);
    }
  }
}
