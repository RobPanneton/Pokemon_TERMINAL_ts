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
//   let teambuilderInput;
//   console.log("\nChoose an Option");
//   console.log(
//     "1) Create a Team     2) Edit a Team      3) Return to Main Menu"
//   );
//   teambuilderInput = Number(prompt("What will you do?  "));
//   console.log(typeof teambuilderInput);
//   // REFORMAT THIS
//   // while (/[1-3]/.test(teambuilderInput)) { DIDN'T WORK AS INPUT BEING A STRING
//   while (
//     teambuilderInput / 1 !== teambuilderInput ||
//     teambuilderInput < 1 ||
//     teambuilderInput > 3
//   ) {
//     console.log("\nChoose an Option");
//     console.log(
//       "1) Create a Team     2) Edit a Team      3) Return to Main Menu"
//     );
//     teambuilderInput = Number(prompt("What will you do?  "));
//   }
//   if (teambuilderInput === 1) createTeamMain();
//   if (teambuilderInput === 2) editTeamMain();
//   if (teambuilderInput === 3) return;
// };
