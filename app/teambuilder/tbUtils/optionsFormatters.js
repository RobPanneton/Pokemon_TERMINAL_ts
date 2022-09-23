"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSpeciesOptionsString = exports.formatValidSpeciesInputs = void 0;
const stringFormat_1 = require("../../utils/stringFormat");
const formatValidSpeciesInputs = (pokemonData) => {
    return Object.keys(pokemonData).reduce((acc, obj) => {
        if (pokemonData[obj].attacks.length === 0)
            return [...acc];
        return [
            ...acc,
            obj,
            pokemonData[obj].id,
            (0, stringFormat_1.removeLeadingZeros)(pokemonData[obj].id),
        ];
    }, []);
};
exports.formatValidSpeciesInputs = formatValidSpeciesInputs;
const formatSpeciesOptionsString = (pokemonData) => {
    return Object.keys(pokemonData)
        .map((poke, index) => {
        if ((index + 1) % 4 === 0)
            return `${pokemonData[poke].id}) ${pokemonData[poke].species}\n\n`;
        return `${pokemonData[poke].id}) ${pokemonData[poke].species}   `;
    })
        .join("");
};
exports.formatSpeciesOptionsString = formatSpeciesOptionsString;
