"use strict";
exports.__esModule = true;
exports.Battle = void 0;
var attackPrompt_1 = require("../battle/battleMenuPrompts/attackPrompt");
var battleTurn_1 = require("../battle/battleTurn/battleTurn");
var getNpcMove_1 = require("../battle/battleUtils/getNpcMove");
var BattlePlayer_class_1 = require("./BattlePlayer.class");
var Battle = /** @class */ (function () {
    function Battle(playerTeam, playerName, npcTeam, npcName) {
        this.player = new BattlePlayer_class_1.BattlePlayer(playerName, "player", playerTeam);
        this.npc = new BattlePlayer_class_1.BattlePlayer(npcName, "npc", npcTeam);
        this.currentPokemon = {
            playerPokemon: this.player.team.slot_1,
            npcPokemon: this.npc.team.slot_1
        };
        this.logDispatchPokemon(this.player.name, this.currentPokemon.playerPokemon.species);
        this.logDispatchPokemon(this.npc.name, this.currentPokemon.npcPokemon.species);
    }
    Battle.prototype.logDispatchPokemon = function (trainerName, pokemonName) {
        console.log("".concat(trainerName, " sent out ").concat(pokemonName, "!"));
    };
    Battle.prototype.initTurn = function () {
        var playerMove = (0, attackPrompt_1.attackPrompt)(this.currentPokemon.playerPokemon.attacks);
        var npcMove = (0, getNpcMove_1.getNpcMove)(this.currentPokemon.npcPokemon.attacks);
        (0, battleTurn_1.battleTurn)(this.currentPokemon.playerPokemon, playerMove, this.currentPokemon.npcPokemon, npcMove);
    };
    return Battle;
}());
exports.Battle = Battle;
