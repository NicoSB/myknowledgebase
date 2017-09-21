import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StatisticsService {

  constructor(private http: HttpClient) { }

  observeGetAllTags(): Observable<String[]> {
    const tagsUrl = environment.apiUrl + '/statistics/tag';
    return this.http.get(tagsUrl);
  }

  observeGetEntryCount(): Observable<Number> {
    const entryCountUrl = environment.apiUrl + '/statistics/entry/count';
    return this.http.get(entryCountUrl);
  }

  observeGetTagCount(): Observable<Number> {
    const tagCountUrl = environment.apiUrl + '/statistics/tag/count';
    return this.http.get(tagCountUrl);
  }
}
