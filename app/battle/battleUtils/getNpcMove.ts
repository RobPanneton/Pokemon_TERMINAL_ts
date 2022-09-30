import { RNG } from "./RNG";

export const getNpcMove = (attacks) => {
  if (attacks.length === 1) return attacks[0];
  return attacks[RNG(1, 4) - 1];
};
