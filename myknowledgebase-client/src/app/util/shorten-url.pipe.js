"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ShortenUrlPipe = (function () {
    function ShortenUrlPipe() {
    }
    ShortenUrlPipe.prototype.transform = function (value) {
        var lowered = value.toLowerCase();
        var prefixRemoved = lowered.replace(/https?:\/\//, '').replace('www.', '');
        var matchedUrls = prefixRemoved.match(/([\w-]+\.)+[a-z]+/);
        if (!matchedUrls) {
            throw new Error(value + ' is not an url!');
        }
        return matchedUrls[0];
    };
    return ShortenUrlPipe;
}());
ShortenUrlPipe = __decorate([
    core_1.Pipe({
        name: 'urlShorten'
    })
], ShortenUrlPipe);
exports.ShortenUrlPipe = ShortenUrlPipe;
