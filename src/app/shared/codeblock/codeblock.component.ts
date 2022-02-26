import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.scss']
})
export class CodeblockComponent implements AfterViewInit {
  @Input() code: string;
  @Input() lineNumbers: boolean = true;
  @Input() colorCode: boolean = false;
  codeLines: Array<string>

  keywords = [
    {
      word: 'new',
      class: 'cNew'
    },
    {
      word: 'const',
      class: 'cNew'
    },
    {
      word: 'TileLayer',
      class: 'cType'
    },
    {
      word: 'ImageWMS',
      class: 'cType'
    },
    {
      word: 'GeoTIFF',
      class: 'cType'
    },
    {
      word: 'ImageLayer',
      class: 'cType'
    },
    {
      word: ' wms ',
      class: 'cVariable'
    },
  ]

  ngAfterViewInit(): void {
    if (this.colorCode) {
      this.codeLines = this.code.split('<').join('&lt;').split('\n')
      this.codeLines.forEach((line, index) => {
        let newLine = line
        this.keywords.forEach(key => {
          if (newLine.includes(key.word)) {
            newLine = newLine.split(key.word).join('<span class="'+key.class+'">'+key.word+'</span>')
          }
        })
        this.codeLines[index] = newLine
      });
    } else {
      this.codeLines = this.code.split('<').join('&lt;').split('\n')
    }
  }
}
