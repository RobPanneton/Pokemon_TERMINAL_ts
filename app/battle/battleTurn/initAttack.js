"use strict";
exports.__esModule = true;
exports.initAttack = void 0;
var attackUtils_1 = require("../battleUtils/attackUtils");
var calculateDamage_1 = require("./calculateDamage");
var initAttack = function (atkMon, attack, defMon) {
    // do accuracy check first, and return with missed status if miss
    try {
        if ((attack === null || attack === void 0 ? void 0 : attack.power) > 0) {
            var damage = (0, calculateDamage_1.calculateDamage)(atkMon, attack, defMon);
            defMon.health.hp = (0, attackUtils_1.handleDamage)(defMon.health.hp, damage);
            console.log("".concat(defMon.species, " has ").concat(defMon.health.hp, "/").concat(defMon.health.maxHp, "HP.\n"));
            if (defMon.health.hp === 0)
                console.log("".concat(defMon.species, " fainted!\n"));
        }
    }
    catch (e) {
        console.log(e);
    }
    return;
};
exports.initAttack = initAttack;
