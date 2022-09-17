"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teambuilderMainMenu = void 0;
// const { createTeamMain } = require("./createTeam/createTeamMain");
// const { editTeamMain } = require("./editTeamMain");
const tbFirstActionPrompt_1 = require("./tbMenuPrompts/tbFirstActionPrompt");
const teambuilderMainMenu = () => {
    const tbfirstActionOptions = [1, 2, 3];
    let tbMainActionInput = (0, tbFirstActionPrompt_1.tbMainActionPrompt)();
    while (!tbfirstActionOptions.includes(tbMainActionInput)) {
        console.log("\n\nPlease choose a valid option");
        tbMainActionInput = (0, tbFirstActionPrompt_1.tbMainActionPrompt)();
    }
    return process.exit();
};
exports.teambuilderMainMenu = teambuilderMainMenu;
// REFORMAT THIS
// const teambuilderMainMenu = () => {
//   if (teambuilderInput === 1) createTeamMain();
//   if (teambuilderInput === 2) editTeamMain();
//   if (teambuilderInput === 3) return;
// };
