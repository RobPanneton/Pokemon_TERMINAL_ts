"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeamMain = void 0;
// const { writeFileSync, readFileSync } = require("fs");
const fs_1 = require("fs");
const NewTeam_class_1 = require("../../classes/NewTeam.class");
const stringFormat_1 = require("../../utils/stringFormat");
const tbGetSpeciesInput_1 = require("../tbMenuPrompts/tbGetSpeciesInput");
const tbSelectAttacks_1 = require("../tbMenuPrompts/tbSelectAttacks");
const pokemon_1 = require("../../stats/pokemon");
const optionsFormatters_1 = require("../tbUtils/optionsFormatters");
// for the commit fail
// NEXT UP : GIVE TEAMS UNIQUE KEYS AND UNIQUE IDS
// MERGING THESE OBJECTS WITH THE SAME KEYS WILL NEVER WORK
// GIVE THEM KEYNAMES AND THEN THEY'LL MERGE PROPERLY, AND YOULL HAVE AN ID TO DELETE WITH IF NEEDED
const createTeamMain = () => {
    // get user data from local json file
    const userDataObj = JSON.parse((0, fs_1.readFileSync)("./teams/userData.json", "utf-8"));
    // compile valid inputs
    const validInputs = (0, optionsFormatters_1.formatValidSpeciesInputs)(pokemon_1.POKEMON);
    // set list for display menu
    const pokemonListString = (0, optionsFormatters_1.formatSpeciesOptionsString)(pokemon_1.POKEMON);
    console.log("=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n");
    // initiate team
    let newTeam = new NewTeam_class_1.NewTeam();
    newTeam.getName(Object.keys(userDataObj.teams));
    // prompt user for inputs
    for (const slot of Object.keys(newTeam.team)) {
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
        newTeam.addNewPokemon(pokemon_1.POKEMON[selectedPokemon], slot, selectedAttacks);
    }
    const newTeamsObj = Object.assign(Object.assign({}, userDataObj.teams), { [newTeam.teamName]: Object.assign({}, newTeam) });
    const newUserDataJSON = JSON.stringify(Object.assign(Object.assign({}, userDataObj), { teams: newTeamsObj }));
    (0, fs_1.writeFileSync)("./teams/userData.json", newUserDataJSON);
    console.log("team saved!");
    return;
};
exports.createTeamMain = createTeamMain;
