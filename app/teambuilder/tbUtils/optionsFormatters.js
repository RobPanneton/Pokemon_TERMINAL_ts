"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSpeciesOptionsString = exports.formatValidSpeciesInputs = void 0;
const stringFormat_1 = require("../../utils/stringFormat");
const pokemon_1 = require("../../stats/pokemon");
const formatValidSpeciesInputs = () => {
    return Object.keys(pokemon_1.POKEMON).reduce((acc, obj) => {
        if (pokemon_1.POKEMON[obj].attacks.length === 0)
            return [...acc];
        return [...acc, obj, pokemon_1.POKEMON[obj].id, (0, stringFormat_1.removeLeadingZeros)(pokemon_1.POKEMON[obj].id)];
    }, []);
};
exports.formatValidSpeciesInputs = formatValidSpeciesInputs;
const formatSpeciesOptionsString = () => {
    return Object.keys(pokemon_1.POKEMON)
        .map((poke, index) => {
        if ((index + 1) % 4 === 0)
            return `${pokemon_1.POKEMON[poke].id}) ${pokemon_1.POKEMON[poke].species}\n\n`;
        return `${pokemon_1.POKEMON[poke].id}) ${pokemon_1.POKEMON[poke].species}   `;
    })
        .join("");
};
exports.formatSpeciesOptionsString = formatSpeciesOptionsString;
