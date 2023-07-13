"use strict";
exports.__esModule = true;
exports.getNpcMove = void 0;
var RNG_1 = require("./RNG");
var getNpcMove = function (attacks) {
    if (attacks.length === 1)
        return attacks[0];
    return attacks[(0, RNG_1.RNG)(1, 4) - 1];
};
exports.getNpcMove = getNpcMove;
