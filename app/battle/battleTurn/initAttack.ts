import { handleDamage } from "../battleUtils/attackUtils";
import { calculateDamage } from "./calculateDamage";

export const initAttack = (atkMon, attack, defMon) => {
  // do accuracy check first, and return with missed status if miss
  try {
    if (attack?.power > 0) {
      const damage = calculateDamage(atkMon, attack, defMon);
      defMon.health.hp = handleDamage(defMon.health.hp, damage);

      console.log(
        `${defMon.species} has ${defMon.health.hp}/${defMon.health.maxHp}HP.\n`
      );
      if (defMon.health.hp === 0) console.log(`${defMon.species} fainted!\n`);
    }
  } catch (e) {
    console.log(e);
  }

  return;
};
