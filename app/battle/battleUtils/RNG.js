"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNG = void 0;
const RNG = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.RNG = RNG;
