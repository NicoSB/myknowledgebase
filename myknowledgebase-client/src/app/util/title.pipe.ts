import { Pipe, PipeTransform } from '@angular/core';
import {Entry} from '../entries/entry/entry.model';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(entries: Entry[], filter: string): Entry[] {
    if (!entries || !filter) {
      return entries;
    }

    return entries.filter(
      entry => entry.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
