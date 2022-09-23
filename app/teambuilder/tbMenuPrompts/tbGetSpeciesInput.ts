import { userInputPrompt } from "../../utils/prompts";
import { isOnlyNumbers } from "../../utils/validators";

export const tbGetNewSpeciesInput = (pokemonListString, validInputs) => {
  console.log(`${pokemonListString}   R) Restart   E) Exit \n`);
  let userInput = userInputPrompt("Choose a Pokemon: ");

  if (userInput.toUpperCase() === "E") process.exit();
  if (userInput.toUpperCase() === "R") return "R";
  // idea for returning to mainmenu, try to see if process.abort or something similar would stop this function from continuing
  // could not return start() since the function call can't accept a promise as a returned value

  if (!isOnlyNumbers(userInput)) userInput = userInput.toUpperCase();

  while (!validInputs.includes(userInput)) {
    userInput = userInputPrompt(
      "Please enter a valid Name or Pokedex Number: "
    );
  }

  return userInput;
};
