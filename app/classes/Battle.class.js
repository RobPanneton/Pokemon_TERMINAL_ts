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
        // try {
        //   this.player.name = playerName;
        //   this.player.type = "player";
        //   this.player.team = this.mapNewTeam(playerTeam);
        //   this.npc.name = npcName;
        //   this.npc.type = "npc";
        //   this.npc.team = this.mapNewTeam(npcTeam);
        // } catch (e) {
        //   console.log(e);
        // }
        // return;
    }
    mapNewTeam(team) {
        return Object.keys(team).reduce((acc, slot) => {
            return Object.assign(Object.assign({}, acc), { [slot]: Object.assign(Object.assign({}, team[slot]), { health: {
                        hp: team[slot].stats.hp,
                        maxHp: team[slot].stats.hp,
                    }, level: 100, fainted: false }) });
        }, {});
    }
}
exports.Battle = Battle;
