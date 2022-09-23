// const { writeFileSync, readFileSync } = require("fs");
import { writeFileSync, readFileSync } from "fs";

import { NewTeam } from "../../classes/NewTeam.class";
import { addLeadingZeros } from "../../utils/stringFormat";
import { tbGetNewSpeciesInput } from "../tbMenuPrompts/tbGetSpeciesInput";
import { tbAttacksInput } from "../tbMenuPrompts/tbSelectAttacks";

import { POKEMON } from "../../stats/pokemon";
import {
  formatSpeciesOptionsString,
  formatValidSpeciesInputs,
} from "../tbUtils/optionsFormatters";
import {
  getLocalDataFromJSON,
  setDataToLocalJSON,
} from "../../utils/dataUtils";
import { formatNewTeamData } from "../tbUtils/dataUpdateFormatters";

export const createTeamMain = () => {
  // get user data from local json file
  const userDataObj = getLocalDataFromJSON("userData");

  // compile valid inputs
  const validInputs = formatValidSpeciesInputs(POKEMON);

  // set list for display menu
  const pokemonListString = formatSpeciesOptionsString(POKEMON);

  console.log(
    "=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n"
  );

  let newTeam = new NewTeam();

  newTeam.getName(Object.keys(userDataObj.teams));

  // prompt user for inputs
  for (const slot of Object.keys(newTeam.team)) {
    console.log("CHOOSE A POKEMON !\n");

    const userInput: string = tbGetNewSpeciesInput(
      pokemonListString,
      validInputs
    );

    if (userInput.toUpperCase() === "B") createTeamMain(); // restart teambuild process

    // find pokemon based on input
    let selectedPokemon = Object.keys(POKEMON).find((poke) => {
      if (POKEMON[poke].id === userInput) return poke;
      if (POKEMON[poke].species === userInput) return poke;
      if (POKEMON[poke].id === addLeadingZeros(userInput)) return poke;
    });

    const selectedAttacks = tbAttacksInput(POKEMON[selectedPokemon].attacks);

    newTeam.addNewPokemon(POKEMON[selectedPokemon], slot, selectedAttacks);
  }

  const newUserDataJSON = formatNewTeamData(userDataObj, newTeam);

  setDataToLocalJSON("userData", newUserDataJSON);

  console.log("team saved!");

  return;
};
