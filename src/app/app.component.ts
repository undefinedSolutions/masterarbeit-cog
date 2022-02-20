import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Previewer } from 'pagedjs';

import { PagedJSService } from './services/pagedJS/paged-js.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content') content: ElementRef;
  @ViewChild('pdf') pdf: ElementRef;

  constructor(private pagedJSService:PagedJSService){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      // ToDo: needs to be dynamic afer all Parts are loaded
      const previewer = new Previewer();
      previewer
      .preview(
        this.content.nativeElement.innerHTML,
        ['/assets/pagedjs.css'],
        this.pdf.nativeElement
      )
      .then(flow => {
        this.content.nativeElement.innerHTML = '';
        this.pagedJSService.loaded.emit(true);
      });
    }, 1000);
    
  }
}
