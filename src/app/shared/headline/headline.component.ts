import { TocService } from './../../services/toc/toc.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
  @Input() h: number;
  @Input() headline: string;
  @Input() id: number;
  @Input() number: string;
  @Input() type: string;

  constructor(private tocService:TocService) { }

  ngOnInit(): void {
    this.tocService.pushContent(this.h, this.headline, this.id, this.number, this.type);
  }
}
