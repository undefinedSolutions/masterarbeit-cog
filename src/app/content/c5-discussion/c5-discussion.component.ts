import { Component } from '@angular/core';

@Component({
  selector: 'app-c5-discussion',
  templateUrl: './c5-discussion.component.html',
  styleUrls: ['./c5-discussion.component.scss']
})
export class C5DiscussionComponent {
  labels = ['COG', 'COG-WMS', 'TMS', 'WMS', 'WMTS', 'WMTS-TMS'];
  datasetsNetworkTime = {
    data: [1.548879438, 2.986561375, 0.9614711875, 2.161292813, 0.9163114375, 1.66],
    backgroundColor: [
      'rgba(254, 211, 48, 0.6)',
      'rgba(253, 150, 68, 0.6)',
      'rgba(38, 222, 129, 0.6)',
      'rgba(165, 94, 234, 0.6)',
      'rgba(69, 170, 242, 0.6)',
      'rgba(75, 123, 236, 0.6)'
    ],
    borderColor: [
      'rgba(254, 211, 48, 1.0)',
      'rgba(253, 150, 68, 1.0)',
      'rgba(38, 222, 129, 1.0)',
      'rgba(165, 94, 234, 1.0)',
      'rgba(69, 170, 242, 1.0)',
      'rgba(75, 123, 236, 1.0)'
    ],
    borderWidth: 2
  }
  // new Dataset
  datasetDatenMenge = {
    data: [3.649546619, 3.618219563, 3.105572563, 2.835371625, 1.472526313, 1.66],
    backgroundColor: [
      'rgba(254, 211, 48, 0.6)',
      'rgba(253, 150, 68, 0.6)',
      'rgba(38, 222, 129, 0.6)',
      'rgba(165, 94, 234, 0.6)',
      'rgba(69, 170, 242, 0.6)',
      'rgba(75, 123, 236, 0.6)'
    ],
    borderColor: [
      'rgba(254, 211, 48, 1.0)',
      'rgba(253, 150, 68, 1.0)',
      'rgba(38, 222, 129, 1.0)',
      'rgba(165, 94, 234, 1.0)',
      'rgba(69, 170, 242, 1.0)',
      'rgba(75, 123, 236, 1.0)'
    ],
    borderWidth: 2
  }

  constructor() { }
}
