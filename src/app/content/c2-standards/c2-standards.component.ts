import { Component, AfterViewInit } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c2-standards',
  templateUrl: './c2-standards.component.html',
  styleUrls: ['./c2-standards.component.scss']
})
export class C2StandardsComponent implements AfterViewInit {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Auszug aus den relevanten Informationen einen WKSS', 1)
  }
}
