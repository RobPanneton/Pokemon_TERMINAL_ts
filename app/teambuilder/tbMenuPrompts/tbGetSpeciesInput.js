"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tbGetNewSpeciesInput = void 0;
const prompts_1 = require("../../utils/prompts");
const tbGetNewSpeciesInput = (pokemonListString, validInputs) => {
    console.log(`${pokemonListString.join("")}   B) Go Back   E) Exit \n`);
    let userInput = (0, prompts_1.userInputPrompt)("Choose a Pokemon: ");
    if (userInput.toUpperCase() === "E")
        process.exit();
    if (userInput.toUpperCase() === "B")
        return "B";
    if (!/^[0-9]*$/.test(userInput))
        userInput = userInput.toUpperCase();
    while (!validInputs.includes(userInput)) {
        userInput = (0, prompts_1.userInputPrompt)("Please enter a valid Name or Pokedex Number: ");
    }
    return userInput;
};
exports.tbGetNewSpeciesInput = tbGetNewSpeciesInput;
