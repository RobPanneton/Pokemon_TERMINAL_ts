"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePlayer = void 0;
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
                    }, level: 100, fainted: false }) });
        }, {});
    }
}
exports.BattlePlayer = BattlePlayer;
