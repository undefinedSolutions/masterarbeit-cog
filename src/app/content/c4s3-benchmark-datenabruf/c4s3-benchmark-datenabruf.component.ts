import { Component, OnInit } from '@angular/core';

import { FiguresService } from './../../services/figures/figures.service';

@Component({
  selector: 'app-c4s3-benchmark-datenabruf',
  templateUrl: './c4s3-benchmark-datenabruf.component.html',
  styleUrls: ['./c4s3-benchmark-datenabruf.component.scss']
})
export class C4s3BenchmarkDatenabrufComponent implements OnInit {

  constructor(private figuresService:FiguresService) { }

  ngOnInit(): void {
    this.figuresService.pushFigure('Veranschaulichung der genutzten Zoomstufen', '4-2', 4.2);
  }
}
