import { Component } from '@angular/core';

import { FiguresService, InterfaceFigures } from './../../../services/figures/figures.service';

@Component({
  selector: 'app-list-of-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss']
})
export class FiguresComponent {
  figures: InterfaceFigures[];

  constructor(private figuresService:FiguresService) {
    this.figuresService.data$
    .subscribe(data => {
      this.figures = data.sort((a, b) => (a.sort < b.sort) ? -1 : 1);
    })
    
  }
}
