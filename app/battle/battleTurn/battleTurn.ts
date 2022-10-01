import { whoGoesFirst } from "./whoGoesFirst";

export const battleTurn = (playerMon, playerAttack, npcMon, NpcAttack) => {
  // does not acknowledge priority of moves yet
  let [firstMon, secondMon] = whoGoesFirst(playerMon, npcMon);

  return;
};
