import {
  calcTypeMultiplier,
  getDmgSplit,
  isThereSTAB,
} from "../battleUtils/attackUtils";

export const calculateDamage = (atkMon, attack, defMon) => {
  const damageSplit = getDmgSplit(attack.type);
  const [atkStat, defStat] =
    damageSplit === "SPECIAL"
      ? [atkMon.stats.special, defMon.stats.special]
      : [atkMon.stats.attack, defMon.stats.defense];

  let damage: number = Math.floor(
    (((2 * atkMon.level) / 5 + 2) * attack.power * (atkStat / defStat)) / 50 + 2
  );

  if (isThereSTAB(atkMon.type, attack)) damage = Math.floor(damage * 1.5);

  const typeMultiplier: number = calcTypeMultiplier(attack.type, defMon.type);

  damage = Math.floor(damage * typeMultiplier);

  // RNG calc goes here

  return damage;
};
