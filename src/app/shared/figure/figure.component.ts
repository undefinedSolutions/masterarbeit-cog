import { Component, OnInit, Input } from '@angular/core';

import { FiguresService } from './../../services/figures/figures.service';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {
  @Input() id: string;
  @Input() src: string;
  @Input() caption: string;
  @Input() imageStyle: string;
  @Input() source: string;
  @Input() sourceQuote = {};

  constructor(private figuresService:FiguresService) { }

  ngOnInit(): void {
    this.figuresService.pushFigure(this.caption, this.id);
  }

  getQuote(key): string {
    return this.sourceQuote[key]
  }

  checkQuote(): boolean {
    return Object.keys(this.sourceQuote).length !== 0;
  }
}
