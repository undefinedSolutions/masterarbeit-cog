import { Component, AfterViewInit } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c2s1-tile-matrix-set',
  templateUrl: './c2s1-tile-matrix-set.component.html',
  styleUrls: ['./c2s1-tile-matrix-set.component.scss']
})
export class C2s1TileMatrixSetComponent implements AfterViewInit {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Auszug aus den relevanten Informationen einen WKSS', "2-1")
  }

}
