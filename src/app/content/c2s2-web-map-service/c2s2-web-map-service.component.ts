import { Component } from '@angular/core';

@Component({
  selector: 'app-c2s2-web-map-service',
  templateUrl: './c2s2-web-map-service.component.html',
  styleUrls: ['./c2s2-web-map-service.component.scss']
})
export class C2s2WebMapServiceComponent {
  additionVonLayernZurKartendarstellung = {
    id:"2-OpenGISImplementationSpecification-WMS-Image",
    author:"Open Geospatial Consortium",
    lastVisit:"25.02.2022",
    title:"Introduction to WMS",
    URL:"https://www.ogc.org/standards/wms/introduction"
  }
  constructor() { }

}
