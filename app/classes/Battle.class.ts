import { BattlePlayer } from "./BattlePlayer.class";

export class Battle {
  player: any;
  npc: any;
  winner: string;
  loser: string;
  currentPokemon: {
    playerPokemon: any;
    npcPokemon: any;
  };

  constructor(playerTeam, playerName, npcTeam, npcName) {
    this.initTeams(playerTeam, playerName, npcTeam, npcName);
  }

  initTeams(playerTeam, playerName, npcTeam, npcName) {
    this.player = new BattlePlayer(playerName, "player", playerTeam);
    this.npc = new BattlePlayer(npcName, "npc", npcTeam);
  }
}
