import { AfterViewInit, Component } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c4s1-benchmark-datenaufarbeitung',
  templateUrl: './c4s1-benchmark-datenaufarbeitung.component.html',
  styleUrls: ['./c4s1-benchmark-datenaufarbeitung.component.scss']
})
export class C4s1BenchmarkDatenaufarbeitungComponent implements AfterViewInit {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Relevante Hardware-Spezifikationen für GDAL', "4-1")
  }
}
