import { Component } from '@angular/core';

import { TocService, InterfaceContent } from  './../../../services/toc/toc.service';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss']
})
export class TocComponent {
  toc: InterfaceContent[];

  constructor(private tocService:TocService) {
    this.tocService.data$
    .subscribe(data => {
      this.toc = data;
    })
  }
}
