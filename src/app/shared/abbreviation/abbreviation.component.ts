import { Component, OnInit, Input } from '@angular/core';

import { AbbreviationsService } from './../../services/abbreviations/abbreviations.service';

@Component({
  selector: 'app-abbreviation',
  templateUrl: './abbreviation.component.html',
  styleUrls: ['./abbreviation.component.scss']
})
export class AbbreviationComponent implements OnInit {
  @Input() abbreviation: string;
  @Input() description: string;
  constructor(private abbreviationsService:AbbreviationsService) { }

  ngOnInit(): void {
    this.abbreviationsService.pushAbbreviation(this.abbreviation, this.description);
  }

}
