import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { BibliographicDescriptionComponent } from './pages/bibliographic-description/bibliographic-description.component';
import { AffidavitComponent } from './pages/affidavit/affidavit.component';
import { FiguresComponent } from './pages/list/figures/figures.component';
import { TablesComponent } from './pages/list/tables/tables.component';
import { AbbreviationsComponent } from './pages/list/abbreviations/abbreviations.component';
import { ContentComponent } from './content/content.component';
import { C1IntroductionComponent } from './content/c1-introduction/c1-introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    BibliographicDescriptionComponent,
    AffidavitComponent,
    FiguresComponent,
    TablesComponent,
    AbbreviationsComponent,
    ContentComponent,
    C1IntroductionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
