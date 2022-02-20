import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AbbreviationComponent } from './shared/abbreviation/abbreviation.component';
import { AbbreviationsComponent } from './pages/list/abbreviations/abbreviations.component';
import { AffidavitComponent } from './pages/affidavit/affidavit.component';
import { AppComponent } from './app.component';
import { BibliographicDescriptionComponent } from './pages/bibliographic-description/bibliographic-description.component';
import { C1IntroductionComponent } from './content/c1-introduction/c1-introduction.component';
import { C9TechDemoComponent } from './content/c9-tech-demo/c9-tech-demo.component';
import { ContentComponent } from './content/content.component';
import { FigureComponent } from './shared/figure/figure.component';
import { FiguresComponent } from './pages/list/figures/figures.component';
import { TablesComponent } from './pages/list/tables/tables.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { TocComponent } from './pages/list/toc/toc.component';
import { HeadlineComponent } from './shared/headline/headline.component';
import { C2StandardsComponent } from './content/c2-standards/c2-standards.component';
import { C3DataProcessingComponent } from './content/c3-data-processing/c3-data-processing.component';
import { C4MethodologyComponent } from './content/c4-methodology/c4-methodology.component';
import { C5DiscussionComponent } from './content/c5-discussion/c5-discussion.component';
import { C6SummaryComponent } from './content/c6-summary/c6-summary.component';
import { QuoteComponent } from './shared/quote/quote.component';
import { BibliogaphyComponent } from './pages/list/bibliogaphy/bibliogaphy.component';
import { CodeblockComponent } from './shared/codeblock/codeblock.component';
import { ChartComponent } from './shared/chart/chart.component';

@NgModule({
  declarations: [
    AbbreviationComponent,
    AbbreviationsComponent,
    AffidavitComponent,
    AppComponent,
    BibliographicDescriptionComponent,
    C1IntroductionComponent,
    C9TechDemoComponent,
    ContentComponent,
    FigureComponent,
    FiguresComponent,
    TablesComponent,
    TitlePageComponent,
    TocComponent,
    HeadlineComponent,
    C2StandardsComponent,
    C3DataProcessingComponent,
    C4MethodologyComponent,
    C5DiscussionComponent,
    C6SummaryComponent,
    QuoteComponent,
    BibliogaphyComponent,
    CodeblockComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
