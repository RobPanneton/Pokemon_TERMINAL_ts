"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAttack = void 0;
const calculateDamage_1 = require("./calculateDamage");
const initAttack = (atkMon, attack, defMon) => {
    // do accuracy check first, and return with missed status if miss
    try {
        if ((attack === null || attack === void 0 ? void 0 : attack.power) > 0) {
            const damage = (0, calculateDamage_1.calculateDamage)(atkMon, attack, defMon);
            defMon.health.hp =
                defMon.health.hp - damage > 0 ? defMon.health.hp - damage : 0;
            console.log(`${defMon.species} has ${defMon.health.hp}/${defMon.health.maxHp}HP.\n`);
            if (defMon.health.hp === 0)
                console.log(`${defMon.species} fainted!\n`);
        }
    }
    catch (e) {
        console.log(e);
    }
    return;
};
exports.initAttack = initAttack;
