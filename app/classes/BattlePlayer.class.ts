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
    return Object.keys(team).reduce((acc, slot) => {
      return {
        ...acc,
        [slot]: {
          ...team[slot],
          health: {
            hp: team[slot].stats.hp,
            maxHp: team[slot].stats.hp,
          },
          level: 100,
          fainted: false,
        },
      };
    }, {});
  }
}
