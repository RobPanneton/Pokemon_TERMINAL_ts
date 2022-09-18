export type SpeciesStats = {
  [id: string]: PokemonInfo;
};

type PokemonInfo = {
  id: string;
  species: string;
  type: {
    type1: string;
    type2: string | null;
  };
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special: number;
    speed: number;
  };
  attacks: string[];
};
