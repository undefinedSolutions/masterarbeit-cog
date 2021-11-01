import { Component, AfterViewInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

import { PagedJSService } from './../../services/pagedJS/paged-js.service';

@Component({
  selector: 'app-c1p1-tech-demo',
  templateUrl: './c1p1-tech-demo.component.html',
  styleUrls: ['./c1p1-tech-demo.component.scss']
})
export class C1p1TechDemoComponent implements AfterViewInit {

  constructor(private pagedJSService:PagedJSService) { }

  ngAfterViewInit(): void {
    this.pagedJSService.loaded.subscribe((state) => {
      if (state) {
        const test = document.querySelectorAll('#map')[1] as HTMLElement;
        new Map({
          layers: [
            new TileLayer({source: new OSM()})
          ],
          view: new View({
            center: [0, 0],
            zoom: 2
          }),
          target: test
        });
      }
    });
  }
}
