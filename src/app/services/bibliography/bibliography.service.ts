import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface InterfaceQuotes {
  id: string;
  author: string;
  chapter: string;
  lastVisit: string;
  publicationDate: string;
  title: string;
  URL: string;
}

@Injectable({
  providedIn: 'root'
})
export class BibliographyService {
  data$: BehaviorSubject<Array<InterfaceQuotes>> = new BehaviorSubject([{
    id: '',
    author: '',
    chapter: '',
    lastVisit: '',
    publicationDate: '',
    title: '',
    URL: ''
  }]);

  constructor() { }

  pushQuote(
    newId: string,
    newAuthor: string,
    newChapter: string,
    newLastVisit: string,
    newPublicationDate: string,
    newTitle: string,
    newURL: string
  ): void {
    if (!this.data$.value.some(el => el.title === newTitle)) {
      let oldData = this.data$.value
      oldData = oldData.filter(e => e.title !== '');
      oldData.push({
        id: newId,
        author: newAuthor,
        chapter: newChapter,
        lastVisit: newLastVisit,
        publicationDate: newPublicationDate,
        title: newTitle,
        URL: newURL
      })
      //oldData.sort((a, b) => a.id.localeCompare(b.id));
      this.data$.next(oldData);
    }
  }
}
