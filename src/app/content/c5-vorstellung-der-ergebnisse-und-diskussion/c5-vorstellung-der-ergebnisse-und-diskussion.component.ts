import { AfterViewInit, Component } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c5-vorstellung-der-ergebnisse-und-diskussion',
  templateUrl: './c5-vorstellung-der-ergebnisse-und-diskussion.component.html',
  styleUrls: ['./c5-vorstellung-der-ergebnisse-und-diskussion.component.scss']
})
export class C5VorstellungDerErgebnisseUndDiskussionComponent implements AfterViewInit {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Gewichtete Matrix mit einheits Faktor', "5-1")
  }
}