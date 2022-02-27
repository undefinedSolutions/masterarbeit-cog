import { Component } from '@angular/core';

@Component({
  selector: 'app-c5s1-ergebnisse-des-tms',
  templateUrl: './c5s1-ergebnisse-des-tms.component.html',
  styleUrls: ['./c5s1-ergebnisse-des-tms.component.scss']
})
export class C5s1ErgebnisseDesTMSComponent {

  dataTmsCompareMulti = {
    datasets: [
    {
      label: 'normaler TMS',
      data: [this.getSecounds('00:10:05'), this.getSecounds('00:13:26')],
      borderColor: 'rgba(38, 222, 129, 1.0)',
      borderWidth: 1,
      backgroundColor: 'rgba(38, 222, 129, 0.6)',
    },
    {
      label: 'paraleller TMS',
      data: [this.getSecounds('00:04:04'), this.getSecounds('00:10:48')],
      borderColor: 'rgba(38, 222, 129, 1.0)',
      borderWidth: 1,
      backgroundColor: this.createDiagonalPattern('rgba(38, 222, 129, 1.0)'),
    }
  ],
    labels: ['Workstation', 'Notebook']
  }

  dataTmsSize = {
    datasets: [{
      type: 'line',
      data: [0.000334, 0.000334, 0.000334, 0.000341, 0.000341, 0.000342, 0.000353, 0.000361, 0.000402, 0.000478, 0.000635, 0.0011, 0.0024, 0.0065, 0.0218, 0.0715, 0.257, 0.9668, 3.8, 15.2, 63.6, 271.7, 1111.7, 4047.4],
      borderColor: 'rgba(38, 222, 129, 1.0)',
    }],
    labels: ['z0', 'z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8', 'z9', 'z10', 'z11', 'z12', 'z13', 'z14', 'z15', 'z16', 'z17', 'z18', 'z19', 'z20', 'z21', 'z22', 'z23']
  }

  dataTmsTileNumber = {
    datasets: [{
        type: 'line',
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 9, 20, 54, 187, 726, 2730, 10920, 42828],
        borderColor: 'rgba(38, 222, 129, 1.0)',
    }],
    labels: ['z0', 'z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8', 'z9', 'z10', 'z11', 'z12', 'z13', 'z14', 'z15', 'z16', 'z17', 'z18', 'z19', 'z20', 'z21', 'z22', 'z23']
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

  getSecounds(hms: string): number {
    const a = hms.split(':')
    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
  }

}
