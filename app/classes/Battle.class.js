"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
const BattlePlayer_class_1 = require("./BattlePlayer.class");
class Battle {
    constructor(playerTeam, playerName, npcTeam, npcName) {
        this.initTeams(playerTeam, playerName, npcTeam, npcName);
    }
    initTeams(playerTeam, playerName, npcTeam, npcName) {
        this.player = new BattlePlayer_class_1.BattlePlayer(playerName, "player", playerTeam);
        this.npc = new BattlePlayer_class_1.BattlePlayer(npcName, "npc", npcTeam);
    }
}
exports.Battle = Battle;
