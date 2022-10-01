"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAttack = void 0;
const attackUtils_1 = require("../battleUtils/attackUtils");
const initAttack = (atkMon, attack, defMon) => {
    // do accuracy check first, and return with missed status if miss
    console.log("trig atack start");
    try {
        if ((attack === null || attack === void 0 ? void 0 : attack.power) > 0) {
            const damageSplit = (0, attackUtils_1.getDmgSplit)(attack.type);
            const [atkStat, defStat] = damageSplit === "SPECIAL"
                ? [atkMon.stats.special, defMon.stats.special]
                : [atkMon.stats.attack, defMon.stats.defense];
            let damage = Math.floor((((2 * atkMon.level) / 5 + 2) * attack.power * (atkStat / defStat)) /
                50 +
                2);
            if ((0, attackUtils_1.isThereSTAB)(atkMon.type, attack))
                damage = Math.floor(damage * 1.5);
            const typeMultiplier = (0, attackUtils_1.calcTypeMultiplier)(attack.type, defMon.type);
            // damage = Math.floor(damage * typeMultiplier);
            console.log({ attack, typeMultiplier });
        }
    }
    catch (e) {
        console.log(e);
    }
    return;
};
exports.initAttack = initAttack;
