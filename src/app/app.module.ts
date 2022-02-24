import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AbbreviationComponent } from './shared/abbreviation/abbreviation.component';
import { AbbreviationsComponent } from './pages/list/abbreviations/abbreviations.component';
import { AffidavitComponent } from './pages/affidavit/affidavit.component';
import { AppComponent } from './app.component';
import { BibliographicDescriptionComponent } from './pages/bibliographic-description/bibliographic-description.component';
import { ContentComponent } from './content/content.component';
import { FigureComponent } from './shared/figure/figure.component';
import { FiguresComponent } from './pages/list/figures/figures.component';
import { TablesComponent } from './pages/list/tables/tables.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { TocComponent } from './pages/list/toc/toc.component';
import { HeadlineComponent } from './shared/headline/headline.component';
import { QuoteComponent } from './shared/quote/quote.component';
import { BibliogaphyComponent } from './pages/list/bibliogaphy/bibliogaphy.component';
import { CodeblockComponent } from './shared/codeblock/codeblock.component';
import { ChartComponent } from './shared/chart/chart.component';
import { C2StandardsComponent } from './content/c2-standards/c2-standards.component';
import { C2s1TileMatrixSetComponent } from './content/c2s1-tile-matrix-set/c2s1-tile-matrix-set.component';
import { C2s2WebMapServiceComponent } from './content/c2s2-web-map-service/c2s2-web-map-service.component';

@NgModule({
  declarations: [
    AbbreviationComponent,
    AbbreviationsComponent,
    AffidavitComponent,
    AppComponent,
    BibliographicDescriptionComponent,
    ContentComponent,
    FigureComponent,
    FiguresComponent,
    TablesComponent,
    TitlePageComponent,
    TocComponent,
    HeadlineComponent,
    QuoteComponent,
    BibliogaphyComponent,
    CodeblockComponent,
    ChartComponent,
    C2StandardsComponent,
    C2s1TileMatrixSetComponent,
    C2s2WebMapServiceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
