import { Component } from '@angular/core';

import { AbbreviationsService, InterfaceAbbreviation } from './../../../services/abbreviations/abbreviations.service';

@Component({
  selector: 'app-list-of-abbreviations',
  templateUrl: './abbreviations.component.html',
  styleUrls: ['./abbreviations.component.scss']
})
export class AbbreviationsComponent {
  abbreviations: InterfaceAbbreviation[];

  constructor(private abbreviationsService:AbbreviationsService) {
    this.abbreviationsService.data$
    .subscribe(data => {
      this.abbreviations = data;
      this.abbreviations.sort((a, b) => a.abbreviation.localeCompare(b.abbreviation));
    })
  }
}
