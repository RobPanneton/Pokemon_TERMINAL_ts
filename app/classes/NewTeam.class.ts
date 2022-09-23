import { userInputPrompt } from "../utils/prompts";

export class NewTeam {
  trainerName: string;
  teamName: string;
  currentTeam: any; //TOOD << create type TeamPokemon
  currentSlot: number;

  constructor() {
    this.teamName = "";

    this.currentTeam = {
      slot_1: null,
      slot_2: null,
      slot_3: null,
      slot_4: null,
      slot_5: null,
      slot_6: null,
    };

    this.currentSlot = 1;
  }

  getName = (nameType, nameKey) => {
    const name = userInputPrompt(`Name your ${nameType}: `);
    return (this[nameKey] = name);
  };

  isFull = () => {
    return Object.keys(this.currentTeam).every(
      (slot) => this.currentTeam[slot] !== null
    );
  };

  addNewPokemon = (species, slot, attacks) => {
    return (this.currentTeam = {
      ...this.currentTeam,
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
