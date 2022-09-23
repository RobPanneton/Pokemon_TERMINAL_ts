// const { writeFileSync, readFileSync } = require("fs");
import { writeFileSync, readFileSync } from "fs";

import { NewTeam } from "../../classes/NewTeam.class";
import { addLeadingZeros, removeLeadingZeros } from "../../utils/stringFormat";
import { tbGetNewSpeciesInput } from "../tbMenuPrompts/tbGetSpeciesInput";
import { tbAttacksInput } from "../tbMenuPrompts/tbSelectAttacks";

import { POKEMON } from "../../stats/pokemon";
import {
  formatSpeciesOptionsString,
  formatValidSpeciesInputs,
} from "../tbUtils/optionsFormatters";

// for the commit fail
// NEXT UP : GIVE TEAMS UNIQUE KEYS AND UNIQUE IDS
// MERGING THESE OBJECTS WITH THE SAME KEYS WILL NEVER WORK
// GIVE THEM KEYNAMES AND THEN THEY'LL MERGE PROPERLY, AND YOULL HAVE AN ID TO DELETE WITH IF NEEDED

export const createTeamMain = () => {
  // get user data from local json file
  const userDataObj = JSON.parse(
    readFileSync("./teams/userData.json", "utf-8")
  );
  // compile valid inputs
  const validInputs = formatValidSpeciesInputs(POKEMON);

  // set list for display menu
  const pokemonListString = formatSpeciesOptionsString(POKEMON);

  console.log(
    "=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n"
  );

  // initiate team
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

    // find how to find the pokemon based on input
    let selectedPokemon = Object.keys(POKEMON).find((poke) => {
      if (POKEMON[poke].id === userInput) return poke;
      if (POKEMON[poke].species === userInput) return poke;
      if (POKEMON[poke].id === addLeadingZeros(userInput)) return poke;
    });

    const selectedAttacks = tbAttacksInput(POKEMON[selectedPokemon].attacks);

    newTeam.addNewPokemon(POKEMON[selectedPokemon], slot, selectedAttacks);
  }

  const newTeamsObj = {
    ...userDataObj.teams,
    [newTeam.teamName]: {
      ...newTeam,
    },
  };

  const newUserDataJSON = JSON.stringify({
    ...userDataObj,
    teams: newTeamsObj,
  });

  writeFileSync("./teams/userData.json", newUserDataJSON);

  console.log("team saved!");

  return;
};
