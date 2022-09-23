"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeamMain = void 0;
const NewTeam_class_1 = require("../../classes/NewTeam.class");
const stringFormat_1 = require("../../utils/stringFormat");
const tbGetSpeciesInput_1 = require("../tbMenuPrompts/tbGetSpeciesInput");
const tbSelectAttacks_1 = require("../tbMenuPrompts/tbSelectAttacks");
const pokemon_1 = require("../../stats/pokemon");
// for the commit fail
// NEXT UP : GIVE TEAMS UNIQUE KEYS AND UNIQUE IDS
// MERGING THESE OBJECTS WITH THE SAME KEYS WILL NEVER WORK
// GIVE THEM KEYNAMES AND THEN THEY'LL MERGE PROPERLY, AND YOULL HAVE AN ID TO DELETE WITH IF NEEDED
const createTeamMain = () => {
    // compile valid inputs
    const validInputs = Object.keys(pokemon_1.POKEMON).reduce((acc, obj) => {
        if (pokemon_1.POKEMON[obj].attacks.length === 0)
            return [...acc];
        return [...acc, obj, pokemon_1.POKEMON[obj].id, (0, stringFormat_1.removeLeadingZeros)(pokemon_1.POKEMON[obj].id)];
    }, []);
    // set list for display menu
    const pokemonListString = Object.keys(pokemon_1.POKEMON).map((poke, index) => {
        if ((index + 1) % 4 === 0)
            return `${pokemon_1.POKEMON[poke].id}) ${pokemon_1.POKEMON[poke].species}\n\n`;
        return `${pokemon_1.POKEMON[poke].id}) ${pokemon_1.POKEMON[poke].species}   `;
    });
    console.log("=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n");
    // initiate team
    let newTeam = new NewTeam_class_1.NewTeam();
    newTeam.getName("team", "teamName");
    // prompt user for inputs
    for (const [slot] of Object.keys(newTeam.currentTeam)) {
        console.log("CHOOSE A POKEMON !\n");
        const userInput = (0, tbGetSpeciesInput_1.tbGetNewSpeciesInput)(pokemonListString, validInputs);
        if (userInput.toUpperCase() === "B")
            (0, exports.createTeamMain)(); // restart teambuild process
        // find how to find the pokemon based on input
        let selectedPokemon = Object.keys(pokemon_1.POKEMON).find((poke) => {
            if (pokemon_1.POKEMON[poke].id === userInput)
                return poke;
            if (pokemon_1.POKEMON[poke].species === userInput)
                return poke;
            if (pokemon_1.POKEMON[poke].id === (0, stringFormat_1.addLeadingZeros)(userInput))
                return poke;
        });
        const selectedAttacks = (0, tbSelectAttacks_1.tbAttacksInput)(pokemon_1.POKEMON[selectedPokemon].attacks);
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
exports.createTeamMain = createTeamMain;
