"use strict";
exports.__esModule = true;
exports.battlePhase = void 0;
var initAttack_1 = require("./initAttack");
var whoGoesFirst_1 = require("./whoGoesFirst");
var battlePhase = function (playerMon, playerAttack, npcMon, npcAttack) {
    // does not acknowledge priority of moves yet
    var _a = (0, whoGoesFirst_1.whoGoesFirst)(playerMon, playerAttack, npcMon, npcAttack), firstMon = _a[0], firstAtk = _a[1], secondMon = _a[2], secondAtk = _a[3];
    // first attack
    console.log("\n".concat(firstMon.species, " used ").concat(firstAtk.name, "!"));
    (0, initAttack_1.initAttack)(firstMon, firstAtk, secondMon);
    // end the turn if the defending pokemon fainted
    if (secondMon.health.hp <= 0)
        return;
    // second attack
    console.log("\n".concat(secondMon.species, " used ").concat(secondAtk.name, "!"));
    (0, initAttack_1.initAttack)(secondMon, secondAtk, firstMon);
    //handle faints -- keep going
    return;
};
exports.battlePhase = battlePhase;
