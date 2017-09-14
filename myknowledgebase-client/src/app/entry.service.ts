import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Entry} from './entries/entry/entry.model';
import {Observable} from "rxjs/Observable";

@Injectable()
export class EntryService {

  constructor(private http: HttpClient) {
  }

  observeGetAllEntries(): Observable<Entry[]> {
    const entriesUrl = environment.apiUrl + '/entry';
    return this.http.get(entriesUrl);
  }

  observeGetEntry(id: Number): Observable<Entry> {
    const entryUrl = environment.apiUrl + '/entry/' + id;
    return this.http.get(entryUrl);
  }

  observeUpdateEntry(entry: Entry) {
    const entryUrl = environment.apiUrl + '/entry/' + entry.id;
    return this.http.put(entryUrl, entry);
  }

  observeDeleteEntry(id: Number) {
    const entryUrl = environment.apiUrl + '/entry/' + id;
    return this.http.delete(entryUrl);
  }
}
