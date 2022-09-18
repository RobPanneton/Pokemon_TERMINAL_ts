// const { writeFileSync, readFileSync } = require("fs");
import { writeFileSync, readFileSync } from "fs";

import { NewTeam } from "../../classes/NewTeam.class";
import { removeLeadingZeros } from "../../utils/stringFormat";

// const { getNewSpeciesInput } = require("./getNewSpeciesInput");
// const { getNewAttacks } = require("./getNewAttacks");

const { POKEMON } = require("../../stats/pokemon");

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

  console.log(validInputs);

  // console.log(
  //   "=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n"
  // );

  // // initiate team
  // let newTeam = new NewTeam();

  // newTeam.teamName = newTeam.getName("team");

  // // prompt user for inputs
  // let userInput;
  // while (!newTeam.isFull()) {
  //   console.log("CHOOSE A POKEMON !\n");

  //   userInput = getNewSpeciesInput(pokemonListString, validInputs);
  //   if (userInput === "9" || userInput === "8") break;

  //   console.log(userInput);
  //   // find how to find the pokemon based on input
  //   let selectedPokemon = Object.keys(POKEMON).find((poke) => {
  //     if (POKEMON[poke].id === userInput) return poke;
  //     if (POKEMON[poke].species === userInput) return poke;
  //     if (POKEMON[poke].id === addLeadingZeros(userInput)) return poke;
  //   });

  //   const selectedAttacks = getNewAttacks(POKEMON[selectedPokemon].attacks);

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
