import { removeLeadingZeros } from "../../utils/stringFormat";
import { POKEMON } from "../../stats/pokemon";

export const formatValidSpeciesInputs = () => {
  return Object.keys(POKEMON).reduce((acc, obj) => {
    if (POKEMON[obj].attacks.length === 0) return [...acc];
    return [...acc, obj, POKEMON[obj].id, removeLeadingZeros(POKEMON[obj].id)];
  }, []);
};

export const formatSpeciesOptionsString = () => {
  return Object.keys(POKEMON)
    .map((poke, index) => {
      if ((index + 1) % 4 === 0)
        return `${POKEMON[poke].id}) ${POKEMON[poke].species}\n\n`;
      return `${POKEMON[poke].id}) ${POKEMON[poke].species}   `;
    })
    .join("");
};
