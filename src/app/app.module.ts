import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { BibliographicDescriptionComponent } from './pages/bibliographic-description/bibliographic-description.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    BibliographicDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
