import { Component } from '@angular/core';

import { TablesService, InterfaceTable } from './../../../services/tables/tables.service';

@Component({
  selector: 'app-list-of-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  tables: InterfaceTable[];

  constructor(private tablesService:TablesService) {
    this.tablesService.data$
    .subscribe(data => {
      this.tables = data;
    })
  }
}
