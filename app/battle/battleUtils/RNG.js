"use strict";
exports.__esModule = true;
exports.RNG = void 0;
var RNG = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.RNG = RNG;
