import { attackPrompt } from "../battle/battleMenuPrompts/attackPrompt";
import { battlePhase, winChecker } from "../battle/battleTurn/battleTurn";
import { getNpcMove } from "../battle/battleUtils/getNpcMove";
import { BattlePlayerT, BattlePokemonT } from "../types/BattlePlayer.type";
import { BattlePlayer } from "./BattlePlayer.class";

export class Battle {
  player: BattlePlayerT;
  npc: BattlePlayerT;
  winner: string;
  loser: string;
  outcome: string;
  isFinished: boolean;
  currentPokemon: {
    playerPokemon: BattlePokemonT;
    npcPokemon: BattlePokemonT;
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
    const playerMon = this.currentPokemon.playerPokemon;
    const npcMon = this.currentPokemon.npcPokemon;

    const playerMove = attackPrompt(playerMon.attacks);
    const npcMove = getNpcMove(npcMon.attacks);

    battlePhase(playerMon, playerMove, npcMon, npcMove);

    if (playerMon.health.hp === 0 || npcMon.health.hp === 0) {
      if (playerMon.health.hp === 0) {
        playerMon.fainted = true;
        // SEE HERE - REMOVE STATUSES WHEN THEY'RE ADDED
        this.player.team[playerMon.slot] = { ...playerMon };
        // SEE HERE -- HANDLE SWITCH IN
      }
      if (npcMon.health.hp === 0) {
        npcMon.fainted = true;
        // SEE HERE - REMOVE STATUSES WHEN THEY'RE ADDED
        this.npc.team[npcMon.slot] = { ...npcMon };
        // SEE HERE -- HANDLE SWITCH IN (take next mon available by default)
      }
      // npcSwitchIn();
    }

    if (winChecker(this.player.team)) {
      this.isFinished = true;
      this.winner = this.npc.name;
    }

    if (winChecker(this.npc.team)) {
      this.isFinished = true;
      this.winner = this.player.name;
    }

    // postBattlePhase()

    // this.checkIfWinner();
  }

  // FIX THIS
  // checkIfWinner() {
  //   this.isFinished =
  //     Object.keys(this.currentPokemon.playerPokemon).every(
  //       (e, i) => e[i].hp === 0
  //     ) ||
  //     Object.keys(this.currentPokemon.npcPokemon).every(
  //       (e, i) => e[i].hp === 0
  //     );
  // }
}
