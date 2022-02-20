import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.scss']
})
export class CodeblockComponent implements AfterViewInit {
  @Input() code: string;
  codeLines: Array<string>

  keywords = [
    {
      word: 'new',
      class: 'cNew'
    },
    {
      word: 'TileLayer',
      class: 'cType'
    },
    {
      word: 'GeoTIFF',
      class: 'cType'
    }
  ]

  ngAfterViewInit(): void {
    this.codeLines = this.code.split('<').join('&lt;').split('\n')
    this.codeLines.forEach((line, index) => {
      let newLine = line
      this.keywords.forEach(key => {
        if (newLine.includes(key.word)) {
          console.log(line, key.word)
          newLine = newLine.split(key.word).join('<span class="'+key.class+'">'+key.word+'</span>')
        }
      })
      this.codeLines[index] = newLine
    });
  }
}
