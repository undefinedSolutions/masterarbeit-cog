import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface InterfaceAbbreviation {
  abbreviation: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AbbreviationsService {
  data$: BehaviorSubject<Array<InterfaceAbbreviation>> = new BehaviorSubject([{abbreviation: '', description: ''}]);

  constructor() { }
  pushAbbreviation(newAbbreviation: string, newDescription:string): void {
    if (!this.data$.value.some(el => el.abbreviation === newAbbreviation)) {
      const oldData = this.data$.value
      oldData.push({
        abbreviation: newAbbreviation,
        description: newDescription
      })
      oldData.sort((a, b) => a.abbreviation.localeCompare(b.abbreviation));
      this.data$.next(oldData);
    }
  }
}
