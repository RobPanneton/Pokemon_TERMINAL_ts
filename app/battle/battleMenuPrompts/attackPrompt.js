"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attackPrompt = void 0;
const prompts_1 = require("../../utils/prompts");
const validators_1 = require("../../utils/validators");
const attackPrompt = (attacks) => {
    const attackList = attacks.map((attack, index) => {
        return `${index + 1}) ${attack.name}           `;
    });
    console.log(`\n${attackList.join("")}`);
    let response = Number((0, prompts_1.userInputPrompt)("What will you do ? "));
    while (response > attackList.length ||
        !(0, validators_1.isOnlyOneToFour)(response.toString())) {
        console.log("\nPlease enter a valid response. \n");
        console.log(attackList.join(""));
        response = Number((0, prompts_1.userInputPrompt)("What will you do ? "));
    }
    return attacks[response - 1];
};
exports.attackPrompt = attackPrompt;
