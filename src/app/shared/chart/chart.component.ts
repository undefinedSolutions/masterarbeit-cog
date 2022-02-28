import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);


import { PagedJSService } from '../../services/pagedJS/paged-js.service';
import { FiguresService } from './../../services/figures/figures.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit, OnInit {
  _that = this;
  @Input() sort: number;
  @Input() id: string;
  @Input() source: string = "";
  @Input() suffix: string = "";
  @Input() suffixTooltip: string = "";
  @Input() prefix: string = " ";
  @Input() data: any;
  @Input() displayLegend: boolean = false;
  @Input() caption: string;
  @Input() captionID: string;
  @Input() format: string;
  @Input() yMax: number;
  @Input() setSize: number = 0;

  constructor(
    private pagedJSService:PagedJSService,
    private figuresService:FiguresService
  ) { }

  loadChart(): void {    
    const myChart = new Chart(this.id, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            max: this.yMax,
            beginAtZero: true,
            ticks: {

              stepSize: this.setSize,
              // Include a dollar sign in the ticks
              callback: (value, index, ticks) => {
                  return this.prefix + value + this.suffix;
              }
            }
          }
        },
      plugins: {
        legend: {
          display: this.displayLegend
        },
        tooltip: {
          callbacks: {
            label: (context) => {
                let label = context.dataset.label || '';

                 if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                  if (this.format === "round3") {
                    label += this.prefix + context.parsed.y.toFixed(3) + this.suffixTooltip;
                  } else if (this.format === "time") {
                    label += this.prefix + this.getHHMMSS(context.parsed.y) + this.suffixTooltip;
                  } else {
                    label += this.prefix + context.parsed.y + this.suffixTooltip;
                  }
                }
                return label;
            }
        }
        },
        title: {
            display: false,
            //text: this.title,
        }
      }
    }
    });
  }

  getHHMMSS(secounds: number): string {
    const zeroPad = (num, places) => String(num).padStart(places, '0')

    let tmpSec = secounds
    const h = Math.trunc(tmpSec / 60 / 60);
    tmpSec = tmpSec - h * 60 * 60
    const m = Math.trunc(tmpSec / 60 )
    tmpSec = tmpSec - m * 60

    return zeroPad(h, 2)+":"+zeroPad(m,2)+":"+zeroPad(tmpSec,2)
  }

  ngOnInit(): void {
    if (this.captionID) {
      this.figuresService.pushFigure(this.caption, this.captionID, this.sort);
    }
  }

  ngAfterViewInit(): void {
    this.pagedJSService.loaded.subscribe((state) => {
      if (state) {
        this.loadChart();
      }
    });
  }
}
