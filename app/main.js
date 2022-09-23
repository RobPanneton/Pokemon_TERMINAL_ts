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
Object.defineProperty(exports, "__esModule", { value: true });
const battle_1 = require("./battle/battle");
const introScreen_1 = require("./introScreen");
const mainMenu_1 = require("./mainMenu");
const teambuilderMainMenu_1 = require("./teambuilder/teambuilderMainMenu");
// const { timeDelay } = require("./utils");    FOR GAME PAUSES
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // need async await for prompt to await
    yield (0, introScreen_1.introScreen)();
    while (true) {
        let mainMenuInput = (0, mainMenu_1.mainMenu)();
        if (mainMenuInput === 1)
            (0, battle_1.initiateBattle)();
        if (mainMenuInput === 2)
            (0, teambuilderMainMenu_1.teambuilderMainMenu)();
        if (mainMenuInput === 9)
            return process.exit();
    }
    return process.exit();
});
start();
// test
// response = prompt("Pokemon TERMINAL");
