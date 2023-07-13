"use strict";
exports.__esModule = true;
exports.isOnlyOneToFour = exports.isOnlyNumbers = void 0;
var isOnlyNumbers = function (string) {
    return /^[0-9]*$/.test(string);
};
exports.isOnlyNumbers = isOnlyNumbers;
var isOnlyOneToFour = function (string) {
    return /^[1-4]*$/.test(string);
};
exports.isOnlyOneToFour = isOnlyOneToFour;
