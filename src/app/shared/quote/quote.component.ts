import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { BibliographyService } from './../../services/bibliography/bibliography.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @HostBinding('attr.class') role = 'footnote';
  @Input() edb: boolean = false;
  @Input() id: string;
  @Input() author: string;
  @Input() title: string;
  @Input() publicationDate: string;
  @Input() chapter: string;
  @Input() URL: string; // Erscheinungsort
  @Input() lastVisit: string // zuletzt aufgerufen am
  @Input() vgl: boolean;

  constructor(private bibliographyService:BibliographyService) { }

  ngOnInit(): void {
    if(!this.edb) {
      this.bibliographyService.pushQuote(
        this.id,
        this.author,
        this.chapter,
        this.lastVisit,
        this.publicationDate,
        this.title,
        this.URL
      )
    }
    //this.tocService.pushContent(this.h, this.headline, this.id, this.number, this.type);
  }
}
