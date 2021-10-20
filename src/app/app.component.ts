import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Previewer } from 'pagedjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content') content: ElementRef;
  @ViewChild('pdf') pdf: ElementRef;

  ngAfterViewInit(): void {
    const previewer = new Previewer();
    previewer
      .preview(
        this.content.nativeElement.innerHTML,
        ['/assets/pagedjs.css'],
        this.pdf.nativeElement
      )
      .then(flow => {
        console.log("preview rendered, total pages", flow.total, { flow });
      });
  }
}
