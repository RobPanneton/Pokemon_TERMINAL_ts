"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teambuilderMainMenu = void 0;
// const { editTeamMain } = require("./editTeamMain");
const tbCreateTeamMain_1 = require("./tbCreateTeam/tbCreateTeamMain");
const tbFirstActionPrompt_1 = require("./tbMenuPrompts/tbFirstActionPrompt");
const teambuilderMainMenu = () => {
    const tbfirstActionOptions = [1, 2, 3];
    let tbMainActionInput = (0, tbFirstActionPrompt_1.tbMainActionPrompt)();
    while (!tbfirstActionOptions.includes(tbMainActionInput)) {
        console.log("\n\nPlease choose a valid option");
        tbMainActionInput = (0, tbFirstActionPrompt_1.tbMainActionPrompt)();
    }
    if (tbMainActionInput === 1)
        (0, tbCreateTeamMain_1.createTeamMain)();
    //   if (teambuilderInput === 2) editTeamMain();
    //   if (teambuilderInput === 3) return;
    return process.exit();
};
exports.teambuilderMainMenu = teambuilderMainMenu;
