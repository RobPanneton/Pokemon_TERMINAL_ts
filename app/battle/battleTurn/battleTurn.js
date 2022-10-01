"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.battleTurn = void 0;
const whoGoesFirst_1 = require("./whoGoesFirst");
const battleTurn = (playerMon, playerAttack, npcMon, NpcAttack) => {
    // does not acknowledge priority of moves yet
    let [firstMon, secondMon] = (0, whoGoesFirst_1.whoGoesFirst)(playerMon, npcMon);
    console.log({ firstMon, secondMon });
    firstMon.health.hp = firstMon.health.hp - 100;
    console.log(npcMon);
    return;
};
exports.battleTurn = battleTurn;
