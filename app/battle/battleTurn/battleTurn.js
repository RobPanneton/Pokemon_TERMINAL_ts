"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.battleTurn = void 0;
const whoGoesFirst_1 = require("./whoGoesFirst");
const battleTurn = (playerMon, playerAttack, npcMon, npcAttack) => {
    // does not acknowledge priority of moves yet
    let [firstMon, firstAtk, secondMon, secondAtk] = (0, whoGoesFirst_1.whoGoesFirst)(playerMon, playerAttack, npcMon, npcAttack);
    // first attack
    console.log(`\n${firstMon.species} used ${firstAtk.name}!`);
    console.log(`\n${secondMon.species} used ${secondAtk.name}!`);
    return;
};
exports.battleTurn = battleTurn;
