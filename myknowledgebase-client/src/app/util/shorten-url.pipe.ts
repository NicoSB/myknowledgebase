import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenUrl'
})
export class ShortenUrlPipe implements PipeTransform {

  transform(value: string): string {

    const lowered = value.toLowerCase();
    const prefixRemoved = lowered.replace(/https?:\/\//, '').replace('www.', '');

    const matchedUrls = prefixRemoved.match(/([\w-]+\.)+[a-z]+/);

    if (!matchedUrls) {
      throw new Error(value + ' is not an url!');
    }

    return matchedUrls[0];
  }

}
