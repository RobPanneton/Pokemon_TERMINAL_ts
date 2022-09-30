"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
const attackPrompt_1 = require("../battle/battleMenuPrompts/attackPrompt");
const BattlePlayer_class_1 = require("./BattlePlayer.class");
class Battle {
    constructor(playerTeam, playerName, npcTeam, npcName) {
        this.player = new BattlePlayer_class_1.BattlePlayer(playerName, "player", playerTeam);
        this.npc = new BattlePlayer_class_1.BattlePlayer(npcName, "npc", npcTeam);
        this.currentPokemon = {
            playerPokemon: this.player.team.slot_1,
            npcPokemon: this.npc.team.slot_1,
        };
        this.logDispatchPokemon(this.player.name, this.currentPokemon.playerPokemon.species);
        this.logDispatchPokemon(this.npc.name, this.currentPokemon.npcPokemon.species);
    }
    logDispatchPokemon(trainerName, pokemonName) {
        console.log(`${trainerName} sent out ${pokemonName}!`);
    }
    initTurn() {
        const response = (0, attackPrompt_1.attackPrompt)(this.currentPokemon.playerPokemon.attacks);
        console.log(response);
    }
}
exports.Battle = Battle;
