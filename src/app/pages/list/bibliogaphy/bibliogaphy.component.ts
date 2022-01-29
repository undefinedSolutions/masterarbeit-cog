import { Component } from '@angular/core';

import { BibliographyService, InterfaceQuotes } from './../../../services/bibliography/bibliography.service';


@Component({
  selector: 'app-bibliogaphy',
  templateUrl: './bibliogaphy.component.html',
  styleUrls: ['./bibliogaphy.component.scss']
})
export class BibliogaphyComponent {
  quotes: InterfaceQuotes[];

  constructor(private bibliographyService:BibliographyService) {
    this.bibliographyService.data$
    .subscribe(data => {
      this.quotes = data.sort((t1, t2) => {
        const name1 = t1.author.toLowerCase();
        const name2 = t2.author.toLowerCase();
        if (name1 > name2) { return 1; }
        if (name1 < name2) { return -1; }
        return 0;
      });
    })
  }

}
