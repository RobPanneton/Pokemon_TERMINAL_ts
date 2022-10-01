import { whoGoesFirst } from "./whoGoesFirst";

export const battleTurn = (playerMon, playerAttack, npcMon, npcAttack) => {
  // does not acknowledge priority of moves yet
  let [firstMon, firstAtk, secondMon, secondAtk] = whoGoesFirst(
    playerMon,
    playerAttack,
    npcMon,
    npcAttack
  );

  // first attack
  console.log(`\n${firstMon.species} used ${firstAtk.name}!`);
  console.log(`\n${secondMon.species} used ${secondAtk.name}!`);

  return;
};
