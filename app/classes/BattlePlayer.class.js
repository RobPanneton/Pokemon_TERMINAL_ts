"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePlayer = void 0;
const attacks_1 = require("../stats/attacks");
class BattlePlayer {
    constructor(name, type, team) {
        this.name = name;
        this.type = type;
        this.team = this.initTeam(team);
    }
    initTeam(team) {
        return Object.keys(team).reduce((acc, slot) => {
            return Object.assign(Object.assign({}, acc), { [slot]: Object.assign(Object.assign({}, team[slot]), { health: {
                        hp: team[slot].stats.hp,
                        maxHp: team[slot].stats.hp,
                    }, level: 100, fainted: false, attacks: this.mapAttacks(team[slot].attacks) }) });
        }, {});
    }
    mapAttacks(monAttacks) {
        return monAttacks.map((mAtk) => {
            return attacks_1.attacks[mAtk];
        });
    }
}
exports.BattlePlayer = BattlePlayer;
