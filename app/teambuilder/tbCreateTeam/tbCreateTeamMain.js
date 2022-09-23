"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeamMain = void 0;
const NewTeam_class_1 = require("../../classes/NewTeam.class");
const stringFormat_1 = require("../../utils/stringFormat");
const tbGetSpeciesInput_1 = require("../tbMenuPrompts/tbGetSpeciesInput");
const tbSelectAttacks_1 = require("../tbMenuPrompts/tbSelectAttacks");
const pokemon_1 = require("../../stats/pokemon");
const optionsFormatters_1 = require("../tbUtils/optionsFormatters");
const dataUtils_1 = require("../../utils/dataUtils");
const dataUpdateFormatters_1 = require("../tbUtils/dataUpdateFormatters");
const createTeamMain = () => {
    // get user data from local json file
    const userDataObj = (0, dataUtils_1.getLocalDataFromJSON)("userData");
    // compile valid inputs
    const validInputs = (0, optionsFormatters_1.formatValidSpeciesInputs)(pokemon_1.POKEMON);
    // set list for display menu
    const pokemonListString = (0, optionsFormatters_1.formatSpeciesOptionsString)(pokemon_1.POKEMON);
    console.log("=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n");
    let newTeam = new NewTeam_class_1.NewTeam();
    newTeam.getName(Object.keys(userDataObj.teams));
    // prompt user for inputs
    for (const slot of Object.keys(newTeam.team)) {
        console.log("CHOOSE A POKEMON !\n");
        const userInput = (0, tbGetSpeciesInput_1.tbGetNewSpeciesInput)(pokemonListString, validInputs);
        if (userInput.toUpperCase() === "B")
            (0, exports.createTeamMain)(); // restart teambuild process
        // find pokemon based on input
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
    const newUserDataJSON = (0, dataUpdateFormatters_1.formatNewTeamData)(userDataObj, newTeam);
    (0, dataUtils_1.setDataToLocalJSON)("userData", newUserDataJSON);
    console.log("team saved!");
    return;
};
exports.createTeamMain = createTeamMain;
