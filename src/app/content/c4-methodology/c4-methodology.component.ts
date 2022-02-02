import { Component, AfterViewInit } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c4-methodology',
  templateUrl: './c4-methodology.component.html',
  styleUrls: ['./c4-methodology.component.scss']
})
export class C4MethodologyComponent implements AfterViewInit {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Relevante Hardwarespezifikationen für GDAL', 2)
  }
}
