import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntriesComponent } from './entries/entries.component';
import { EntryEditComponent } from 'app/entries/entry-edit/entry-edit.component';
import {EntryDetailComponent} from './entries/entry-detail/entry-detail.component';

const routes: Routes = [
  {path: 'entry', component: EntriesComponent},
  {path: 'entry/:id', component: EntryDetailComponent},
  {path: 'entry/:id/edit', component: EntryEditComponent},
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
