import { BattlePlayer } from "./BattlePlayer.class";

export class Battle {
  player: any;
  npc: any;
  winner: string;
  loser: string;
  outcome: string;
  isFinished: boolean;
  currentPokemon: {
    playerPokemon: any;
    npcPokemon: any;
  };

  constructor(playerTeam, playerName, npcTeam, npcName) {
    this.player = new BattlePlayer(playerName, "player", playerTeam);
    this.npc = new BattlePlayer(npcName, "npc", npcTeam);

    this.currentPokemon = {
      playerPokemon: this.player.team.slot_1,
      npcPokemon: this.npc.team.slot_1,
    };
  }

  logDispatchPokemon(trainerName, pokemonName) {
    console.log(`${trainerName} sent out ${pokemonName}!`);
  }
}
