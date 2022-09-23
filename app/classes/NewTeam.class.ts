import { userInputPrompt } from "../utils/prompts";

export class NewTeam {
  trainerName: string;
  teamName: string;
  team: any; //TODO << create type TeamPokemon
  currentSlot: number;

  constructor() {
    this.teamName = "";

    this.team = {
      slot_1: null,
      slot_2: null,
      slot_3: null,
      slot_4: null,
      slot_5: null,
      slot_6: null,
    };
  }

  getName = (currentNames: string[]) => {
    const name = userInputPrompt(`Name your team: `);
    if (currentNames.includes(name)) {
      console.log(`Team name ${name} already in use!\n`);
      return this.getName(currentNames);
    }
    return (this.teamName = name);
  };

  addNewPokemon = (species, slot, attacks) => {
    return (this.team = {
      ...this.team,
      [slot]: {
        id: `${slot}-${species.species}`,
        species: species.species,
        type: species.type,
        stats: species.stats,
        attacks: attacks,
      },
    });
  };
}
