"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNpcMove = void 0;
const RNG_1 = require("./RNG");
const getNpcMove = (attacks) => {
    if (attacks.length === 1)
        return attacks[0];
    return attacks[(0, RNG_1.RNG)(1, 4) - 1];
};
exports.getNpcMove = getNpcMove;
