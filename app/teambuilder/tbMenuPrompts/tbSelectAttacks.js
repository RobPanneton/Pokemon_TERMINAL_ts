"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tbAttacksInput = void 0;
const prompts_1 = require("../../utils/prompts");
const validators_1 = require("../../utils/validators");
const tbAttacksInput = (pokemonSpeciesAttacks) => {
    let attackListTemp = [...pokemonSpeciesAttacks];
    let userSelectedAttacks = [];
    for (let i = 0; i < 4; i++) {
        if (attackListTemp.length === 0)
            break;
        let attackListString = attackListTemp
            .map((attack, index) => {
            if ((index + 1) % 4 === 0 && index + 1 !== attackListTemp.length)
                return `${index + 1}) ${attack}\n`;
            return `${index + 1}) ${attack}  `;
        })
            .join("");
        console.log("\nSelect an Attack\n");
        console.log(attackListString);
        let attackSelectedInput = (0, prompts_1.userInputPrompt)("\nChoose an attack: ");
        while (Number(attackSelectedInput) > attackListTemp.length ||
            !(0, validators_1.isOnlyNumbers)(attackSelectedInput)) {
            attackSelectedInput = (0, prompts_1.userInputPrompt)("Please enter a valid option: ");
        }
        userSelectedAttacks.push(attackListTemp[Number(attackSelectedInput) - 1]);
        attackListTemp.splice(Number(attackSelectedInput) - 1, 1);
    }
    if (userSelectedAttacks.length < 4)
        addTrailingNulls(userSelectedAttacks, 4);
    return userSelectedAttacks;
};
exports.tbAttacksInput = tbAttacksInput;
const addTrailingNulls = (arr, length) => {
    if (arr.length < length)
        return addTrailingNulls([...arr, null], length);
    return arr;
};
