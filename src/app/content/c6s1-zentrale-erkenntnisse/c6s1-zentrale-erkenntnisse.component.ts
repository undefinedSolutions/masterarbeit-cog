import { AfterViewInit, Component } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c6s1-zentrale-erkenntnisse',
  templateUrl: './c6s1-zentrale-erkenntnisse.component.html',
  styleUrls: ['./c6s1-zentrale-erkenntnisse.component.scss']
})
export class C6s1ZentraleErkenntnisseComponent {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('ToDO', "6-1")
    this.tablesService.pushTable('ToDO', "6-2")
    this.tablesService.pushTable('ToDO', "6-3")
  }

}
