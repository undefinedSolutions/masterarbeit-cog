import { Component } from '@angular/core';

@Component({
  selector: 'app-c5s2-ergebnisse-des-wms',
  templateUrl: './c5s2-ergebnisse-des-wms.component.html',
  styleUrls: ['./c5s2-ergebnisse-des-wms.component.scss']
})
export class C5s2ErgebnisseDesWMSComponent {

  dataWmsProjektion = {
    datasets: [
    {
      label: 'EPSG:3857',
      data: [0.759917, 0.081432, 1.231207, 1.290911],
      borderColor: 'rgba(165, 94, 234, 1.0)',
      borderWidth: 1,
      backgroundColor: 'rgba(165, 94, 234, 0.6)',
    },
    {
      label: 'EPSG:32632',
      data: [1.291376, 0.101128, 2.238029, 2.444998],
      borderColor: 'rgba(165, 94, 234, 1.0)',
      borderWidth: 1,
      backgroundColor: this.createDiagonalPattern('rgba(165, 94, 234, 1.0)'),
    }
  ],
    labels: ['z=0', 'z=1', 'z=2', 'z=3']
  }

  constructor() { }

  createDiagonalPattern(color = 'black') {
    let shape = document.createElement('canvas')
    shape.width = 10
    shape.height = 10
    var c = <CanvasRenderingContext2D> shape.getContext('2d')
    c.strokeStyle = color
    c.beginPath()
    c.moveTo(2, 0)
    c.lineTo(10, 8)
    c.stroke()
    c.beginPath()
    c.moveTo(0, 8)
    c.lineTo(2, 10)
    c.stroke()
    return c.createPattern(shape, 'repeat')
  }

}
