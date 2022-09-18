import { userInputPrompt } from "../utils/prompts";

export class NewTeam {
  trainerName: string;
  teamName: string;
  currentTeam: any; //TOOD << create type TeamPokemon
  currentSlot: number;

  constructor() {
    this.trainerName = "";
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
    this[nameKey] = name;
  };

  isFull = () => {
    return Object.keys(this.currentTeam).every(
      (slot) => this.currentTeam[slot] !== null
    );
  };
}
