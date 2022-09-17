"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { introScreen } = require("./introScreen");
// const { mainMenu } = require("./mainMenu");
// const { initiateBattle } = require("./battle/battle");
// const { teambuilderMainMenu } = require("./teambuilder/teambuilderMainMenu");
// const { timeDelay } = require("./utils");    FOR GAME PAUSES
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // need async await for prompt to await
    yield introScreen();
    //   while (true) {
    //     let mainMenuInput = await mainMenu();
    //     if (mainMenuInput === 1) await initiateBattle();
    //     if (mainMenuInput === 2) await teambuilderMainMenu();
    //     if (mainMenuInput === 9) return await process.exit();
    //   }
    return process.exit();
});
start();
// test
// response = prompt("Pokemon TERMINAL");
