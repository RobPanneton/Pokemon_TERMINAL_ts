import { tbAttacksInput } from "../teambuilder/tbMenuPrompts/tbSelectAttacks";
import { tbGetNewSpeciesInput } from "../teambuilder/tbMenuPrompts/tbGetSpeciesInput";
import { createTeamMain } from "../teambuilder/tbCreateTeam/tbCreateTeamMain";
import {
  formatSpeciesOptionsString,
  formatValidSpeciesInputs,
} from "../teambuilder/tbUtils/optionsFormatters";

import { userInputPrompt } from "../utils/prompts";
import { addLeadingZeros } from "../utils/stringFormat";

import { POKEMON } from "../stats/pokemon";

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

  // get team name from the user
  getName = (currentNames: string[]) => {
    const name = userInputPrompt(`Name your team: `);
    if (currentNames.includes(name)) {
      console.log(`Team name ${name} already in use!\n`);
      return this.getName(currentNames);
    }
    return (this.teamName = name);
  };

  // add the selected pokemon to the appropriate slot
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

  // prompt user for team member species and attacks
  getTeamMembers = () => {
    for (const slot of Object.keys(this.team)) {
      console.log("CHOOSE A POKEMON !\n");

      const userInput: string = tbGetNewSpeciesInput(
        formatSpeciesOptionsString(),
        formatValidSpeciesInputs()
      );

      if (userInput.toUpperCase() === "B") createTeamMain(); // restart teambuild process

      // find pokemon based on input
      let selectedPokemon = Object.keys(POKEMON).find((poke) => {
        if (POKEMON[poke].id === userInput) return poke;
        if (POKEMON[poke].species === userInput) return poke;
        if (POKEMON[poke].id === addLeadingZeros(userInput)) return poke;
      });

      const selectedAttacks = tbAttacksInput(POKEMON[selectedPokemon].attacks);

      this.addNewPokemon(POKEMON[selectedPokemon], slot, selectedAttacks);
    }

    return;
  };
}
