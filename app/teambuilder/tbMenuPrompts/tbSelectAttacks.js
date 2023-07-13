"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.tbAttacksInput = void 0;
var prompts_1 = require("../../utils/prompts");
var stringFormat_1 = require("../../utils/stringFormat");
var validators_1 = require("../../utils/validators");
var tbAttacksInput = function (pokemonSpeciesAttacks) {
    var attackListTemp = __spreadArray([], pokemonSpeciesAttacks, true);
    var userSelectedAttacks = [];
    for (var i = 0; i < 4; i++) {
        if (attackListTemp.length === 0)
            break;
        var attackListString = attackListTemp
            .map(function (attack, index) {
            if ((index + 1) % 4 === 0 && index + 1 !== attackListTemp.length)
                return "".concat(index + 1, ") ").concat(attack, "\n");
            return "".concat(index + 1, ") ").concat(attack, "  ");
        })
            .join("");
        console.log("\nSelect an Attack\n");
        console.log(attackListString);
        var attackSelectedInput = (0, prompts_1.userInputPrompt)("\nChoose an attack: ");
        while (Number(attackSelectedInput) > attackListTemp.length ||
            !(0, validators_1.isOnlyNumbers)(attackSelectedInput)) {
            attackSelectedInput = (0, prompts_1.userInputPrompt)("Please enter a valid option: ");
        }
        userSelectedAttacks.push((0, stringFormat_1.removeSpaces)(attackListTemp[Number(attackSelectedInput) - 1]));
        attackListTemp.splice(Number(attackSelectedInput) - 1, 1);
    }
    if (userSelectedAttacks.length < 4)
        addTrailingNulls(userSelectedAttacks, 4);
    return userSelectedAttacks;
};
exports.tbAttacksInput = tbAttacksInput;
var addTrailingNulls = function (arr, length) {
    if (arr.length < length)
        return addTrailingNulls(__spreadArray(__spreadArray([], arr, true), [null], false), length);
    return arr;
};
