import { ShortenUrlPipe } from './shorten-url.pipe';

describe('ShortenUrlPipe', () => {
  it('removes prefixes from url (https://www.git-scm.com/entry)', () => {
    // given
    const pipe = new ShortenUrlPipe();
    const url = 'https://git-scm.com/entry';
    // when
    const transformedUrl = pipe.transform(url);
    // then
    expect(transformedUrl).toBe('git-scm.com');
  });

  it('shorten url with subdomains (https://sub.domain.git.com/entry)', () => {
    // given
    const pipe = new ShortenUrlPipe();
    const url = 'https://sub.domain.git.com/entry';
    // when
    const transformedUrl = pipe.transform(url);
    // then
    expect(transformedUrl).toBe('sub.domain.git.com');
  });

  it('throw EvalError when no url given', () => {
    // given
    const pipe = new ShortenUrlPipe();
    const url = 'ThatsANormalString';
    // then
    expect(() => {
      pipe.transform(url);
    }).toThrowError(url + ' is not an url!');
  });
});
