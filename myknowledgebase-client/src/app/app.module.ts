import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryService } from './entry.service';
import { EntryComponent } from './entries/entry/entry.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryEditComponent } from './entries/entry-edit/entry-edit.component';
import {AppRoutingModule} from './app-routing.module';
import { EntryDetailComponent } from './entries/entry-detail/entry-detail.component';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { HeaderComponent } from './header/header.component';
import { ShortenUrlPipe } from './util/shorten-url.pipe';
import { SearchComponent } from './search/search.component';
import { TitlePipe } from './util/title.pipe';
import { StatisticsComponent } from './statistics/statistics.component';
import { TagsComponent } from './statistics/tags/tags.component';
import {StatisticsService} from "./statistics.service";
import { GeneralStatisticsComponent } from './statistics/general-statistics/general-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryComponent,
    EntryEditComponent,
    EntryDetailComponent,
    HeaderComponent,
    ShortenUrlPipe,
    SearchComponent,
    TitlePipe,
    StatisticsComponent,
    TagsComponent,
    GeneralStatisticsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HighlightJsModule
  ],
  providers: [
    EntryService,
    StatisticsService,
    HighlightJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
