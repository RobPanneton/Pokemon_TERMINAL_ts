"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.battleTurn = void 0;
const initAttack_1 = require("./initAttack");
const whoGoesFirst_1 = require("./whoGoesFirst");
const battleTurn = (playerMon, playerAttack, npcMon, npcAttack) => {
    // does not acknowledge priority of moves yet
    let [firstMon, firstAtk, secondMon, secondAtk] = (0, whoGoesFirst_1.whoGoesFirst)(playerMon, playerAttack, npcMon, npcAttack);
    // first attack
    console.log(`\n${firstMon.species} used ${firstAtk.name}!`);
    (0, initAttack_1.initAttack)(firstMon, firstAtk, secondMon);
    // second attack
    console.log(`\n${secondMon.species} used ${secondAtk.name}!`);
    (0, initAttack_1.initAttack)(secondMon, secondAtk, firstMon);
    return;
};
exports.battleTurn = battleTurn;
