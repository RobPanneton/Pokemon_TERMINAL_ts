// const { writeFileSync, readFileSync } = require("fs");
import { writeFileSync, readFileSync } from "fs";

import { NewTeam } from "../../classes/NewTeam.class";
import { addLeadingZeros, removeLeadingZeros } from "../../utils/stringFormat";
import { tbGetNewSpeciesInput } from "../tbMenuPrompts/tbGetSpeciesInput";
import { tbAttacksInput } from "../tbMenuPrompts/tbSelectAttacks";

import { POKEMON } from "../../stats/pokemon";

// for the commit fail
// NEXT UP : GIVE TEAMS UNIQUE KEYS AND UNIQUE IDS
// MERGING THESE OBJECTS WITH THE SAME KEYS WILL NEVER WORK
// GIVE THEM KEYNAMES AND THEN THEY'LL MERGE PROPERLY, AND YOULL HAVE AN ID TO DELETE WITH IF NEEDED

export const createTeamMain = () => {
  // compile valid inputs
  const validInputs = Object.keys(POKEMON).reduce((acc, obj) => {
    if (POKEMON[obj].attacks.length === 0) return [...acc];
    return [...acc, obj, POKEMON[obj].id, removeLeadingZeros(POKEMON[obj].id)];
  }, []);

  // set list for display menu
  const pokemonListString = Object.keys(POKEMON).map((poke, index) => {
    if ((index + 1) % 4 === 0)
      return `${POKEMON[poke].id}) ${POKEMON[poke].species}\n\n`;
    return `${POKEMON[poke].id}) ${POKEMON[poke].species}   `;
  });

  console.log(
    "=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n"
  );

  // initiate team
  let newTeam = new NewTeam();

  newTeam.getName("team", "teamName");

  // prompt user for inputs
  for (const [slot] of Object.keys(newTeam.currentTeam)) {
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
  }

  //   newTeam.currentTeam = {
  //     ...newTeam.currentTeam,
  //     ["slot_" + newTeam.currentSlot]: {
  //       id: selectedPokemon,
  //       species: POKEMON[selectedPokemon].species,
  //       type: POKEMON[selectedPokemon].type,
  //       stats: POKEMON[selectedPokemon].stats,
  //       attacks: selectedAttacks,
  //     },
  //   };

  //   newTeam.currentSlot++;
  // }

  // if (userInput === "8") createTeamMain();
  // if (userInput === "9") return;

  // // setTimeout(() => {}, 0); <<< to add saving time
  // console.log("Saving team...");

  // const currentTeamsJSON = readFileSync("./teams/userTeams.json");

  // const currentTeamsObj = JSON.parse(currentTeamsJSON);

  // console.log({ currentTeamsObj: currentTeamsObj });

  // let combineTeamsObj = { ...currentTeamsObj, ...newTeam };

  // console.log({ combineTeamsObj: combineTeamsObj });

  // const newTeamFileJSON = JSON.stringify({ teams: combineTeamsObj });

  // writeFileSync("./teams/userTeams.json", newTeamFileJSON);

  // console.log("Save Complete !");
  return;
};
