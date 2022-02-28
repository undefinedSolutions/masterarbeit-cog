import { Component, OnInit } from '@angular/core';

import { FiguresService } from './../../services/figures/figures.service';

@Component({
  selector: 'app-c3s2s2s1-wmsim-geo-server',
  templateUrl: './c3s2s2s1-wmsim-geo-server.component.html',
  styleUrls: ['./c3s2s2s1-wmsim-geo-server.component.scss']
})
export class C3s2s2s1WMSImGeoServerComponent implements OnInit {

  constructor(private figuresService:FiguresService) { }

  ngOnInit(): void {
    this.figuresService.pushFigure('Oberflächenmodell, links ohne und rechts mit Stil', '3-11', 3.11);
  }
}