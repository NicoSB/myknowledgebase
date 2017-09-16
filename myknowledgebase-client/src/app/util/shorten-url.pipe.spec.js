"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shorten_url_pipe_1 = require("./shorten-url.pipe");
describe('ShortenUrlPipe', function () {
    it('removes prefixes from url (https://www.git-scm.com/entry)', function () {
        // given
        var pipe = new shorten_url_pipe_1.ShortenUrlPipe();
        var url = 'https://git-scm.com/entry';
        // when
        var transformedUrl = pipe.transform(url);
        // then
        expect(transformedUrl).toBe('git-scm.com');
    });
    it('shorten url with subdomains (https://sub.domain.git.com/entry)', function () {
        // given
        var pipe = new shorten_url_pipe_1.ShortenUrlPipe();
        var url = 'https://sub.domain.git.com/entry';
        // when
        var transformedUrl = pipe.transform(url);
        // then
        expect(transformedUrl).toBe('sub.domain.git.com');
    });
    it('throw EvalError when no url given', function () {
        // given
        var pipe = new shorten_url_pipe_1.ShortenUrlPipe();
        var url = 'ThatsANormalString';
        // then
        expect(function () {
            pipe.transform(url);
        }).toThrowError(url + ' is not an url!');
    });
});
