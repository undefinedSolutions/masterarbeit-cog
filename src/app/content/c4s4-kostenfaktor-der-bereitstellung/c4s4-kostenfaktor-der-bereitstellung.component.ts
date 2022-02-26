import { AfterViewInit, Component } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c4s4-kostenfaktor-der-bereitstellung',
  templateUrl: './c4s4-kostenfaktor-der-bereitstellung.component.html',
  styleUrls: ['./c4s4-kostenfaktor-der-bereitstellung.component.scss']
})
export class C4s4KostenfaktorDerBereitstellungComponent implements AfterViewInit {

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Auflistung verschiedener EC2-Instanzen', "4-2")
  }
}