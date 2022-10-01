import { attackPrompt } from "../battle/battleMenuPrompts/attackPrompt";
import { battleTurn } from "../battle/battleTurn/battleTurn";
import { getNpcMove } from "../battle/battleUtils/getNpcMove";
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

    this.logDispatchPokemon(
      this.player.name,
      this.currentPokemon.playerPokemon.species
    );
    this.logDispatchPokemon(
      this.npc.name,
      this.currentPokemon.npcPokemon.species
    );
  }

  logDispatchPokemon(trainerName, pokemonName) {
    console.log(`${trainerName} sent out ${pokemonName}!`);
  }

  initTurn() {
    const playerMove = attackPrompt(this.currentPokemon.playerPokemon.attacks);
    const npcMove = getNpcMove(this.currentPokemon.npcPokemon.attacks);

    console.log({ playerMove, npcMove });

    battleTurn(
      this.currentPokemon.playerPokemon,
      playerMove,
      this.currentPokemon.npcPokemon,
      npcMove
    );
  }
}
