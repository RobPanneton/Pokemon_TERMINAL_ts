import { removeLeadingZeros } from "../../utils/stringFormat";

export const formatValidSpeciesInputs = (pokemonData) => {
  return Object.keys(pokemonData).reduce((acc, obj) => {
    if (pokemonData[obj].attacks.length === 0) return [...acc];
    return [
      ...acc,
      obj,
      pokemonData[obj].id,
      removeLeadingZeros(pokemonData[obj].id),
    ];
  }, []);
};

export const formatSpeciesOptionsString = (pokemonData) => {
  return Object.keys(pokemonData)
    .map((poke, index) => {
      if ((index + 1) % 4 === 0)
        return `${pokemonData[poke].id}) ${pokemonData[poke].species}\n\n`;
      return `${pokemonData[poke].id}) ${pokemonData[poke].species}   `;
    })
    .join("");
};
