"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDamage = void 0;
const attackUtils_1 = require("../battleUtils/attackUtils");
const calculateDamage = (atkMon, attack, defMon) => {
    const damageSplit = (0, attackUtils_1.getDmgSplit)(attack.type);
    const [atkStat, defStat] = damageSplit === "SPECIAL"
        ? [atkMon.stats.special, defMon.stats.special]
        : [atkMon.stats.attack, defMon.stats.defense];
    let damage = Math.floor((((2 * atkMon.level) / 5 + 2) * attack.power * (atkStat / defStat)) / 50 + 2);
    if ((0, attackUtils_1.isThereSTAB)(atkMon.type, attack))
        damage = Math.floor(damage * 1.5);
    const typeMultiplier = (0, attackUtils_1.calcTypeMultiplier)(attack.type, defMon.type);
    damage = Math.floor(damage * typeMultiplier);
    // RNG calc goes here
    return damage;
};
exports.calculateDamage = calculateDamage;
