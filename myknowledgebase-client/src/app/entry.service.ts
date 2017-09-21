import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {environment} from '../environments/environment';
import {Entry} from './entries/entry/entry.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EntryService {

  constructor(private http: HttpClient) {
  }

  observeGetAllEntries(): Observable<Entry[]> {
    const entriesUrl = environment.apiUrl + '/entry';
    return this.http.get(entriesUrl);
  }

  observeGetEntriesByTags(tags: string[]): Observable<Entry[]> {
    const entriesUrl = environment.apiUrl + '/entry';
    const params = new HttpParams().set('tags', tags.toString());

    return this.http.get(entriesUrl, {
      params: params
    });
  }

  observeGetEntry(id: Number): Observable<Entry> {
    const entryUrl   = environment.apiUrl + '/entry/' + id;
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

  observeCreateEntry(entry: Entry): Observable<Entry> {
    const entriesUrl = environment.apiUrl + '/entry';
    return this.http.post(entriesUrl, entry);
  }
}
