import { AfterViewInit, Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

import { FiguresService } from './../../services/figures/figures.service';
import { PagedJSService } from '../../services/pagedJS/paged-js.service';

@Component({
  selector: 'app-iframe-map',
  templateUrl: './iframe-map.component.html',
  styleUrls: ['./iframe-map.component.scss']
})
export class IframeMapComponent implements AfterViewInit, OnInit {
  @Input() caption: string;
  @Input() captionID: string;
  @Input() source: string;
  @Input() iframeID: string;
  @Input() iframeStyle: string = "height:250px;";
  @Input() iframeURL: string = "https://geoserver.masterarbeit-cog.de/wms/wms?service=WMS&version=1.1.0&request=GetMap&layers=wms%3Aortho_strenzfeld&bbox=1299642.3081%2C6765838.1484%2C1304883.3143%2C6769892.0275&width=586&height=300&srs=EPSG%3A3857&styles=&format=application/openlayers#toggle";


  @ViewChild('myIframe') myIframe: ElementRef;
  constructor(
    private figuresService:FiguresService,
    private pagedJSService:PagedJSService,
    ) {
  }
  loadIframe(): void {
    const test = <HTMLIFrameElement> document.getElementById(this.iframeID)  ;
    test.src = this.iframeURL;
  }

  ngOnInit(): void {
    if (this.captionID) {
      this.figuresService.pushFigure(this.caption, this.captionID);
    }
  }

  ngAfterViewInit(): void {
    this.pagedJSService.loaded.subscribe((state) => {
      if (state) {
        this.loadIframe();
      }
    });
  }

}
