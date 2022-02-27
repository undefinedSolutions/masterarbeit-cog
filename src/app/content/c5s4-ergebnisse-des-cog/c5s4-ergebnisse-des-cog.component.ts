import { Component } from '@angular/core';

@Component({
  selector: 'app-c5s4-ergebnisse-des-cog',
  templateUrl: './c5s4-ergebnisse-des-cog.component.html',
  styleUrls: ['./c5s4-ergebnisse-des-cog.component.scss']
})
export class C5s4ErgebnisseDesCOGComponent {

  dataCogTileSize = {
    datasets: [
    {
      label: '512px',
      data: [0.54679, 0.393272, 1.547008, 0.585571],
      borderColor: 'rgba(254, 211, 48, 1.0)',
      borderWidth: 1,
      backgroundColor: 'rgba(254, 211, 48, 0.6)',
    },
    {
      label: '256px',
      data: [1.206942, 0.334975, 4.528044, 1.96276],
      borderColor: 'rgba(254, 211, 48, 1.0)',
      borderWidth: 1,
      backgroundColor: this.createDiagonalPattern('rgba(254, 211, 48, 1.0)'),
    }
  ],
    labels: ['z=0', 'z=1', 'z=2', 'z=3']
  }

  dataCogWms = {
    labels: ["DSM Lindenrain", "DSM Strenzfeld", "Ortho Lindenrain", "Ortho Strenzfeld"],
    datasets:[
      {
        label: 'WMS',
        data: [1.24019725, 1.0028195, 1.07508225, 0.84086675],
        borderColor: 'rgba(165, 94, 234, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(165, 94, 234, 0.6)',
      },
      {
        label: 'COG',
        data: [0.64912175, 0.73388525, 0.76816025, 0.504968],
        borderColor: 'rgba(254, 211, 48, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(254, 211, 48, 0.6)',
      },
      {
        label: 'COG-WMS',
        data: [1.41979375, 1.40598575, 1.1302635, 0.8237915],
        borderColor: 'rgba(254, 211, 48, 1.0)',
        borderWidth: 1,
        backgroundColor: this.createDiagonalPattern('rgba(254, 211, 48, 0.6)'),
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
