"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.BattlePlayer = void 0;
var attacks_1 = require("../stats/attacks");
var BattlePlayer = /** @class */ (function () {
    function BattlePlayer(name, type, team) {
        this.name = name;
        this.type = type;
        this.team = this.initTeam(team);
    }
    BattlePlayer.prototype.initTeam = function (team) {
        var _this = this;
        return Object.keys(team).reduce(function (acc, slot) {
            var _a;
            return __assign(__assign({}, acc), (_a = {}, _a[slot] = __assign(__assign({}, team[slot]), { health: {
                    hp: team[slot].stats.hp,
                    maxHp: team[slot].stats.hp
                }, level: 100, fainted: false, attacks: _this.mapAttacks(team[slot].attacks) }), _a));
        }, {});
    };
    BattlePlayer.prototype.mapAttacks = function (monAttacks) {
        return monAttacks.map(function (mAtk) {
            return attacks_1.attacks[mAtk];
        });
    };
    return BattlePlayer;
}());
exports.BattlePlayer = BattlePlayer;
