import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface InterfaceQuotes {
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
    author: '',
    chapter: '',
    lastVisit: '',
    publicationDate: '',
    title: '',
    URL: ''
  }]);

  constructor() { }

  pushQuote(
    newAuthor: string,
    newChapter: string,
    newLastVisit: string,
    newPublicationDate: string,
    newTitle: string,
    newURL: string
  ): void {
    console.log("test1");
    if (!this.data$.value.some(el => el.title === newTitle)) {
      console.log("test2");
      let oldData = this.data$.value
      oldData = oldData.filter(e => e.title !== '');
      oldData.push({
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
