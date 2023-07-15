export type SpeciesStats = {
  [id: string]: PokemonInfo;
};

export type PokemonInfo = {
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
