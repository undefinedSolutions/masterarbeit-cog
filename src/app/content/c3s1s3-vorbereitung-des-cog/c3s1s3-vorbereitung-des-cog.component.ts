import { AfterViewInit, Component } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c3s1s3-vorbereitung-des-cog',
  templateUrl: './c3s1s3-vorbereitung-des-cog.component.html',
  styleUrls: ['./c3s1s3-vorbereitung-des-cog.component.scss']
})
export class C3s1s3VorbereitungDesCOGComponent implements AfterViewInit {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Vergleich unterschiedlicher Komprimierungsmethoden für Datensatz ortho_lindenrain', "3-1")
  }

}