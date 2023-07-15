"use strict";
exports.__esModule = true;
exports.calculateDamage = void 0;
var attackUtils_1 = require("../battleUtils/attackUtils");
var calculateDamage = function (atkMon, attack, defMon) {
    var damageSplit = (0, attackUtils_1.getDmgSplit)(attack.type);
    var _a = damageSplit === "SPECIAL"
        ? [atkMon.stats.special, defMon.stats.special]
        : [atkMon.stats.attack, defMon.stats.defense], atkStat = _a[0], defStat = _a[1];
    var damage = Math.floor((((2 * atkMon.level) / 5 + 2) * attack.power * (atkStat / defStat)) / 50 + 2);
    if ((0, attackUtils_1.isThereSTAB)(atkMon.type, attack))
        damage = Math.floor(damage * 1.5);
    var typeMultiplier = (0, attackUtils_1.calcTypeMultiplier)(attack.type, defMon.type);
    damage = Math.floor(damage * typeMultiplier);
    // RNG calc goes here
    return damage;
};
exports.calculateDamage = calculateDamage;
