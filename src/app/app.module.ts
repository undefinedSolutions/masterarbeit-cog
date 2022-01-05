import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AbbreviationComponent } from './shared/abbreviation/abbreviation.component';
import { AbbreviationsComponent } from './pages/list/abbreviations/abbreviations.component';
import { AffidavitComponent } from './pages/affidavit/affidavit.component';
import { AppComponent } from './app.component';
import { BibliographicDescriptionComponent } from './pages/bibliographic-description/bibliographic-description.component';
import { C1IntroductionComponent } from './content/c1-introduction/c1-introduction.component';
import { C1p1TechDemoComponent } from './content/c1p1-tech-demo/c1p1-tech-demo.component';
import { ContentComponent } from './content/content.component';
import { FigureComponent } from './shared/figure/figure.component';
import { FiguresComponent } from './pages/list/figures/figures.component';
import { TablesComponent } from './pages/list/tables/tables.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { TocComponent } from './pages/list/toc/toc.component';
import { HeadlineComponent } from './shared/headline/headline.component';

@NgModule({
  declarations: [
    AbbreviationComponent,
    AbbreviationsComponent,
    AffidavitComponent,
    AppComponent,
    BibliographicDescriptionComponent,
    C1IntroductionComponent,
    C1p1TechDemoComponent,
    ContentComponent,
    FigureComponent,
    FiguresComponent,
    TablesComponent,
    TitlePageComponent,
    TocComponent,
    HeadlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
