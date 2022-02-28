import { AfterViewInit, Component } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c6s1-zentrale-erkenntnisse',
  templateUrl: './c6s1-zentrale-erkenntnisse.component.html',
  styleUrls: ['./c6s1-zentrale-erkenntnisse.component.scss']
})
export class C6s1ZentraleErkenntnisseComponent implements AfterViewInit {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Gewichtete Matrix - Referenzprojekt eines Drohnenpiloten', "6-1")
    this.tablesService.pushTable('Gewichtete Matrix - Datenprovider', "6-2")
    this.tablesService.pushTable('Gewichtete Matrix - Tiefbau-Dokumentation', "6-3")
  }

}
