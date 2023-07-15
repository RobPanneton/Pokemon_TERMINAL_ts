import { attacks } from "../stats/attacks";

export class BattlePlayer {
  name: string;
  type: string;
  team: any;

  constructor(name, type, team) {
    this.name = name;
    this.type = type;
    this.team = this.initTeam(team);
  }

  private initTeam(team) {
    return Object.keys(team).reduce((acc, slot, index) => {
      return {
        ...acc,
        [slot]: {
          ...team[slot],
          slot: `slot_${index + 1}`,
          health: {
            hp: team[slot].stats.hp,
            maxHp: team[slot].stats.hp,
          },
          level: 100,
          fainted: false,
          attacks: this.mapAttacks(team[slot].attacks),
        },
      };
    }, {});
  }

  private mapAttacks(monAttacks) {
    return monAttacks.map((mAtk) => {
      return attacks[mAtk];
    });
  }
}
