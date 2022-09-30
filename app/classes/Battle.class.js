"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
const BattlePlayer_class_1 = require("./BattlePlayer.class");
class Battle {
    constructor(playerTeam, playerName, npcTeam, npcName) {
        this.player = new BattlePlayer_class_1.BattlePlayer(playerName, "player", playerTeam);
        this.npc = new BattlePlayer_class_1.BattlePlayer(npcName, "npc", npcTeam);
        this.currentPokemon = {
            playerPokemon: this.player.team.slot_1,
            npcPokemon: this.npc.team.slot_1,
        };
        console.log("\n");
        this.logDispatchPokemon(this.player.name, this.currentPokemon.playerPokemon.species);
        this.logDispatchPokemon(this.npc.name, this.currentPokemon.npcPokemon.species);
    }
    logDispatchPokemon(trainerName, pokemonName) {
        console.log(`${trainerName} sent out ${pokemonName}!`);
    }
}
exports.Battle = Battle;
