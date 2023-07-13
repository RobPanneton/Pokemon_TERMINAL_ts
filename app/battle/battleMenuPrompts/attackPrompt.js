"use strict";
exports.__esModule = true;
exports.attackPrompt = void 0;
var prompts_1 = require("../../utils/prompts");
var validators_1 = require("../../utils/validators");
var attackPrompt = function (attacks) {
    var attackList = attacks.map(function (attack, index) {
        return "".concat(index + 1, ") ").concat(attack.name, "           ");
    });
    console.log("\n".concat(attackList.join("")));
    var response = Number((0, prompts_1.userInputPrompt)("What will you do ? "));
    while (response > attackList.length ||
        !(0, validators_1.isOnlyOneToFour)(response.toString())) {
        console.log("\nPlease enter a valid response. \n");
        console.log(attackList.join(""));
        response = Number((0, prompts_1.userInputPrompt)("What will you do ? "));
    }
    return attacks[response - 1];
};
exports.attackPrompt = attackPrompt;
