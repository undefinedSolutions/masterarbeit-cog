import { Component, AfterViewInit, Input } from '@angular/core';
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


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  _that = this;
  @Input() id: string;
  @Input() labels: string[];
  @Input() suffix: string = "";
  @Input() prefix: string = " ";
  @Input() datasets: any;
  @Input() title: string;
  constructor(private pagedJSService:PagedJSService) { }

  loadChart(): void {
    const myChart = new Chart(this.id, {
      type: 'bar',
      data: {
          labels: this.labels,
          datasets: [this.datasets]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {

              stepSize: 0.5,
              // Include a dollar sign in the ticks
              callback: (value, index, ticks) => {
                  return this.prefix + value + this.suffix;
              }
            }
          }
        },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => {
                let label = context.dataset.label || '';

                 if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += this.prefix + context.parsed.y.toFixed(3) + this.suffix;
                }
                return label;
            }
        }
        },
        title: {
            display: true,
            text: this.title,
        }
      }
    }
    });
  }

  ngAfterViewInit(): void {
    this.pagedJSService.loaded.subscribe((state) => {
      if (state) {
        this.loadChart();
      }
    });
  }
}
