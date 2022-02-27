import { Component } from '@angular/core';

@Component({
  selector: 'app-c5s3-ergebnisse-des-wmts',
  templateUrl: './c5s3-ergebnisse-des-wmts.component.html',
  styleUrls: ['./c5s3-ergebnisse-des-wmts.component.scss']
})
export class C5s3ErgebnisseDesWMTSComponent {

  dataWmtsNoCache = {
    datasets: [
    {
      label: 'Mit Cache',
      data: [0.577759, 0.054784, 0.241457, 0.291453],
      borderColor: 'rgba(69, 170, 242, 1.0)',
      borderWidth: 1,
      backgroundColor: 'rgba(69, 170, 242, 0.6)',
    },
    {
      label: 'Ohne Cache',
      data: [2.125934, 0.128651, 3.009101, 3.696383],
      borderColor: 'rgba(69, 170, 242, 1.0)',
      borderWidth: 1,
      backgroundColor: this.createDiagonalPattern('rgba(69, 170, 242, 1.0)'),
    }
  ],
    labels: ['z=0', 'z=1', 'z=2', 'z=3']
  }

  dataWmtsPNG = {
    datasets: [
    {
      label: 'image/vnd.jpeg-png',
      data: [11.240675, 2.0916, 6.675322, 39.14774],
      borderColor: 'rgba(69, 170, 242, 1.0)',
      borderWidth: 1,
      backgroundColor: 'rgba(69, 170, 242, 0.6)',
    },
    {
      label: 'image/png',
      data: [16.703245, 3.4977, 10.876369, 61.849464],
      borderColor: 'rgba(69, 170, 242, 1.0)',
      borderWidth: 1,
      backgroundColor: this.createDiagonalPattern('rgba(69, 170, 242, 1.0)'),
    }
  ],
    labels: ['z=0', 'z=1', 'z=2', 'z=3']
  }

  datawmtsNetworkTime = {
    labels: ["DSM Lindenrain", "DSM Strenzfeld", "Ortho Lindenrain", "Ortho Strenzfeld"],
    datasets:[
      {
        label: 'TMS',
        data: [0.24819, 0.24948375, 0.38686475, 0.3063105],
        borderColor: 'rgba(38, 222, 129, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(38, 222, 129, 0.6)',
      },
      {
        label: 'WMTS',
        data: [0.33388975, 0.236629, 0.29136325, 0.2622295],
        borderColor: 'rgba(69, 170, 242, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(69, 170, 242, 0.6)',
      },
      {
        label: 'WMTS-TMS',
        data: [0.24636275, 0.24732625, 0.261268, 0.244877],
        borderColor: 'rgba(69, 170, 242, 1.0)',
        borderWidth: 1,
        backgroundColor: this.createDiagonalPattern('rgba(69, 170, 242, 0.6)'),
      },
    ]
  };

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
