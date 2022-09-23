import { userInputPrompt } from "../../utils/prompts";

export const tbGetNewSpeciesInput = (pokemonListString, validInputs) => {
  console.log(`${pokemonListString.join("")}   B) Go Back   E) Exit \n`);
  let userInput = userInputPrompt("Choose a Pokemon: ");

  if (userInput.toUpperCase() === "E") process.exit();
  if (userInput.toUpperCase() === "B") return "B";

  if (!/^[0-9]*$/.test(userInput)) userInput = userInput.toUpperCase();

  while (!validInputs.includes(userInput)) {
    userInput = userInputPrompt(
      "Please enter a valid Name or Pokedex Number: "
    );
  }

  return userInput;
};
