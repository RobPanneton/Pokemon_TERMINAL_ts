"use strict";
exports.__esModule = true;
exports.tbGetNewSpeciesInput = void 0;
var prompts_1 = require("../../utils/prompts");
var validators_1 = require("../../utils/validators");
var tbGetNewSpeciesInput = function (pokemonListString, validInputs) {
    console.log("".concat(pokemonListString, "   R) Restart   E) Exit \n"));
    var userInput = (0, prompts_1.userInputPrompt)("Choose a Pokemon: ");
    if (userInput.toUpperCase() === "E")
        process.exit();
    if (userInput.toUpperCase() === "R")
        return "R";
    // idea for returning to mainmenu, try to see if process.abort or something similar would stop this function from continuing
    // could not return start() since the function call can't accept a promise as a returned value
    if (!(0, validators_1.isOnlyNumbers)(userInput))
        userInput = userInput.toUpperCase();
    while (!validInputs.includes(userInput)) {
        userInput = (0, prompts_1.userInputPrompt)("Please enter a valid Name or Pokedex Number: ");
    }
    return userInput;
};
exports.tbGetNewSpeciesInput = tbGetNewSpeciesInput;
