"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teambuilderMainMenu = void 0;
// const { editTeamMain } = require("./editTeamMain");
const tbCreateTeamMain_1 = require("./tbCreateTeam/tbCreateTeamMain");
const tbEditTeamMain_1 = require("./tbEditTeam/tbEditTeamMain");
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
    if (tbMainActionInput === 2)
        (0, tbEditTeamMain_1.editTeamMain)();
    if (tbMainActionInput === 3)
        return;
    return process.exit();
};
exports.teambuilderMainMenu = teambuilderMainMenu;
