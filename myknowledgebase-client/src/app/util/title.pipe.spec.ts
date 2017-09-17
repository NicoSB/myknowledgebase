import { TitlePipe } from './title.pipe';
import {Entry} from '../entries/entry/entry.model';

describe('TitlePipe', () => {
  it('filters array of entries', () => {
    // given
    const filter = 'git';
    const entry1 = new Entry(1, 'contains git', '', '', '', []);
    const entry2 = new Entry(1, 'does not contain g i t', '', '', '', []);
    const pipe = new TitlePipe();
    // when
    const entries = [entry1, entry2];
    const filtered = pipe.transform(entries, filter);
    // then
    expect(filtered.length).toBe(1);
    expect(filtered).toContain(entry1);
  });
});
