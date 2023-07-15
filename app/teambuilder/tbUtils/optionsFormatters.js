"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.formatSpeciesOptionsString = exports.formatValidSpeciesInputs = void 0;
var stringFormat_1 = require("../../utils/stringFormat");
var pokemon_1 = require("../../stats/pokemon");
var formatValidSpeciesInputs = function () {
    return Object.keys(pokemon_1.POKEMON).reduce(function (acc, obj) {
        if (pokemon_1.POKEMON[obj].attacks.length === 0)
            return __spreadArray([], acc, true);
        return __spreadArray(__spreadArray([], acc, true), [obj, pokemon_1.POKEMON[obj].id, (0, stringFormat_1.removeLeadingZeros)(pokemon_1.POKEMON[obj].id)], false);
    }, []);
};
exports.formatValidSpeciesInputs = formatValidSpeciesInputs;
var formatSpeciesOptionsString = function () {
    return Object.keys(pokemon_1.POKEMON)
        .map(function (poke, index) {
        if ((index + 1) % 4 === 0)
            return "".concat(pokemon_1.POKEMON[poke].id, ") ").concat(pokemon_1.POKEMON[poke].species, "\n\n");
        return "".concat(pokemon_1.POKEMON[poke].id, ") ").concat(pokemon_1.POKEMON[poke].species, "   ");
    })
        .join("");
};
exports.formatSpeciesOptionsString = formatSpeciesOptionsString;
