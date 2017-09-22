import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntriesComponent } from './entries/entries.component';
import { EntryEditComponent } from 'app/entries/entry-edit/entry-edit.component';
import {EntryDetailComponent} from './entries/entry-detail/entry-detail.component';
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: 'entry', component: EntriesComponent},
  {path: 'entry/new', component: EntryEditComponent},
  {path: 'entry/:id', component: EntryDetailComponent},
  {path: 'entry/:id/edit', component: EntryEditComponent},
  {path: 'oops', component: ErrorComponent},
  {path: '', component: EntriesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
