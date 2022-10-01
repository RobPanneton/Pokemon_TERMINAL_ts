import {
  calcTypeMultiplier,
  getDmgSplit,
  isThereSTAB,
} from "../battleUtils/attackUtils";

export const initAttack = (atkMon, attack, defMon) => {
  // do accuracy check first, and return with missed status if miss

  console.log("trig atack start");
  try {
    if (attack?.power > 0) {
      const damageSplit = getDmgSplit(attack.type);
      const [atkStat, defStat] =
        damageSplit === "SPECIAL"
          ? [atkMon.stats.special, defMon.stats.special]
          : [atkMon.stats.attack, defMon.stats.defense];

      let damage: number = Math.floor(
        (((2 * atkMon.level) / 5 + 2) * attack.power * (atkStat / defStat)) /
          50 +
          2
      );

      if (isThereSTAB(atkMon.type, attack)) damage = Math.floor(damage * 1.5);

      const typeMultiplier = calcTypeMultiplier(attack.type, defMon.type);

      // damage = Math.floor(damage * typeMultiplier);
      console.log({ attack, typeMultiplier });
    }
  } catch (e) {
    console.log(e);
  }

  return;
};
