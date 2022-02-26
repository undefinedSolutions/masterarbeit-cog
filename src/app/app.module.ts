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
import { C1s3SzenarienComponent } from './content/c1s3-szenarien/c1s3-szenarien.component';
import { C1s3s1AnzeigenEinesOrthomosaikComponent } from './content/c1s3s1-anzeigen-eines-orthomosaik/c1s3s1-anzeigen-eines-orthomosaik.component';
import { C1s3s2VisualisierungEinesOberflaechenmodellsComponent } from './content/c1s3s2-visualisierung-eines-oberflaechenmodells/c1s3s2-visualisierung-eines-oberflaechenmodells.component';
import { C2s3WebMapTileServiceComponent } from './content/c2s3-web-map-tile-service/c2s3-web-map-tile-service.component';
import { C2s4CloudOptimizedGeoTIFFComponent } from './content/c2s4-cloud-optimized-geo-tiff/c2s4-cloud-optimized-geo-tiff.component';
import { C3DatenverarbeitungUndBereitstellungComponent } from './content/c3-datenverarbeitung-und-bereitstellung/c3-datenverarbeitung-und-bereitstellung.component';
import { C3s1VorbereitungDerDatensaetzeInDenJeweiligenStandardsComponent } from './content/c3s1-vorbereitung-der-datensaetze-in-den-jeweiligen-standards/c3s1-vorbereitung-der-datensaetze-in-den-jeweiligen-standards.component';
import { C3s1s1VorbereitungDesTMSComponent } from './content/c3s1s1-vorbereitung-des-tms/c3s1s1-vorbereitung-des-tms.component';
import { C3s1s2VorbereitungDesWMSUndWMTSComponent } from './content/c3s1s2-vorbereitung-des-wmsund-wmts/c3s1s2-vorbereitung-des-wmsund-wmts.component';
import { C3s1s3VorbereitungDesCOGComponent } from './content/c3s1s3-vorbereitung-des-cog/c3s1s3-vorbereitung-des-cog.component';
import { C3s2BereitstellungDerDatensaetzeInDenJeweiligenStandardsComponent } from './content/c3s2-bereitstellung-der-datensaetze-in-den-jeweiligen-standards/c3s2-bereitstellung-der-datensaetze-in-den-jeweiligen-standards.component';
import { C3s2s1BereitstellungDurchAWSS3Component } from './content/c3s2s1-bereitstellung-durch-awss3/c3s2s1-bereitstellung-durch-awss3.component';
import { C3s2s1s1TMSInAWSS3Component } from './content/c3s2s1s1-tmsin-awss3/c3s2s1s1-tmsin-awss3.component';
import { C3s2s1s2COGInAWSS3Component } from './content/c3s2s1s2-cogin-awss3/c3s2s1s2-cogin-awss3.component';
import { C3s2s2BereitstellungDurchGeoServerComponent } from './content/c3s2s2-bereitstellung-durch-geo-server/c3s2s2-bereitstellung-durch-geo-server.component';
import { C3s2s2s1WMSImGeoServerComponent } from './content/c3s2s2s1-wmsim-geo-server/c3s2s2s1-wmsim-geo-server.component';
import { IframeMapComponent } from './shared/iframe-map/iframe-map.component';
import { C3s2s2s2WMTSImGeoServerComponent } from './content/c3s2s2s2-wmtsim-geo-server/c3s2s2s2-wmtsim-geo-server.component';
import { C3s3NutzungDerDatensaetzeInDenJeweiligenStandardsComponent } from './content/c3s3-nutzung-der-datensaetze-in-den-jeweiligen-standards/c3s3-nutzung-der-datensaetze-in-den-jeweiligen-standards.component';
import { C3s3s1NutzungDesTMSComponent } from './content/c3s3s1-nutzung-des-tms/c3s3s1-nutzung-des-tms.component';
import { C3s3s2NutzungDesWMSComponent } from './content/c3s3s2-nutzung-des-wms/c3s3s2-nutzung-des-wms.component';
import { C3s3s3NutzungDesWMTSComponent } from './content/c3s3s3-nutzung-des-wmts/c3s3s3-nutzung-des-wmts.component';
import { C3s3s4NutzungDesCOGComponent } from './content/c3s3s4-nutzung-des-cog/c3s3s4-nutzung-des-cog.component';
import { C4MethodikComponent } from './content/c4-methodik/c4-methodik.component';
import { C4s1BenchmarkDatenaufarbeitungComponent } from './content/c4s1-benchmark-datenaufarbeitung/c4s1-benchmark-datenaufarbeitung.component';
import { C4s2BenchmarkDatenbereitstellungComponent } from './content/c4s2-benchmark-datenbereitstellung/c4s2-benchmark-datenbereitstellung.component';
import { C4s3BenchmarkDatenabrufComponent } from './content/c4s3-benchmark-datenabruf/c4s3-benchmark-datenabruf.component';
import { C4s4KostenfaktorDerBereitstellungComponent } from './content/c4s4-kostenfaktor-der-bereitstellung/c4s4-kostenfaktor-der-bereitstellung.component';
import { C4s5GewichteteMatrixComponent } from './content/c4s5-gewichtete-matrix/c4s5-gewichtete-matrix.component';
import { C5VorstellungDerErgebnisseUndDiskussionComponent } from './content/c5-vorstellung-der-ergebnisse-und-diskussion/c5-vorstellung-der-ergebnisse-und-diskussion.component';
import { C5s1ErgebnisseDesTMSComponent } from './content/c5s1-ergebnisse-des-tms/c5s1-ergebnisse-des-tms.component';
import { C5s2ErgebnisseDesWMSComponent } from './content/c5s2-ergebnisse-des-wms/c5s2-ergebnisse-des-wms.component';
import { C5s3ErgebnisseDesWMTSComponent } from './content/c5s3-ergebnisse-des-wmts/c5s3-ergebnisse-des-wmts.component';
import { C5s4ErgebnisseDesCOGComponent } from './content/c5s4-ergebnisse-des-cog/c5s4-ergebnisse-des-cog.component';

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
    C1s3SzenarienComponent,
    C1s3s1AnzeigenEinesOrthomosaikComponent,
    C1s3s2VisualisierungEinesOberflaechenmodellsComponent,
    C2s3WebMapTileServiceComponent,
    C2s4CloudOptimizedGeoTIFFComponent,
    C3DatenverarbeitungUndBereitstellungComponent,
    C3s1VorbereitungDerDatensaetzeInDenJeweiligenStandardsComponent,
    C3s1s1VorbereitungDesTMSComponent,
    C3s1s2VorbereitungDesWMSUndWMTSComponent,
    C3s1s3VorbereitungDesCOGComponent,
    C3s2BereitstellungDerDatensaetzeInDenJeweiligenStandardsComponent,
    C3s2s1BereitstellungDurchAWSS3Component,
    C3s2s1s1TMSInAWSS3Component,
    C3s2s1s2COGInAWSS3Component,
    C3s2s2BereitstellungDurchGeoServerComponent,
    C3s2s2s1WMSImGeoServerComponent,
    IframeMapComponent,
    C3s2s2s2WMTSImGeoServerComponent,
    C3s3NutzungDerDatensaetzeInDenJeweiligenStandardsComponent,
    C3s3s1NutzungDesTMSComponent,
    C3s3s2NutzungDesWMSComponent,
    C3s3s3NutzungDesWMTSComponent,
    C3s3s4NutzungDesCOGComponent,
    C4MethodikComponent,
    C4s1BenchmarkDatenaufarbeitungComponent,
    C4s2BenchmarkDatenbereitstellungComponent,
    C4s3BenchmarkDatenabrufComponent,
    C4s4KostenfaktorDerBereitstellungComponent,
    C4s5GewichteteMatrixComponent,
    C5VorstellungDerErgebnisseUndDiskussionComponent,
    C5s1ErgebnisseDesTMSComponent,
    C5s2ErgebnisseDesWMSComponent,
    C5s3ErgebnisseDesWMTSComponent,
    C5s4ErgebnisseDesCOGComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
