"use strict";
exports.__esModule = true;
exports.tbMainActionPrompt = void 0;
var prompts_1 = require("../../utils/prompts");
var tbMainActionPrompt = function () {
    console.log("\nChoose an Option");
    console.log("1) Create a Team     2) Edit a Team      3) Return to Main Menu");
    return Number((0, prompts_1.userInputPrompt)("What will you do?  "));
};
exports.tbMainActionPrompt = tbMainActionPrompt;
