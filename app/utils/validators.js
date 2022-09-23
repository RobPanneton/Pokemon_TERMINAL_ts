"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnlyNumbers = void 0;
const isOnlyNumbers = (string) => {
    return /^[0-9]*$/.test(string);
};
exports.isOnlyNumbers = isOnlyNumbers;
