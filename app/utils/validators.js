"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnlyOneToFour = exports.isOnlyNumbers = void 0;
const isOnlyNumbers = (string) => {
    return /^[0-9]*$/.test(string);
};
exports.isOnlyNumbers = isOnlyNumbers;
const isOnlyOneToFour = (string) => {
    return /^[1-4]*$/.test(string);
};
exports.isOnlyOneToFour = isOnlyOneToFour;
