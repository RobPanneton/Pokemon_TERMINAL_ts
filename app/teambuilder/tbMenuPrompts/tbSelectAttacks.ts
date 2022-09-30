import { userInputPrompt } from "../../utils/prompts";
import { removeSpaces } from "../../utils/stringFormat";
import { isOnlyNumbers } from "../../utils/validators";

export const tbAttacksInput = (pokemonSpeciesAttacks) => {
  let attackListTemp: string[] = [...pokemonSpeciesAttacks];
  let userSelectedAttacks: string[] = [];

  for (let i = 0; i < 4; i++) {
    if (attackListTemp.length === 0) break;

    let attackListString = attackListTemp
      .map((attack, index) => {
        if ((index + 1) % 4 === 0 && index + 1 !== attackListTemp.length)
          return `${index + 1}) ${attack}\n`;
        return `${index + 1}) ${attack}  `;
      })
      .join("");

    console.log("\nSelect an Attack\n");
    console.log(attackListString);
    let attackSelectedInput: string = userInputPrompt("\nChoose an attack: ");

    while (
      Number(attackSelectedInput) > attackListTemp.length ||
      !isOnlyNumbers(attackSelectedInput)
    ) {
      attackSelectedInput = userInputPrompt("Please enter a valid option: ");
    }

    userSelectedAttacks.push(
      removeSpaces(attackListTemp[Number(attackSelectedInput) - 1])
    );
    attackListTemp.splice(Number(attackSelectedInput) - 1, 1);
  }

  if (userSelectedAttacks.length < 4) addTrailingNulls(userSelectedAttacks, 4);

  return userSelectedAttacks;
};

const addTrailingNulls = (arr, length) => {
  if (arr.length < length) return addTrailingNulls([...arr, null], length);
  return arr;
};
