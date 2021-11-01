import { FiguresService } from './../../services/figures/figures.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {
  @Input() id: number;
  @Input() src: string;
  @Input() caption: string;

  constructor(private figuresService:FiguresService) { }

  ngOnInit(): void {
    this.figuresService.pushFigure(this.caption, this.id);
  }
}
