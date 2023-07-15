import { BattlePokemonT } from "../../types/BattlePlayer.type";
import { initAttack } from "./initAttack";
import { whoGoesFirst } from "./whoGoesFirst";

export const battlePhase = (
  playerMon: BattlePokemonT,
  playerAttack,
  npcMon: BattlePokemonT,
  npcAttack
) => {
  // does not acknowledge priority of moves yet
  let [firstMon, firstAtk, secondMon, secondAtk] = whoGoesFirst(
    playerMon,
    playerAttack,
    npcMon,
    npcAttack
  );

  // first attack
  console.log(`\n${firstMon.species} used ${firstAtk.name}!`);
  initAttack(firstMon, firstAtk, secondMon);

  // end the turn if the defending pokemon fainted
  if (secondMon.health.hp <= 0) return;

  // second attack
  console.log(`\n${secondMon.species} used ${secondAtk.name}!`);
  initAttack(secondMon, secondAtk, firstMon);

  //handle faints -- keep going

  return;
};

export const winChecker = (team) => {
  return Object.keys(team).every((slot) => team[slot].fainted);
};
