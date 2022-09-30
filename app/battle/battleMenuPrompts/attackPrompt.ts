import { userInputPrompt } from "../../utils/prompts";
import { isOnlyOneToFour } from "../../utils/validators";

export const attackPrompt = (attacks) => {
  const attackList = attacks.map((attack, index) => {
    return `${index + 1}) ${attack.name}           `;
  });

  console.log(`\n${attackList.join("")}`);
  let response = Number(userInputPrompt("What will you do ? "));

  while (
    response > attackList.length ||
    !isOnlyOneToFour(response.toString())
  ) {
    console.log("\nPlease enter a valid response. \n");
    console.log(attackList.join(""));
    response = Number(userInputPrompt("What will you do ? "));
  }

  return attacks[response - 1];
};
