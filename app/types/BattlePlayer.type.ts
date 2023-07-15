import { PokemonInfo } from "./SpeciesStats.type";

export type BattlePlayerT = {
  name: string;
  type: string;
  team: BattleTeam;
};

export type BattleTeam = {
  slot_1: BattlePokemonT;
  slot_2: BattlePokemonT;
  slot_3: BattlePokemonT;
  slot_4: BattlePokemonT;
  slot_5: BattlePokemonT;
  slot_6: BattlePokemonT;
};

export type BattlePokemonT = PokemonInfo & {
  health: { hp: number; maxHp: number };
  level: number;
  fainted: boolean;
  slot: string;
  status?: any;
};
