import { AfterViewInit, Component } from '@angular/core';

import { TablesService } from './../../services/tables/tables.service';

@Component({
  selector: 'app-c5-vorstellung-der-ergebnisse-und-diskussion',
  templateUrl: './c5-vorstellung-der-ergebnisse-und-diskussion.component.html',
  styleUrls: ['./c5-vorstellung-der-ergebnisse-und-diskussion.component.scss']
})
export class C5VorstellungDerErgebnisseUndDiskussionComponent implements AfterViewInit {

  // Chart ErzeugteDatenmenge
  dataFileSize = {
    labels: ["DSM Lindenrain", "DSM Strenzfeld", "Ortho Lindenrain", "Ortho Strenzfeld"],
    datasets:[
      {
        label: 'TMS',
        data: [0.0353, 0.0572, 5.1, 4.4],
        borderColor: 'rgba(38, 222, 129, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(38, 222, 129, 0.6)',
      },
      {
        label: 'WMS',
        data: [0.2952, 0.3929, 0.4939, 0.4002],
        borderColor: 'rgba(165, 94, 234, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(165, 94, 234, 0.6)',
      },
      {
        label: 'COG',
        data: [0.3007, 0.3988, 1.5, 1.1],
        borderColor: 'rgba(254, 211, 48, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(254, 211, 48, 0.6)',
      },
    ]
  };

  // Chart Dauer der Generierung (Notebook)
  dataGenerationTimeNotebook = {
    labels: ["DSM Lindenrain", "DSM Strenzfeld", "Ortho Lindenrain", "Ortho Strenzfeld"],
    datasets:[
      {
        label: 'TMS',
        data: [this.getSecounds('00:01:05'),this.getSecounds('00:01:18'),this.getSecounds('00:13:26'),this.getSecounds('00:17:30')],
        borderColor: 'rgba(38, 222, 129, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(38, 222, 129, 0.6)',
      },
      {
        label: 'WMS',
        data: [this.getSecounds('00:00:05'),this.getSecounds('00:00:06'),this.getSecounds('00:01:01'),this.getSecounds('00:03:20')],
        borderColor: 'rgba(165, 94, 234, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(165, 94, 234, 1.0)',
      },
      {
        label: 'COG',
        data: [this.getSecounds('00:00:08'),this.getSecounds('00:00:29'),this.getSecounds('00:04:28'),this.getSecounds('00:03:51')],
        borderColor: 'rgba(254, 211, 48, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(254, 211, 48, 0.6)',
      },
    ]
  };

  // Chart Dauer der Generierung (Workstation)
  dataGenerationTimeWorkstation = {
    labels: ["DSM Lindenrain", "DSM Strenzfeld", "Ortho Lindenrain", "Ortho Strenzfeld"],
    datasets:[
      {
        label: 'TMS',
        data: [this.getSecounds('00:00:48'), this.getSecounds('00:00:58'), this.getSecounds('00:10:05'), this.getSecounds('00:13:01')],
        borderColor: 'rgba(38, 222, 129, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(38, 222, 129, 0.6)',
      },
      {
        label: 'WMS',
        data: [this.getSecounds('00:00:04'),this.getSecounds('00:00:07'),this.getSecounds('00:01:17'),this.getSecounds('00:03:18')],
        borderColor: 'rgba(165, 94, 234, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(165, 94, 234, 0.6)',
      },
      {
        label: 'COG',
        data: [this.getSecounds('00:00:10'), this.getSecounds('00:01:00'), this.getSecounds('00:06:18'), this.getSecounds('00:05:28')],
        borderColor: 'rgba(254, 211, 48, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(254, 211, 48, 0.6)',
      },
    ]
  };

  // Chart networkTime
  dataUploadTime = {
    labels: ["DSM Lindenrain", "DSM Strenzfeld", "Ortho Lindenrain", "Ortho Strenzfeld"],
    datasets:[
      {
        label: 'TMS',
        data: [this.getSecounds("00:01:23"), this.getSecounds("00:01:42"), this.getSecounds("00:21:58"), this.getSecounds("00:21:44")],
        borderColor: 'rgba(38, 222, 129, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(38, 222, 129, 0.6)',
      },
      {
        label: 'WMS',
        data: [this.getSecounds('00:01:06'), this.getSecounds('00:01:26'), this.getSecounds('00:05:20'), this.getSecounds('00:04:00')],
        borderColor: 'rgba(165, 94, 234, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(165, 94, 234, 0.6)',
      },
      {
        label: 'COG',
        data: [this.getSecounds('00:01:07'), this.getSecounds('00:01:27'), this.getSecounds('00:01:48'), this.getSecounds('00:01:28')],
        borderColor: 'rgba(254, 211, 48, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(254, 211, 48, 0.6)',
      },
    ]
  };

  // Chart networkTime
  dataNetworkTime = {
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
        label: 'WMS',
        data: [1.24019725, 1.0028195, 1.07508225, 0.84086675],
        borderColor: 'rgba(165, 94, 234, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(165, 94, 234, 0.6)',
      },
      {
        label: 'WMTS',
        data: [0.33388975, 0.236629, 0.29136325, 0.2622295],
        borderColor: 'rgba(69, 170, 242, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(69, 170, 242, 0.6)',
      },
      {
        label: 'COG',
        data: [0.64912175, 0.73388525, 0.76816025, 0.504968],
        borderColor: 'rgba(254, 211, 48, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(254, 211, 48, 0.6)',
      },
    ]
  };

  // Chart networkSize
  dataNetworkSize = {
    labels: ["DSM Lindenrain", "DSM Strenzfeld", "Ortho Lindenrain", "Ortho Strenzfeld"],
    datasets:[
      {
        label: 'TMS',
        data: [0.5251975, 0.4778185, 3.371655, 2.61876625],
        borderColor: 'rgba(38, 222, 129, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(38, 222, 129, 0.6)',
      },
      {
        label: 'WMS',
        data: [0.14164325, 0.1628235, 2.04243025, 1.3648585],
        borderColor: 'rgba(165, 94, 234, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(165, 94, 234, 0.6)',
      },
      {
        label: 'WMTS',
        data: [0.24144825, 0.235983, 0.650574, 0.42946125],
        borderColor: 'rgba(69, 170, 242, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(69, 170, 242, 0.6)',
      },
      {
        label: 'COG',
        data: [5.0298915, 6.012931225, 1.99885265, 0.8519715],
        borderColor: 'rgba(254, 211, 48, 1.0)',
        borderWidth: 1,
        backgroundColor: 'rgba(254, 211, 48, 0.6)',
      },
    ]
  };

  constructor(private tablesService:TablesService) { }

  ngAfterViewInit(): void {
    this.tablesService.pushTable('Gewichtete Matrix mit einheits Faktor', "5-1")
  }

  getSecounds(hms: string): number {
    const a = hms.split(':')
    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
  }
}