"use strict";
exports.__esModule = true;
exports.mainMenu = void 0;
var prompt = require("prompt-sync")({ sigint: true });
var mainMenu = function () {
    var response;
    console.log("\nWhat will you do?\n");
    console.log("1) Battle!         2) Team Builder             9) Exit");
    response = Number(prompt("What will you do?  "));
    while (response !== 1 && response !== 2 && response !== 9) {
        console.log("\nPlease enter a valid response. ");
        response = Number(prompt("What will you do?  "));
    }
    return response;
};
exports.mainMenu = mainMenu;
